import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FilmsService} from "../films/films.service";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  id: String;
  currentFilm: any;
  static = {
    "page": 1,
    "total_results": 363408,
    "total_pages": 18171,
    "results": [
      {
        "vote_count": 1770,
        "id": 383498,
        "video": false,
        "vote_average": 7.8,
        "title": "Deadpool 2",
        "popularity": 331.443626,
        "poster_path": "\/to0spRl1CMDvyUbOnbb4fTk3VAd.jpg",
        "original_language": "en",
        "original_title": "Deadpool 2",
        "genre_ids": [
          28,
          35,
          878
        ],
        "backdrop_path": "\/3P52oz9HPQWxcwHOwxtyrVV1LKi.jpg",
        "adult": false,
        "overview": "Wisecracking mercenary Deadpool battles the evil and powerful Cable and other bad guys to save a boy's life.",
        "release_date": "2018-05-15"
      },
      {
        "vote_count": 4379,
        "id": 299536,
        "video": false,
        "vote_average": 8.5,
        "title": "Avengers: Infinity War",
        "popularity": 293.911879,
        "poster_path": "\/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
        "original_language": "en",
        "original_title": "Avengers: Infinity War",
        "genre_ids": [
          12,
          878,
          14,
          28
        ],
        "backdrop_path": "\/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
        "adult": false,
        "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        "release_date": "2018-04-25"
      },
      {
        "vote_count": 6530,
        "id": 284053,
        "video": false,
        "vote_average": 7.4,
        "title": "Thor: Ragnarok",
        "popularity": 182.093988,
        "poster_path": "\/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
        "original_language": "en",
        "original_title": "Thor: Ragnarok",
        "genre_ids": [
          28,
          12,
          14,
          878,
          35
        ],
        "backdrop_path": "\/kaIfm5ryEOwYg8mLbq8HkPuM1Fo.jpg",
        "adult": false,
        "overview": "Thor is on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the prophecy of destruction to his homeworld and the end of Asgardian civilization, at the hands of an all-powerful new threat, the ruthless Hela.",
        "release_date": "2017-10-25"
      },
      {
        "vote_count": 54,
        "id": 351286,
        "video": false,
        "vote_average": 7.2,
        "title": "Jurassic World: Fallen Kingdom",
        "popularity": 171.034031,
        "poster_path": "\/c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg",
        "original_language": "en",
        "original_title": "Jurassic World: Fallen Kingdom",
        "genre_ids": [
          28,
          12,
          878
        ],
        "backdrop_path": "\/gBmrsugfWpiXRh13Vo3j0WW55qD.jpg",
        "adult": false,
        "overview": "A volcanic eruption threatens the remaining dinosaurs on the island of Isla Nublar, where the creatures have freely roamed for several years after the demise of an animal theme park known as Jurassic World. Claire Dearing, the former park manager, has now founded the Dinosaur Protection Group, an organization dedicated to protecting the dinosaurs. To help with her cause, Claire has recruited Owen Grady, a former dinosaur trainer who worked at the park, to prevent the extinction of the dinosaurs once again.",
        "release_date": "2018-06-06"
      },
      {
        "vote_count": 641,
        "id": 348350,
        "video": false,
        "vote_average": 6.9,
        "title": "Solo: A Star Wars Story",
        "popularity": 162.16593,
        "poster_path": "\/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
        "original_language": "en",
        "original_title": "Solo: A Star Wars Story",
        "genre_ids": [
          28,
          12,
          878
        ],
        "backdrop_path": "\/7LZ0K4FsALrt7OeNIGOVLNuKQRU.jpg",
        "adult": false,
        "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
        "release_date": "2018-05-23"
      },
      {
        "vote_count": 1943,
        "id": 337167,
        "video": false,
        "vote_average": 6,
        "title": "Fifty Shades Freed",
        "popularity": 131.434102,
        "poster_path": "\/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
        "original_language": "en",
        "original_title": "Fifty Shades Freed",
        "genre_ids": [
          18,
          10749
        ],
        "backdrop_path": "\/9ywA15OAiwjSTvg3cBs9B7kOCBF.jpg",
        "adult": false,
        "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
        "release_date": "2018-01-17"
      },
      {
        "vote_count": 5809,
        "id": 284054,
        "video": false,
        "vote_average": 7.3,
        "title": "Black Panther",
        "popularity": 127.863853,
        "poster_path": "\/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        "original_language": "en",
        "original_title": "Black Panther",
        "genre_ids": [
          28,
          12,
          14,
          878
        ],
        "backdrop_path": "\/6ELJEzQJ3Y45HczvreC3dg0GV5R.jpg",
        "adult": false,
        "overview": "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
        "release_date": "2018-02-13"
      },
      {
        "vote_count": 10890,
        "id": 135397,
        "video": false,
        "vote_average": 6.5,
        "title": "Jurassic World",
        "popularity": 112.754331,
        "poster_path": "\/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
        "original_language": "en",
        "original_title": "Jurassic World",
        "genre_ids": [
          28,
          12,
          878,
          53
        ],
        "backdrop_path": "\/t5KONotASgVKq4N19RyhIthWOPG.jpg",
        "adult": false,
        "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
        "release_date": "2015-06-06"
      },
      {
        "vote_count": 8907,
        "id": 297762,
        "video": false,
        "vote_average": 7.2,
        "title": "Wonder Woman",
        "popularity": 106.003774,
        "poster_path": "\/imekS7f1OuHyUP2LAiTEM0zBzUz.jpg",
        "original_language": "en",
        "original_title": "Wonder Woman",
        "genre_ids": [
          28,
          12,
          14,
          10752,
          878
        ],
        "backdrop_path": "\/6iUNJZymJBMXXriQyFZfLAKnjO6.jpg",
        "adult": false,
        "overview": "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
        "release_date": "2017-05-30"
      },
      {
        "vote_count": 13288,
        "id": 118340,
        "video": false,
        "vote_average": 7.9,
        "title": "Guardians of the Galaxy",
        "popularity": 92.963648,
        "poster_path": "\/y31QB9kn3XSudA15tV7UWQ9XLuW.jpg",
        "original_language": "en",
        "original_title": "Guardians of the Galaxy",
        "genre_ids": [
          28,
          878,
          12
        ],
        "backdrop_path": "\/bHarw8xrmQeqf3t8HpuMY7zoK4x.jpg",
        "adult": false,
        "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        "release_date": "2014-07-30"
      },
      {
        "vote_count": 1988,
        "id": 300668,
        "video": false,
        "vote_average": 6.3,
        "title": "Annihilation",
        "popularity": 92.88798,
        "poster_path": "\/e3P2Ed0sbmQ6RsoS4dcT3aeEPR.jpg",
        "original_language": "en",
        "original_title": "Annihilation",
        "genre_ids": [
          9648,
          878,
          18,
          53
        ],
        "backdrop_path": "\/5zfVNTrkhMu673zma6qhFzG01ig.jpg",
        "adult": false,
        "overview": "A biologist signs up for a dangerous, secret expedition into a mysterious zone where the laws of nature don't apply.",
        "release_date": "2018-02-22"
      },
      {
        "vote_count": 1335,
        "id": 401981,
        "video": false,
        "vote_average": 6.4,
        "title": "Red Sparrow",
        "popularity": 84.019083,
        "poster_path": "\/vLCogyfQGxVLDC1gqUdNAIkc29L.jpg",
        "original_language": "en",
        "original_title": "Red Sparrow",
        "genre_ids": [
          9648,
          53
        ],
        "backdrop_path": "\/sGzuQYSTwJvLBc2PnuSVLHhuFeh.jpg",
        "adult": false,
        "overview": "Prima ballerina, Dominika Egorova faces a bleak and uncertain future after she suffers an injury that ends her career. She soon turns to Sparrow School, a secret intelligence service that trains exceptional young people to use their minds and bodies as weapons. Dominika emerges as the most dangerous Sparrow after completing the sadistic training process. As she comes to terms with her new abilities, she meets a CIA agent who tries to convince her that he is the only person she can trust.",
        "release_date": "2018-03-01"
      },
      {
        "vote_count": 1366,
        "id": 338970,
        "video": false,
        "vote_average": 6.2,
        "title": "Tomb Raider",
        "popularity": 83.286219,
        "poster_path": "\/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg",
        "original_language": "en",
        "original_title": "Tomb Raider",
        "genre_ids": [
          28,
          12,
          14,
          18,
          9648,
          53
        ],
        "backdrop_path": "\/bLJTjfbZ1c5zSNiAvGYs1Uc82ir.jpg",
        "adult": false,
        "overview": "Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
        "release_date": "2018-03-08"
      },
      {
        "vote_count": 5607,
        "id": 181808,
        "video": false,
        "vote_average": 7.1,
        "title": "Star Wars: The Last Jedi",
        "popularity": 76.483963,
        "poster_path": "\/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
        "original_language": "en",
        "original_title": "Star Wars: The Last Jedi",
        "genre_ids": [
          14,
          12,
          878
        ],
        "backdrop_path": "\/oVdLj5JVqNWGY0LEhBfHUuMrvWJ.jpg",
        "adult": false,
        "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
        "release_date": "2017-12-13"
      },
      {
        "vote_count": 353,
        "id": 395990,
        "video": false,
        "vote_average": 5.5,
        "title": "Death Wish",
        "popularity": 74.655934,
        "poster_path": "\/7FG13lLQcV9DC2Bhn0hjxc6AFXV.jpg",
        "original_language": "en",
        "original_title": "Death Wish",
        "genre_ids": [
          28,
          80,
          18,
          53
        ],
        "backdrop_path": "\/uQqQvmptJLPTcWDrZXn22p7j7s3.jpg",
        "adult": false,
        "overview": "A mild-mannered father is transformed into a killing machine after his family is torn apart by a violent act.",
        "release_date": "2018-03-02"
      },
      {
        "vote_count": 9119,
        "id": 263115,
        "video": false,
        "vote_average": 7.7,
        "title": "Logan",
        "popularity": 74.080053,
        "poster_path": "\/gGBu0hKw9BGddG8RkRAMX7B6NDB.jpg",
        "original_language": "en",
        "original_title": "Logan",
        "genre_ids": [
          28,
          18,
          878
        ],
        "backdrop_path": "\/5pAGnkFYSsFJ99ZxDIYnhQbQFXs.jpg",
        "adult": false,
        "overview": "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan's attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
        "release_date": "2017-02-28"
      },
      {
        "vote_count": 23,
        "id": 499772,
        "video": false,
        "vote_average": 5,
        "title": "Meet Me In St. Gallen",
        "popularity": 73.2258,
        "poster_path": "\/kZJEQFk6eiZ9X2x70ve6R1dczus.jpg",
        "original_language": "tl",
        "original_title": "Meet Me In St. Gallen",
        "genre_ids": [
          18,
          10749
        ],
        "backdrop_path": "\/7tvwYJPostpjFybjOeygnBHVxrW.jpg",
        "adult": false,
        "overview": "The story of Jesse and Celeste who meets at an unexpected time in their lives. They then realize their names are the same as the characters in the popular break-up romantic comedy, Celeste and Jesse Forever.",
        "release_date": "2018-02-07"
      },
      {
        "vote_count": 5700,
        "id": 119450,
        "video": false,
        "vote_average": 7.2,
        "title": "Dawn of the Planet of the Apes",
        "popularity": 71.449352,
        "poster_path": "\/2EUAUIu5lHFlkj5FRryohlH6CRO.jpg",
        "original_language": "en",
        "original_title": "Dawn of the Planet of the Apes",
        "genre_ids": [
          878,
          28,
          18,
          53
        ],
        "backdrop_path": "\/t7VSsAbIQS6kpO4ikuCNSiugsSy.jpg",
        "adult": false,
        "overview": "A group of scientists in San Francisco struggle to stay alive in the aftermath of a plague that is wiping out humanity, while Caesar tries to maintain dominance over his community of intelligent apes.",
        "release_date": "2014-06-26"
      },
      {
        "vote_count": 0,
        "id": 343111,
        "video": false,
        "vote_average": 0,
        "title": "Aage Ki Soch",
        "popularity": 70.938597,
        "poster_path": "\/qSJ0j8PQrhEzmd7jlwpxS4liQI7.jpg",
        "original_language": "hi",
        "original_title": "\u0906\u0917\u0947 \u0915\u0940 \u0938\u094b\u091a",
        "genre_ids": [
          35
        ],
        "backdrop_path": "\/rmQszCUBlCeqdtFWTWhGqGTlBW1.jpg",
        "adult": false,
        "overview": "Aage Ki Soch is 1988 Hindi language movie directed by Dada Kondke and starring Shakti Kapoor, Dada Kondke, Swapna, Raza Murad, and Satish Shah",
        "release_date": "1988-01-01"
      },
      {
        "vote_count": 9101,
        "id": 10195,
        "video": false,
        "vote_average": 6.6,
        "title": "Thor",
        "popularity": 69.189801,
        "poster_path": "\/bIuOWTtyFPjsFDevqvF3QrD1aun.jpg",
        "original_language": "en",
        "original_title": "Thor",
        "genre_ids": [
          12,
          14,
          28
        ],
        "backdrop_path": "\/LvmmDZxkTDqp0DX7mUo621ahdX.jpg",
        "adult": false,
        "overview": "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
        "release_date": "2011-04-21"
      }
    ]
  }

constructor(public activatedRoute: ActivatedRoute, public  filmService: FilmsService) {

  this.id = this.activatedRoute.snapshot.params.id;
  debugger
}

  ngOnInit() {
    debugger
    this.filmService.getFilmById(this.id).subscribe(res => {
      this.currentFilm = res;
    }, (erro => {
      for (var i = 0; i < this.static.results.length; i++) {
        if (this.static.results[i].id.toString() == this. id) {
          this.currentFilm = this.static.results[i];
        }
      }
    }) );
  }

}
