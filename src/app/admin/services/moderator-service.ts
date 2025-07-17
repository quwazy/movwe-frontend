import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ModeratorDto, CreateModeratorDto, UpdateModeratorDto } from '../models/moderator-interface';

@Injectable({
  providedIn: 'root'
})
export class ModeratorService {
  private readonly apiUrl = `${environment.apiUrl}/moderators`;

  constructor(private http: HttpClient) { }

  //Get by id
  getById(id: number): Observable<ModeratorDto> {
    return this.http.get<ModeratorDto>(`${this.apiUrl}/getById/}${id}`);
  }

  //Get all
  getAll(): Observable<Array<ModeratorDto>> {
    return this.http.get<Array<ModeratorDto>>(`${this.apiUrl}/getAll`);
  }

  //Create moderator
  create(createDto: CreateModeratorDto): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/create`, createDto);
  }

  //Update moderator
  update(updateDto: UpdateModeratorDto): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/update`, updateDto);
  }

  //Update status
  changeActive(id: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/active/${id}`, null);
  }

  //Delete moderator
  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteById/${id}`);
  }

  //Delete all moderators
  deleteAll(): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteAll`);
  }
}
