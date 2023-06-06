import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menubutton',
  templateUrl: './menubutton.component.html',
  styleUrls: ['./menubutton.component.scss']
})
export class MenubuttonComponent {

@Input() description: string = '';
@Input() selected: boolean = false;

@Output() 
click = new EventEmitter<void>();

onClick(){
  this.click.emit();
}


}
