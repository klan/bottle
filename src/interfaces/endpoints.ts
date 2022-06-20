import { fetchJSON, formatParams } from 'helpers/fetch';

const baseUrl = 'https://api.punkapi.com/v2';

export interface OperationResult {
  success: boolean;
  message?: string;
}

interface IMashTemp {
  temp: {
    value: number;
    unit: string;
  };
  duration: number;
}

interface IMalt {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
}

interface IHops {
  name: string;
  amount: {
    value: number;
    unit: string;
  };
  add: string;
  attribute: string;
}

export interface BeerResponse {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  method: {
    mash_temp: IMashTemp[];
    fermentation: {
      temp: {
        value: number;
        unit: string;
      };
    };
    twist: string;
  };
  ingredients: {
    malt: IMalt[];
    hops: IHops[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}

export type GetBeersParams = { page: number; per_page: number };

export type GetBeersSuccess = BeerResponse[];

export const GetBeersUrl = `${baseUrl}/beers`;

export function GetBeers(params: GetBeersParams): Promise<GetBeersSuccess> {
  return fetchJSON<GetBeersSuccess>(`${GetBeersUrl}${formatParams(params)}`);
}
