import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { MoneyTransferComponent } from './pages/money-transfer/money-transfer.component';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/users/user/user.component';
import { ViewUserComponent } from './pages/users/user/view-user/view-user.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { DepositMoneyComponent } from './pages/deposit-money/deposit-money.component';
import { WithdrawMoneyComponent } from './pages/withdraw-money/withdraw-money.component';
import { AddAccountComponent } from './pages/accounts/add-account/add-account.component';
import { AccountComponent } from './pages/accounts/account/account.component';
import { ViewAccountComponent } from './pages/accounts/account/view-account/view-account.component';

export const routes: Routes = [
    {
        path:'dashboard',
        component:DashboardComponent
    },
    {
        path:'accounts',
        component:AccountsComponent
    },
    {
        path:'transfer',
        component:MoneyTransferComponent
    },
    {
        path:'deposit-money',
        component:DepositMoneyComponent
    },
    {
        path:'users',
        component:UsersComponent
    },
    {
        path:'',
        component:LoginComponent
    },
    {
        path:'user',
        component:UserComponent
    },
    {
        path:'view-user',
        component:ViewUserComponent
    },
    {
        path:'add-user',
        component:AddUserComponent
    },
    {
        path:'withdraw-money',
        component:WithdrawMoneyComponent
    },
    {
        path:'add-account',
        component:AddAccountComponent
    },
    {
        path:'account',
        component:AccountComponent
    },
    {
        path:'view-account',
        component:ViewAccountComponent
    }
];
  