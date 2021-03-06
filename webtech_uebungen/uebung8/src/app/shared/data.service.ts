import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  data: Data[]
  constructor() {
    this.data = [
      {
        id: 1,
        jahr: 1237,
        stadt: "Berlin",
        link: "http://de.wikipedia.org/wiki/Berlin",
        bild: "assets/images/berlin.png"
    },
    {
        id: 2,
        jahr: 1624,
        stadt: "New York",
        link: "http://de.wikipedia.org/wiki/New_York_City",
        bild: "assets/images/newyork.png"
    },
    {
        id: 3,
        jahr: 1252,
        stadt: "Stockholm",
        link: "http://de.wikipedia.org/wiki/Stockholm",
        bild: "assets/images/stockholm.png"
    },
    {
        id: 4,
        jahr: 1827,
        stadt: "Bremerhaven",
        link: "http://de.wikipedia.org/wiki/Bremerhaven",
        bild: "assets/images/bremerhaven.png"
    },
    {
        id: 5,
        jahr: 150,
        stadt: "Bremen",
        link: "http://de.wikipedia.org/wiki/Bremen",
        bild: "assets/images/bremen.png"
    },
    {
        id: 6,
        jahr: 1202,
        stadt: "Bernau",
        link: "http://de.wikipedia.org/wiki/Bernau_bei_Berlin",
        bild: "assets/images/bernau.png"
    },
    {
        id: 7,
        jahr: 929,
        stadt: "Brandenburg",
        link: "http://de.wikipedia.org/wiki/Brandenburg_an_der_Havel",
        bild: "assets/images/brandenburg.png"
    },
    {
        id: 8,
        jahr: 805,
        stadt: "Magdeburg",
        link: "http://de.wikipedia.org/wiki/Magdeburg",
        bild: "assets/images/magdeburg.png"
    },
    {
        id: 9,
        jahr: 1222,
        stadt: "Marburg",
        link: "http://de.wikipedia.org/wiki/Marburg",
        bild: "assets/images/marburg.png"
    },
    {
        id: 10,
        jahr: 766,
        stadt: "Mannheim",
        link: "http://de.wikipedia.org/wiki/Mannheim",
        bild: "assets/images/mannheim.png"
    },
    {
        id: 11,
        jahr: 782,
        stadt: "Mainz",
        link: "http://de.wikipedia.org/wiki/Mainz",
        bild: "assets/images/mainz.png"
    }
    ]
   }

   getAll(): Data[] {
     return this.data
   }
   getOne(id:number): Data {
       return this.data[id-1]
   }
}
