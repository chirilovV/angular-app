import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {ConfirmDialog} from '../../../../shared/models/confirm-dialog.interface';
import {ConfirmDialogComponent} from '../../../../shared/components/confirm-dialog/confirm-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {AppRouteEnum} from '../../../Enums/appRouteEnum';
import {AuthorisationService} from '../../../../authentication/services/authorisation.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  isUserAuth: boolean = false;

  constructor(
    private authService: AuthorisationService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  get isAuth(): boolean {
    return this.authService.isUserAuthorised();
  }

  get userName(): string | null {
    return sessionStorage.getItem('name');
  }

  ngOnInit(): void {
  }

  logOut(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: new ConfirmDialog('', 'Are you sure to logout?')
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        this.authService.logOut();
        this.router.navigate([AppRouteEnum.Default]);
      }
    });
  }
}
