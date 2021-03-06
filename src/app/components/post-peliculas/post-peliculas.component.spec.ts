import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPeliculasComponent } from './post-peliculas.component';

describe('PostPeliculasComponent', () => {
  let component: PostPeliculasComponent;
  let fixture: ComponentFixture<PostPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
