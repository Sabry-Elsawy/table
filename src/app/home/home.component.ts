import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {


  name!:string;
  id!:number;



  data=[
    {userName:'sabry',Age:20,email:'sabry@gmail.com'},
    {userName:'Ahmed',Age:21,email:'Ahmed@gmail.com'},
    {userName:'Ali',Age:25,email:'Ali@gmail.com'},
    {userName:'Hossam',Age:23,email:'Hossam@gmail.com'},
    {userName:'Mohamed',Age:30,email:'Mohamed@gmail.com'}
  ]

  inputData(){
    if (this.id>0 && this.id<=this.data.length && this.id !== undefined) {
      this.data[this.id-1].userName=this.name
    }
  }
  clearInput(){
    this.name=''
  }
}
