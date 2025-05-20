import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  ni:any[]=[{
    image: 'https://static-00.iconduck.com/assets.00/logo-python-icon-2025x2048-b9y5g0s5.png',
    imag:'https://cdn-icons-png.flaticon.com/512/121/121537.png',
    ima:'https://static.vecteezy.com/system/resources/previews/019/044/725/non_2x/css-letter-logo-design-in-illustration-logo-calligraphy-designs-for-logo-poster-invitation-etc-vector.jpg',
    im:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJ09mXp0EZYejX8v-mc1osFYFcfBSa1fwZg&s',
    in:'https://www.svgrepo.com/show/369620/typescript.svg',
    inb:'https://www.svgrepo.com/show/327335/logo-angular.svg',
    id:'https://logoeps.com/wp-content/uploads/2014/02/38401-github-logo-silhouette-in-a-square-icon-vector-icon-vector-eps.png',
    imj:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjAZko2-7xQp9OrNn5C36L_B2MUAqc8FUFw&s'

}]

}
