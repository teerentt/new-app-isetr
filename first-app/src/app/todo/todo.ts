import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class Todo {
  tasks = [
    {id:'1',title:"Task1"},
    {id:'2',title:"Task3"},
    {id:'3',title:"Task3"}
  ]
  input=""
  protected add(text:string) {
    this.tasks.push({id: String(this.tasks.length + 1), title: text})
    this.input = ""
  }
  protected remove(id: string){
    const newTasks =this.tasks.filter((item) => {
      if (item.id != id) return item;
      else return null;
    })
    this.tasks=newTasks;
  }
  protected update(id: string){
    const a=window.prompt("update your text") || ""
    this.tasks.map((task,index) => {
      if (task.id == id){
        alert("found")
        this.tasks[index].title=a;
      }

    })
  }
}

