import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.tomorrow.io/v4/weather/forecast';
  private apiKey = 'j9PaWjRYhw3AVibyU39fXkpe1pQBiZjg';  

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `${this.apiUrl}?location=${lat},${lon}&apikey=${this.apiKey}`;
    return this.http.get(url);
  }
}
