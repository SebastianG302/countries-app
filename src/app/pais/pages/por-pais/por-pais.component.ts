import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];

  //Se inicializa el servicio PaisService
  constructor(private paisService: PaisService) { }


  buscar( termino: string) {

    this.termino = termino
    this.hayError = false

    //se recibe el Observable de tipo pais y se hace el suscribe
    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        this.paises = paises;
      },
        (err) => {
          this.hayError = true;
          this.paises   = [];
        }
      )
  }

  sugerencias( termino: string){
    this.hayError = false
  }
}

