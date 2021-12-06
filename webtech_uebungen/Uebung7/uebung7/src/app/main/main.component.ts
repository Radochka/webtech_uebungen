import { Component, OnInit } from '@angular/core';
import MembersJson from '../../assets/members.json'

interface MEMBER {
  forename: string,
  surname: string,
  email: string
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  tableOn = false
  buttonText = 'Tabelle zeigen'
  members: MEMBER[] = MembersJson

  constructor() { }

  ngOnInit(): void {
    console.log(this.members)
  }
  tableOff(){
    // diese Funktion muss implementiert werden
    // buttonText aendern und
    // tableOn umschalten
    if (this.buttonText == 'Tabelle verstecken'){
      this.buttonText = 'Tabelle zeigen'
      this.tableOn = false
    }else{
      this.buttonText = 'Tabelle verstecken'
      this.tableOn = true
    }
  }

}
