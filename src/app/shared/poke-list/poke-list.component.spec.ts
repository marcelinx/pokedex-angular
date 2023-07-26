import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokeListComponent } from './poke-list.component';
import { PokeApiService } from 'src/app/service/poke-api.service';
import { of, throwError } from 'rxjs';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;
  let mockPokeApiService: jasmine.SpyObj<PokeApiService>;

  const mockPokemons = {
    results: [
      { name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
      { name: 'charmander', url: 'https://pokeapi.co/api/v2/pokemon/4/' },
      { name: 'squirtle', url: 'https://pokeapi.co/api/v2/pokemon/7/' },
    ],
  };

  beforeEach(async () => {
    mockPokeApiService = jasmine.createSpyObj('PokeApiService', ['apiListAllPokemons']);

    await TestBed.configureTestingModule({
      declarations: [PokeListComponent],
      providers: [{ provide: PokeApiService, useValue: mockPokeApiService }],
    }).compileComponents();

    // Obtenha uma instância real do serviço mockado
    mockPokeApiService = TestBed.inject(PokeApiService) as jasmine.SpyObj<PokeApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set all pokemons on initialization', () => {
    expect(component.getAllPokemons).toEqual(mockPokemons.results);
  });

  it('should set filtered pokemons on search', () => {
    const searchValue = 'bul';
    component.getSearch(searchValue);

    // A lista filtrada deve conter 'bulbasaur'
    expect(component.getAllPokemons).toEqual([{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' }]);
  });

    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.apiError).toBeTrue();
  });
