import { Component, OnInit } from '@angular/core';
import {StoryService} from '../../story.service';
import {Story} from '../../story';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-crud-story',
  templateUrl: './crud-story.component.html',
  styleUrls: ['./crud-story.component.css']
})
export class CrudStoryComponent implements OnInit {

  private listStory:any=[];
  constructor(private storyService:StoryService,private router:Router) { }

  ngOnInit() {
    this.readStory();
  }
  // newAccount(event:any){
  //   event.preventDefault();
  //   this.accountService.setter(new Account());
  //   this.router.navigate(['/createUpdateAccount']);
   
  // }
  readStory(){
    this.storyService.readStory().subscribe(
      data=>{
        console.log(data);
        this.listStory = data;
      },
      error=>{
        console.log(error);
      }
    )
  }
  // updateAccount(acc)
  // {
  //   this.accountService.setter(acc);
  //   this.router.navigate(['/createUpdateAccount']);
  // }
  // deleteAccount(acc)
  // {
  //   this.accountService.deleteAccount(acc._id).subscribe(
  //     data=>{
  //       this.listAccount.splice(this.listAccount.indexOf(acc),1);

  //    //   Xóa 1 phần tử từ vị trí số 3
  //       // var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
  //       // var removed = myFish.splice(3, 1);
  //     },
  //     error=>{

  //     }
  //   )
  // }

}
