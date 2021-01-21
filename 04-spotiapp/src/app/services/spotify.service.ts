import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('servicio listo');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCaLi_kOjVZRHL3Uy-bQSoKw04IcT9w6VTelh03CGCyuwzl_n3uUUPQnamzmAOPDrNpm3O5-6lC4hfsiDs'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){

    return this.getQuery('browse/new-releases')
    .pipe( map( data => data['albums'].items) );

  }

  getArtistas(termino: string){

    return this.getQuery(`search?q=${ termino }&type=artist`)
    .pipe( map( data => data['artists'].items) );

  }

  getArtista(id: string){

    return this.getQuery(`artists/${ id }`);
    // .pipe( map( data => data['artists'].items) );

  }

  getTopTracks(id: string){

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
               .pipe( map( data => data['tracks']) );

  }
}
