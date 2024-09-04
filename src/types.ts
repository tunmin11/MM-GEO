// src/types.ts

// Define type for a Township
export interface Township {
    eng: string;
    mm: string;
  }
  
  // Define type for a District
  export interface District {
    eng: string;
    mm: string;
    townships: Township[];
  }
  
  // Define type for a State
  export interface State {
    eng: string,
    mm: string,
    lat: number,
    lng: number,
    capital: string,
    districts: District[];
  }
  
  // Define type for the entire Myanmar geo data
  export interface MyanmarGeoData {
    states: State[];
  }
  