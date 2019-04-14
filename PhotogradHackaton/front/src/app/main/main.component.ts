import { Component, OnInit } from '@angular/core';
import { User, AnswerOption, Question, Mission } from '../shared/models/models';
import { ProviderService } from '../shared/services/provider.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user: User;
  public email: string = '';
  public password: string = '';
  public data: string;
  public status: string = '';
  public session: string ="7d9420b5_1779_4634_867c_6719cd99ac3c";
  public headername: string = "X-SESSION-ID";
  public Questions: Question[] = [];
  public questionsid: number;
  public questiontext: string;
  public questionimage: string;
  public questioncategory: string;
  public questionansweroptions: AnswerOption[] = [];
  public answeoptionid: number;
  public answeoptiontext: string;
  public answeoptionvalue: string;
  public missions: Mission[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  }

  user_login(){
    this.provider.user_login(this.email,this.password).then(res=>{
      this.status = res.status;
      this.data = res.data;
      console.log(res.data);
    });
  }

  questions(){
    this.provider.questions().then(res=>{
      this.Questions = res;
      console.log(res)
    });
  }

  getMissions(){
    this.provider.missions().then(res=>{
      this.missions = res;
    });
  }
}
