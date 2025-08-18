import { Component, ElementRef, ViewChild } from "@angular/core";
import { Istudent } from "../../models/student";
import { studentsArr } from "../../const/const";

@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.scss']
})
export class StudentComponent{
studentsArray:Array<Istudent>=studentsArr;
@ViewChild('fname') fname! :ElementRef;
@ViewChild('lname') lname! :ElementRef;
@ViewChild('email') email! :ElementRef;
@ViewChild('address') address!:ElementRef;
@ViewChild('contact') contact!:ElementRef;
@ViewChild('age') age!: ElementRef
onFormAdd(){
console.log("click")
let newstd={
    firstname:this.fname.nativeElement.value,
    lastname:this.lname.nativeElement.value,
    email:this.email.nativeElement.value,
    address:this.address.nativeElement.value,
    contact:this.contact.nativeElement.value,
    age:this.age.nativeElement.value

}
this.studentsArray.push(newstd)
this.fname.nativeElement.value=this.lname.nativeElement.value=this.email.nativeElement.value=this.address.nativeElement.value=this.contact.nativeElement.value=this.age.nativeElement.value=''

}

}







