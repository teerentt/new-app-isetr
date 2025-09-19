import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title="Nouveau titre";
  url="https://cdn.mos.cms.futurecdn.net/5LKYQLpfVJu4jkyCEExwXd-970-80.jpg.webp"
  changelogo = () =>{
    this.url="https://imgs.search.brave.com/LdTztN8HEUuVNmo5jBsOBhhODC2Q24BjFdBi4ICDvqI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmt5/bS1jZG4uY29tL3Bo/b3Rvcy9pbWFnZXMv/bmV3c2ZlZWQvMDAy/Lzc5My8yMDEvNzFm/LmpwZw"
  }

  
}

