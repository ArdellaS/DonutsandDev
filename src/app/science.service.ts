import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { People } from "./interfaces/people";

@Injectable({
  providedIn: "root",
})
export class ScienceService {
  apiUrl =
    "https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json";
  
   
  constructor(private http:HttpClient) 
  {  }
  
  getPeople() {
    return this.http.get<People>(`${this.apiUrl}`);
  }
}
