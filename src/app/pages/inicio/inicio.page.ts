import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infitniteScroll: IonInfiniteScroll ;
  data: any[] = Array(3);

  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  toggleMenu(){
    this.menuCtrl.toggle();

  }

  loadData(event){
    console.log('Cargando');

    setTimeout(() => {
      if (this.data.length > 2) {
        event.target.complete();
        return;
        this.infitniteScroll.disabled = true;
        }
      const nuevoArr = Array (1);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000);
  }
}
