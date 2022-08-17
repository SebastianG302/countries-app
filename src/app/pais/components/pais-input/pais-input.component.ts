import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { debounce, debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit{

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  dobouncer: Subject<string> = new Subject; //Subject es un observable al que se puede suscribir

  termino: string = ''
  constructor() { }

  emitirBuscar(){
    this.onEnter.emit( this.termino )
  }

  //Este metodo se ejecuta cada vez que el usuario presiona una tecla
  teclaPresionada(){
    this.dobouncer.next( this.termino ) //next envia mensajes a un observable
  }

  //detecta un cambio, pone un retraso de 300 milisegundos,
  //se suscribe al debouncer y muestra en consola

  ngOnInit(): void {
    this.dobouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( valor => {
      console.log(valor)
      this.onDebounce.emit( valor ) //emite el valor por el output
    })
  }

}
