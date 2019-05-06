import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable , of} from "rxjs";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

export interface UserDetails{
  _id:string
  first_name:string
  last_name:string
  email:string
  password:string
  exp:number
  iat:number
}

interface TokenResponse{
  token: string

}

export interface TokenPayload{
  _id: string
  first_name:string
  last_name:string
  email:string
  password:string
}

@Injectable()
export class AuthenticationService{
  private token:string

  constructer(private http: HttpClient, private router:Router){}

  private saveToken(token:string):void{
    localStorage.setItem('usertoken',token)
    this.token=token
  }

  private getToken():string{
    if(!this.token){
      this.token = localStorage.getItem('usertoken')
    }
    return this.token
  }

  public getUserdetails():UserDetails{
    const token = this.getToken()
    let payload
    if(token){
      payload = token.split('.')[1]
      payload = window.atob(payload)
      return JSON.parse(payload)
    }else{
      return null
    }
  }

  


}
