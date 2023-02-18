import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Spot } from './spot.interface';

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private httpClient: HttpClient) { }

  getSpots() {
    return(this.httpClient.get<Spot[]>('https://portail-api-data.montpellier3m.fr/offstreetparking?limit=1000'));
  }

  getSpotDetail(id: string) {
    return(this.httpClient.get<Spot[]>('https://portail-api-data.montpellier3m.fr/offstreetparking?limite=1000&id=' + id));
  }
}
