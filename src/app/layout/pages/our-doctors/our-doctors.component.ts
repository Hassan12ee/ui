import { Component } from '@angular/core';

@Component({
  selector: 'app-our-doctors',
  standalone: true,
  imports: [],
  templateUrl: './our-doctors.component.html',
  styleUrl: './our-doctors.component.scss'
})
export class OurDoctorsComponent {
  items:any[]=[{name :'hassan',subtitle:'Neurologist, one of the best doctors in the Middle East',photo:"assets/images/download (2).jpeg"},
    {name:'ahmed',subtitle:'Neurologist, one of the best doctors in the Middle East',photo:"assets/images/download (2).jpeg"},
    {name:'mehrez',subtitle:'Neurologist, one of the best doctors in the Middle East',photo:"assets/images/download (2).jpeg"}
    ,{name:'banna',subtitle:'Neurologist, one of the best doctors in the Middle East',photo:"assets/images/download (2).jpeg"}];
}
