declare type OutputDataType = WeatherCitiesType[];

declare interface WeatherCitiesType {
  weather: Weather;
  cities: RestCityType[];
}

declare interface RestCityType {
  id: number;
  name: string;
  coord: Coord;
  main: Main;
  dt: number;
  wind: Wind;
  clouds: Clouds;
}
