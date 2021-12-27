import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from './member';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = 'http://localhost:3001/members';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Member[]>{
    return this.http.get<Member[]>(this.baseUrl);
  }

  getOne(id: string): Observable<Member>{
    return this.http.get<Member>(this.baseUrl + '/' + id);
  }

  update(id: string, data: Member): Observable<Member> {
    return this.http.patch<Member>(this.baseUrl + '/' + id, data);
  }
  deleteOne(id: string): Observable<any>{
    return this.http.delete<any>(this.baseUrl + '/' + id, {observe: 'response'})
  }
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
}
