import { Routes } from '@angular/router';
import { CycleListComponent } from './components/cycle-list/cycle-list.component';
import { CycleDetailsComponent } from './components/cycle-details/cycle-details.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
  { path: '', component: CycleListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'cycle-details/:id', component: CycleDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'payment', component: PaymentComponent },
];
