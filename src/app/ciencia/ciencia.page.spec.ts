import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CienciaPage } from './ciencia.page';

describe('CienciaPage', () => {
  let component: CienciaPage;
  let fixture: ComponentFixture<CienciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CienciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CienciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
