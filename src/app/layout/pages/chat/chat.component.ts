import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlowbiteService } from '../../../shared/services/flowbite/flowbite.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent  implements OnInit{
  constructor( private _Router:Router ,private _FlowbiteService:FlowbiteService){}
  ngOnInit(): void {
    this._FlowbiteService.loadFlowbite((flowbite: any) => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
}
