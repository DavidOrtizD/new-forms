export interface Countries {
  name: CountryName;
  cca3: string;
}

export interface Borders {
  borders: string[];
}

interface CountryName {
  common: string;
  spa: any;
  official: string;
}