import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UploadImageService} from '../../../shared/services/upload-image.service';
import {NotificationService} from '../../../shared/services/notification.service';
import {take} from 'rxjs';
import {PersonalInfo} from '../../models/new-user.interface';
import {LocalUsersService} from '../../services/local-users-service';


@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personalInfo!: PersonalInfo;

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
    this.createFormData();
    this.usersService.getUserById('1').subscribe(response => {
      if(response) {
        this.personalInfo = response.personalInfo;
      }
    });
  }

  onSelectFile(inputFile: any): void {
    const reader: FileReader = new FileReader();
    reader.onload = () => {
      this.filePath = reader.result as string;
    };

    reader.readAsDataURL(inputFile.files[0]);
  }

  onSubmit(): void {
    if(this.file !== null) {
      this.uploadImageService.uploadImage(this.file)
      .pipe(take(1))
      .subscribe(
        response => this.notificationService.success(response)
      );
    }
  }

  private createFormData(): void {
    this.myForm = this.formBuilder.group({
      img: [null],
      filename: ['']
    });
  }
}
