import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
kuku: string;
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }
  addMess(text: string) {
    this.messageService.add(text);
  }
}
