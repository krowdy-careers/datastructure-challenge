declare interface InputDataType {
  cities: CityType[];
}
declare interface CityType {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number;
  wind: Wind;
  clouds: Clouds;
  weather: Weather[];
}

declare interface Coord {
  lon: number;
  lat: number;
}

declare interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

declare interface Wind {
  speed: number;
  deg: number;
}

declare interface Clouds {
  all: number;
}

declare interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
