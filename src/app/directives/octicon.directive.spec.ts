import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { OcticonDirective } from './octicon.directive';

@Component({
  selector: 'app-test-octicon-component',
  template: `
    <span octicon="book"></span>
    <span octicon="gear" size="12"></span>
    <span octicon="star" color="red"></span>
  `
})
class TestOcticonComponent { }

class MockElementRef extends ElementRef {
  constructor() { super(null); }
}

describe('Diretiva Octicon', () => {

  let fixture: ComponentFixture<TestOcticonComponent>;
  let component: TestOcticonComponent;
  let icons: DebugElement[];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestOcticonComponent, OcticonDirective],
      providers: [
        Renderer2,
        { provide: ElementRef, useClass: MockElementRef }
      ]
    });

    fixture = TestBed.createComponent(TestOcticonComponent);
    component = fixture.componentInstance;
    icons = fixture.debugElement.queryAll(By.directive(OcticonDirective));
    fixture.detectChanges();
  }));

  it('Verifica se inicializa', () => {
    expect(component).toBeTruthy();
  });

  it('verifica se tem icone', () => {
    const icon = icons[0];
    expect(icon.attributes['octicon']).toEqual('book');
  });

  it('verifica se tem icone com tamanho passado', () => {
    const icon = icons[1];
    expect(icon.attributes['octicon']).toEqual('gear');
    expect(icon.attributes['size']).toEqual('12');
  });

  it('verifica se tem icone com cor passada', () => {
    const icon = icons[2];
    expect(icon.attributes['octicon']).toEqual('star');
    expect(icon.attributes['color']).toEqual('red');
  });
});
