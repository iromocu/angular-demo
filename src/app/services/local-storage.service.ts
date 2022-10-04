import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Movements } from '../models/movements.interface';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService{
    
    save(){
        localStorage.setItem(environment.lsVariable, JSON.stringify('example'))
    }

    delete(){
        localStorage.removeItem(environment.lsVariable)
    }
}