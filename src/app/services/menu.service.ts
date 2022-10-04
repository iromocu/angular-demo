import { Injectable } from "@angular/core";
import { Menu } from '../models/menu.interface';

@Injectable({
    providedIn: 'root'
})
export class MenuService{
    getMenu(){
        const data: Menu[] = [
            {
                key: 'dashboard',
                description: 'DashBoard',
                icon: 'dashboard'
            },
            {
                key: 'portfolio',
                description: 'Portfolio',
                icon: 'timeline'
            },
            {
                key: 'balances',
                description: 'Balances',
                icon: 'account_balance'
            },
            {
                key: 'shares',
                description: 'Shares',
                icon: 'call_to_action'
            },
            {
                key: 'movements',
                description: 'Movements',
                icon: 'compare_arrows'
            },
        ]
        return data
    }
}