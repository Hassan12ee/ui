import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowbiteService } from '../../../shared/services/flowbite/flowbite.service';

@Component({
  selector: 'app-check',
  standalone: true,
  imports: [],
  templateUrl: './check.component.html',
  styleUrl: './check.component.scss'
})
export class CheckComponent implements OnInit {
  constructor( private _Router:Router ,private _FlowbiteService:FlowbiteService){}
  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite((flowbite: any) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
