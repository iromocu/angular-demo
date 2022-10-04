import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RandomService{
    getRandomData(numberOfElements: number): number[]{
        const arrayNumbers: number[] = []
        for (let i = 0; i < numberOfElements; i++) {
            const element = this.generateRandomNumber(1,100)
            arrayNumbers.push(element)
        }
        return arrayNumbers
    }

    private generateRandomNumber = (min: number, max: number) => {
        let minAux: number = Math.ceil(min);
        let maxAux: number = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
}