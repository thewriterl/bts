import { FilmModalComponent } from './../film-modal/film-modal.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalOptions, NgbModalRef, ModalDismissReasons, NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  closeResult: string;
  films = {
    'film': [
      {
        'id': '4',
        'title': 'Guerra Infinita',
        'description': 'Super Herói',
        'cast': 'Robert Downey Jr.',
        'highlight': false
      },
      {
        'id': '0',
        'title': 'O Poderoso Chefão',
        'description': 'Máfia',
        'cast': 'Al Pacino',
        'highlight': false
      }, {
        'id': '1',
        'title': 'Star Wars',
        'description': 'Sci-fi',
        'cast': 'Mark Hamill',
        'highlight': false
      }, {
        'id': '2',
        'title': 'Hello World',
        'description': 'desc',
        'cast': 'cast',  
        'highlight': true
      }, {
        'id': '3',
        'title': '---',
        'description': '=',
        'cast': '*',
        'highlight': false
      },
    ]
  };

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.films);
    
  }

  openModal(film) {
    console.log(film);
    const modalRef = this.modalService.open(FilmModalComponent, { centered: true });
    modalRef.componentInstance.film = film;
  }

}
