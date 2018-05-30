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
        'id': 1,
        'title': 'O Poderoso Chefão',
        'description': 'Máfia',
        'cast': 'Al Pacino'
      }, {
        'id': 2,
        'title': 'Star Wars',
        'description': 'Sci-fi',
        'cast': 'Mark Hamill'
      }, {
        'id': 3,
        'title': 'Hello World',
        'description': 'desc',
        'cast': 'cast'
      }, {
        'id': 4,
        'title': '---',
        'description': '=',
        'cast': '*'
      },
    ]
  };


  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openModal(film) {
    console.log(film);
    const modalRef = this.modalService.open(FilmModalComponent, { centered: true });
    modalRef.componentInstance.film = film;
    modalRef.componentInstance.description = "This is the description"
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
