import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DetailsComponent } from './details.component';
import { PokeApiService } from 'src/app/service/poke-api.service';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let activatedRouteMock: any;
  let pokeApiServiceMock: any;

  beforeEach(async () => {
    activatedRouteMock = {
      snapshot: {
        params: { id: 1 } // Provide a mock ID for testing purposes
      }
    };

    pokeApiServiceMock = jasmine.createSpyObj('PokeApiService', ['apiGetPokemon']);

    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: PokeApiService, useValue: pokeApiServiceMock }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch Pokemon data on ngOnInit', () => {
    const pokemonData = { name: 'Pikachu', height: 40, weight: 60 }; // Sample Pokemon data for testing
    const speciesData = { flavor_text_entries: [{ flavor_text: 'A cute electric mouse.' }] }; // Sample species data for testing

    pokeApiServiceMock.apiGetPokemon.and.returnValue(of(pokemonData));
    pokeApiServiceMock.apiGetPokemon.and.returnValue(of(speciesData));

    component.ngOnInit();

    expect(pokeApiServiceMock.apiGetPokemon).toHaveBeenCalledTimes(2);
    expect(pokeApiServiceMock.apiGetPokemon).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');
    expect(pokeApiServiceMock.apiGetPokemon).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon-species/1');
    expect(component.pokemon).toEqual([pokemonData, speciesData]);
    expect(component.isLoading).toBeTruthy();
  });

  it('should handle API error on ngOnInit', () => {
    pokeApiServiceMock.apiGetPokemon.and.returnValue(('API Error'));

    component.ngOnInit();

    expect(pokeApiServiceMock.apiGetPokemon).toHaveBeenCalledTimes(2);
    expect(component.apiError).toBeTruthy();
  });
});
