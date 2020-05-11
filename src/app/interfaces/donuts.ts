export interface Donuts {
  count:number;  
  results: Donut[];
  }
  
  export interface Donut {
    name: string;
    calories: number;
    photo: string;
    id: number;
    ref: string;
   
  }