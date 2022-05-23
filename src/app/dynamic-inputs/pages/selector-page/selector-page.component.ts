import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CountryServiceService } from '../../services/country-service.service';
import { Subscription, Subject, switchMap, Observable, of } from 'rxjs';
import { Countries } from '../../interfaces/countries';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit, OnDestroy {

  public myForm: FormGroup = this._fb.group({
    region: ['', Validators.required],
    country: ['',Validators.required],
    border: ['',Validators.required]
  });

  public regions: string[] = [];

  public countries: Countries[] = [];

  public borders: any[] = [];

  private _subj = new Subject();

  private _selectRegionSubscription: Subscription = this.myForm.get('region')?.valueChanges.pipe(
    switchMap( (region) => { 
      return region!== "" ? this._getCountries(region) : of([]);
    })
  ).subscribe((countries: Countries[]) => {
    this.countries = countries;
  }) ?? this._subj.subscribe();
  
  private _selectCountrySubscription: Subscription = this.myForm.get('country')?.valueChanges.pipe(
    tap((country: string)=> {
      this.myForm.get('border')?.disable();
      this._resestBorders();
    }),
    switchMap( (country: string ) => {
      return country !== "" ? this._getCountryBorders(country) : of([]);
    })
  ).subscribe((borders: any) => {
    this.borders = borders.length > 0 && borders[0].borders ? borders[0].borders : [];
    this.borders.length > 0 ? this.myForm.get('border')?.enable() : null;
  }) ?? this._subj.subscribe();

  constructor( private _fb: FormBuilder, private _countryService: CountryServiceService) { }

  ngOnInit(): void {
    this.regions = this._countryService.regions;
  }

  ngOnDestroy(): void {
      this._selectRegionSubscription.unsubscribe();
      this._selectCountrySubscription.unsubscribe();
  }

  private _getCountries(region: string): Observable<Countries[]> {
    this._resestCountries();
    return this._countryService.getCountriesByRegion(region);
  }

  private _resestCountries(): void {
    this.countries = [];
    this.myForm.get('country')?.setValue('');
  }
  
  private _getCountryBorders(countryCode: string): Observable<any> {
    this._resestBorders();
    return this._countryService.getBordersByCountry(countryCode);
  }

  private _resestBorders(): void {
    this.borders = [];
    this.myForm.get('border')?.setValue('');
  }

  public save(): void {

  }

}
