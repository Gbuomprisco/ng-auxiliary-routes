import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";

@Component({
  selector: 'sign-up',
  template: `
    <ng-template #dialog>
      <div mat-dialog-title>
        Sign Up
      </div>

      <div mat-dialog-content>
        <div>
          <mat-form-field appearance="outline">
            <input type="email" placeholder="Email" matInput />
          </mat-form-field>
        </div>

        <div>
          <mat-form-field appearance="outline">
            <input type="password" placeholder="Password" matInput />
          </mat-form-field>
        </div>

        <div>
          <mat-form-field appearance="outline">
            <input type="password" placeholder="Repeat Password" matInput />
          </mat-form-field>
        </div>
      </div>

      <div mat-dialog-actions>
        <button mat-flat-button color="primary">
          Sign Up
        </button>
      </div>
    </ng-template>
  `,
  styleUrls: ['./sign-up.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent implements AfterViewInit {
  @ViewChild('dialog') template: TemplateRef<any>;

  constructor(
      private dialog: MatDialog,
      private router: Router,
  ) { }

  ngAfterViewInit() {
    const ref = this.dialog.open(this.template, {
      width: '350px'
    });

    ref.afterClosed().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
