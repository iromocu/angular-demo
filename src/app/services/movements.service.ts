import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { lastValueFrom } from "rxjs";
import { Movements } from "../models/movements.interface";
import { PokeAPIResponse } from "../models/pokemon-resp.interface";

@Injectable({
    providedIn: 'root'
})
export class MovementsService{

    constructor(private httpClient: HttpClient){}

    async getData(offset=0,limit=15): Promise<Movements[]>{
        let movements: Movements[] = []
        const { results }  = await lastValueFrom( this.httpClient.get<PokeAPIResponse>(`https://pokeapi.co/api/v2/move/?offset=${offset}&limit=${limit}`)).then(
            data=>{
                return data
            }
        ).catch(error=>{
            console.error();
            throw Error(`Erro al llamar api`)
        })
        if(results.length > 0){
            movements = results.map(movement=>{
                return {
                    id: this.getID(movement.url),
                    movement: movement.name
                }
            })
        }
        return movements
    }

    private getID(url: string){
        const urlSplit = url.split('/')
        const id = +urlSplit[urlSplit.length - 2]
        return id
    }
}