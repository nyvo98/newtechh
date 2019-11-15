import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Story} from './story';


@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private story:Story;
  //private baseUri:string="http://localhost:8888";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  // createCategory(newStory:Story)
  // {
  //   return this.http.post(this.baseUri+'/cate/create',newStory,{headers:this.headers});
  // }
  
  readStory()
  {
    return this.http.get('http://127.0.0.1:8888/storys',{headers:this.headers});
  }
  // updateCategory(myCategory:Story)
  // {  return this.http.put(this.baseUri+'/cate/update',myCategory,{headers:this.headers});
    
  // }
  // deleteCategory(id:string)
  // {  return this.http.delete(this.baseUri+'/cate/delete/'+id,{headers:this.headers});
    
  // }
  setter(st:Story){
    this.story=st;
  }
  getter(){
    return this.story;
  }
}
