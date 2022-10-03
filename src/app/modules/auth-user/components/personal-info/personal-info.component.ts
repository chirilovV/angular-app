import {Component, OnInit} from '@angular/core';
import {LocalUsersService} from '../../../users/services/local-users-service';
import {User} from '../../../users/models/user.interface';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadImageService} from '../../../shared/services/upload-image.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {take} from 'rxjs';


@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  user!: User;
  myForm!: FormGroup;
  filePath!: string;
  file!: File;

  constructor(
    private usersService: LocalUsersService,
    private formBuilder: FormBuilder,
    private uploadImageService: UploadImageService,
    private notificationService: NotificationService
  ) {

  }

  ngOnInit(): void {
    this.getUser();
    this.myForm = this.formBuilder.group({
      img: [null],
      filename: ['']
    });
  }

  getUser(): void {
    this.usersService.getUserById('a5')
    .pipe(take(1))
    .subscribe(
      response => {
        this.user = response;
        this.filePath = this.user.imageUrl;
      }
    );
  }

  onSelectFile(inputFile: any) {
    this.file = inputFile.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };

    reader.readAsDataURL(this.file);
  }

  onSubmit(): void {
    if(null !== this.file) {
      this.uploadImageService.uploadImage(this.file)
      .pipe(take(1))
      .subscribe(
        response => this.notificationService.success(response)
      );
    }
  }
}
