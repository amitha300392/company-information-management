import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {
  companyInfo: any;
  isEditing = false;

  constructor(private companyService: CompanyService) {}

  ngOnInit() {
    this.loadCompanyInfo();
  }

  loadCompanyInfo() {
    this.companyService.getCompanyInfo().subscribe(data => {
      this.companyInfo = data;
    });
  }

  edit() {
    this.isEditing = true;
  }

  onSave() {
    this.companyService.updateCompanyInfo(this.companyInfo).subscribe(() => {
      this.isEditing = false;
    });
  }
}
