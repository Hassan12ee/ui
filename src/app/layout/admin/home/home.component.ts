import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowbiteService } from '../../../shared/services/flowbite/flowbite.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  constructor( private _Router:Router ,private _FlowbiteService:FlowbiteService){}
  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite((flowbite: any) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
