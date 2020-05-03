import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, PRIMARY_OUTLET, Router } from "@angular/router";

@Component({
  selector: 'sign-in',
  template: `
    <ng-template #dialog>
      <div mat-dialog-title>
        Sign In
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
      </div>

      <div mat-dialog-actions>
        <button mat-flat-button color="primary">
          Sign In
        </button>
      </div>
    </ng-template>
  `,
  styleUrls: ['./sign-in.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements AfterViewInit {
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
