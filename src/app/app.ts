// ...existing code...
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  
  

titles = signal('');
java= signal("");
javasript=signal("")
sql=signal("")
html=signal("")
css=signal("")
c=signal("")
cs=signal("")
python=signal("")

  setTitle(newTitle: string) {
  this.titles.set(newTitle);
  this.java.set("");
  this.javasript.set("");
  this.sql.set("");
  this.html.set('');
  this.css.set('')
  this.c.set('')
  this.cs.set('')
  this.python.set('')
  }
  getTitle() {
    return this.titles();
  }

 ngOnInit(){
    this.setTitle('Select Your Course');
   
  }
}
// ...existing code...