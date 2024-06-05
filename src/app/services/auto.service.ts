import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auto } from '../models/auto';

const base_url = "http://localhost:3000/autos"

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  constructor(private http: HttpClient) { }

  getAutos() {
    const endpoint = `${base_url}/`;
    return this.http.get<Auto[]>(endpoint)
  }
  getAutosById(id: any) {
    const endpoint = `${base_url}/${id}`;
    return this.http.get<Auto[]>(endpoint)
  }
  saveAuto(body: any) {
    const endpoint = `${base_url}/`;
    return this.http.post<Auto>(endpoint, body)
  }
  updateAuto(body: any, id: any) {
    const endpoint = `${base_url}/${id}`;
    return this.http.put<Auto>(endpoint, body)
  }
  deleteAuto(id: any) {
    const endpoint = `${base_url}/${id}`;
    return this.http.delete<Auto>(endpoint)

  }
}
