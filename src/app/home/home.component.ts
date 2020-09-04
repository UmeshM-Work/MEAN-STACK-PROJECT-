import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Observable } from 'rxjs';
import * as moment from 'moment';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LogalertComponent } from '../logalert/logalert.component';
import { DeleteComponent } from '../delete/delete.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  audioEvents = [
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
   
 
  ];
  audioObj = new Audio();
  // files=[
  //  { url:'./assets/audio/gal.mp3',name:"Title : Gal Gal Gale"},
  //  { url:'./assets/audio/Friends.mp3',name:"Title : Friends"},
  
  // ];
  currenTime='00:00';
  duration="00:00";
  seek=0
  
  url="./assets/audio/Friends.mp3"
  
  streamObserver(url){
    return new Observable(observer=>{
  
      this.audioObj.src=url;
      this.audioObj.load();
      this.audioObj.play();
     
  
      const handler=(event:Event)=>{
        this.seek=this.audioObj.currentTime
        console.log(event);
        this.currenTime=this.timeFormat(this.audioObj.currentTime);
        this.duration=this.timeFormat(this.audioObj.duration);
      }
  this.addEvent(this.audioObj,this.audioEvents,handler)
      return()=>{
  
        this.audioObj.pause();
        this.audioObj.currentTime=0;
  
        this.removeEvent(this.audioObj,this.audioObj,handler)
      }
  
    })
  }

  addEvent(obj,events,handler){
  
    events.forEach(event=>{
      obj.addEventListener(event,handler)
    })
  }
  removeEvent(obj,events,handler){
  
    events.forEach(event=>{
      obj.addEventListener(event,handler)
    })
  }
  
  setSeekTo(ev){
    this.audioObj.currentTime=ev.target.value;
  }
  
  setVolume(ev){
    this.audioObj.volume=ev.target.value;
    console.log(ev.target.value);
  }
  
  openFile(url){
    this.audioObj.src=url;
    this.audioObj.load();
    this.audioObj.play();
    this.streamObserver(url).subscribe(event=>{});
  
  
    console.log(url)
  }
  
  play(){this.audioObj.play();
    console.log('Clicked by button')}
  
  pause(){this.audioObj.pause();
    console.log('Clicked by button')}
  
  stop(){this.audioObj.pause();
    this.audioObj.currentTime=0;
    console.log('Clicked by button')}
  
    timeFormat(time,format="mm:ss"){
      const momentTime=time *1000;
      return moment.utc(momentTime).format(format)
  
    }
   



   song1(){

     const data={ url:'./assets/audio/WohChali(BombayVikings).mp3'}
    this.openFile(data.url)
     console.log(data);

   }

   song2(){
    const data={ url:'./assets/audio/Travie McCoy Ft. Bruno Mars - Billionaire.mp3'}
   this.openFile(data.url)
    console.log(data);

  }
  song3(){
    const data={ url:'./assets/audio/the fray - never say never.mp3'}
   this.openFile(data.url)
    console.log(data);

  }
  song4(){
    const data={ url:'./assets/audio/Dont let me down.mp3'}
   this.openFile(data.url)
    console.log(data);

  }
  song5(){
    const data={ url:'./assets/audio/Nelly - Just A Dream.mp3'}
   this.openFile(data.url)
    console.log(data);

  }
  song6(){
    const data={ url:'./assets/audio/Linkin Park - Faint.mp3'}
   this.openFile(data.url)
    console.log(data);

  }
  song7(){
    const data={ url:'./assets/audio/iyaz-replay.mp3'}
   this.openFile(data.url)
    console.log(data);

  }
  song8(){

    const data={ url:'./assets/audio/Venom eminem.mp3'}
    this.openFile(data.url)
     console.log(data);
  }
song9(){

  const data={ url:'./assets/audio/shape of you.mp3'}
  this.openFile(data.url)
   console.log(data);
}

song10(){

  const data={ url:'./assets/audio/ed perfect.mp3'}
  this.openFile(data.url)
   console.log(data);
}
song11(){

  const data={ url:'./assets/audio/Eminem-notafraid.mp3'}
  this.openFile(data.url)
   console.log(data);
}

song12(){

  const data={ url:'./assets/audio/godzilla.mp3'}
  this.openFile(data.url)
   console.log(data);
}
song13(){

  const data={ url:'./assets/audio/post rockstar.mp3'}
  this.openFile(data.url)
   console.log(data);
}
song14(){

  const data={ url:'./assets/audio/Post Malone - Circles.mp3'}
  this.openFile(data.url)
   console.log(data);
}

song15(){

  const data={ url:'./assets/audio/Ariana Grande - Dangerous Woman.mp3'}
  this.openFile(data.url)
   console.log(data);
}
song16(){

  const data={ url:'./assets/audio/Ariana Grande - 7 rings.mp3'}
  this.openFile(data.url)
   console.log(data);
}















  constructor(private router:Router,private modalService: NgbModal) { }

  ngOnInit(): void { 
    
    if(!sessionStorage.getItem('sid'))  {this.router.navigate(['login']);
  }
   }
  logout(){
 
//     sessionStorage.removeItem('sid')
//  this.router.navigate(['login'])

this.modalService.open(LogalertComponent, { centered: true });
}

del(){
  this.modalService.open(DeleteComponent, { centered: true });

}

}
