import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmDialog} from '../../../../shared/models/confirm-dialog.interface';
import {ConfirmDialogComponent} from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AppRouteEnum} from '../../../Enums/appRouteEnum';
import {AuthService} from '../../../../authentication/services/auth.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  isUserAuth: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  get isAuth(): boolean {
    this.authService.authorise().subscribe(response => {
      this.isUserAuth = response;
    });

    return this.isUserAuth;
  }

  get userName(): string | null {
    return sessionStorage.getItem('name');
  }

  ngOnInit(): void {
  }

  logOut(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialog('', 'Pleas confirm')
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.authService.logOut();
        this.router.navigate([AppRouteEnum.Default]);
      }
    });
  }
}
