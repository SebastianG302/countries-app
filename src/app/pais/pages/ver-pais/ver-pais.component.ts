import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
    '.badge{ margin: 3px; }'
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: any;




  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.paramMap.get('id')
    console.log(id)

    this.paisService.getPaisPorAlpha(id)
      .subscribe((pais) => {
        this.pais = pais[0];
      })

  }
}
