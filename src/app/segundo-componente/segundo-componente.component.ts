import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Rodrigo";
  dataNascimento = "1992-01-01";
  urlImagem = "/assets/midnight.jpg";

  mostrarDataNascimento(){
      alert(`A data de nascimento é: ${this.dataNascimento}` );
  }
}
