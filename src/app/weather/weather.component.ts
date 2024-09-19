import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  lat: number = 42.3478;  
  lon: number = -71.0466; 
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

 
  getWeather() {
    this.weatherService.getWeather(this.lat, this.lon)
      .subscribe(
        data => {
          const timeline = data.timelines.minutely[0].values;
          this.weatherData = {
            temperature: timeline.temperature,
            windSpeed: timeline.windSpeed,
            humidity: timeline.humidity,
            pressure: timeline.pressureSurfaceLevel
          };
        },
        error => {
          console.error('Error fetching weather data:', error);
        }
      );
  }
}
