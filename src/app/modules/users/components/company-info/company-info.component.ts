import {Component, Input} from '@angular/core';
import {CompanyInfo} from '../../models/new-user.interface';

@Component({
  selector: 'company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.scss']
})

export class CompanyInfoComponent {
  @Input() company!: CompanyInfo;
}
