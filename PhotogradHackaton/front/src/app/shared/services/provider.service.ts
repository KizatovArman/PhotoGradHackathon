import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User, Question, AnswerOption, Mission} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  constructor(http: HttpClient) {
    super(http);
   }

   user_login(email: string, password: string): Promise<User> {
     return this.post('http://photograd.kz/hackathon/user_login/',{
      "email": email,
      "password":password
     });
   }

   questions(): Promise<Question[]>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('X-SESSION-ID','7d9420b5_1779_4634_867c_6719cd99ac3c');

    return this.get('http://photograd.kz/hackathon/questions/',{
      headers:httpHeaders,
    });
   }

   missions(): Promise<Mission[]>{
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('X-SESSION-ID','7d9420b5_1779_4634_867c_6719cd99ac3c');

     return this.get('http://photograd.kz/hackathon/missions/',{
      headers:httpHeaders,
     });
   }
}
