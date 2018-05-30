import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-film-modal',
  templateUrl: './film-modal.component.html',
  styleUrls: ['./film-modal.component.css']
})
export class FilmModalComponent {

  @Input() film;
  @Input() description;

  constructor(public activeModal: NgbActiveModal, public router: Router) { }

  goTo(id) {
    this.router.navigateByUrl('/film');
  }

}
