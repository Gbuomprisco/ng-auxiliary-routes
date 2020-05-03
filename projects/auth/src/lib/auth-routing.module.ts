import { NgModule } from '@angular/core';
import { Route, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";

const routes: Route[] = [
  {
    component: AuthComponent,
    path: '',
    children: [
      {
        path: 'sign-in',
        loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      {
        path: '**',
        redirectTo: 'sign-in'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
