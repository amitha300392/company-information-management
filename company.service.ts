import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://trainingapi.ridewaretech.com/api/company';

  constructor(private http: HttpClient) {}

  getCompanyInfo(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateCompanyInfo(companyInfo: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, companyInfo);
  }
}
