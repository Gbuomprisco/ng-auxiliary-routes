import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInRoutingModule } from "./sign-in-routing.module";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { QuicklinkModule } from "ngx-quicklink";

@NgModule({
  declarations: [SignInComponent],
    imports: [
        CommonModule,
        QuicklinkModule,
        SignInRoutingModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ]
})
export class SignInModule { }
