import geoData from '../data/db.json';
import { getName } from './utils';

// Class structure for State, District, and Township
class Township {
  constructor(public eng: string, public mm: string) {}

  getName(): string {
    return getName(this);  // Return name based on current language setting
  }
}

class District {
  constructor(public eng: string, public mm: string, public townships: Township[]) {}

  getName(): string {
    return getName(this);
  }

  getTownships(): Township[] {
    // Map over townships to instantiate Township class
    return this.townships.map(township => new Township(township.eng, township.mm));
  }
}

class State {
  constructor(
    public eng: string,
    public mm: string,
    public lat: number,
    public lng: number,
    public capital: string,
    public districts: District[]
  ) {}

  getName(): string {
    return getName(this);
  }

  getDistricts(): District[] {
    // Map over districts to instantiate District class
    return this.districts.map(district => new District(district.eng, district.mm, district.townships.map(
      township => new Township(township.eng, township.mm)
    )));
  }
}

// Main function to retrieve states
export const getStates = (): State[] => {
  return geoData.states.map(state => new State(
    state.eng,
    state.mm,
    state.lat,
    state.lng,
    state.capital,
    state.districts.map(district => new District(
      district.eng,
      district.mm,
      district.townships.map(township => new Township(township.eng, township.mm))  // Map townships
    ))  // Map districts
  ));
};

export { initialize } from './hook'