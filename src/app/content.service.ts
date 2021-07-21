import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPost, ITheme } from './shared/interfaces';

import {environment} from '../environments/environment';
const API_URL = environment.apiURL;

@Injectable()
export class ContentService {

  constructor(private http: HttpClient) { }

  loadThemes(){
    // return this.http.get<ITheme[]>(`http://localhost:3000/api/themes`);
    return this.http.get<ITheme[]>(`${API_URL}/api/themes`)
  }

  loadPosts(limit?:number){
    const query = limit? `?limit=${limit}` :'';
    // return this.http.get<IPost[]>(`http://localhost:3000/api/posts${query}`);
    return this.http.get<IPost[]>(`${API_URL}/api/posts${query}`);
  }
}
