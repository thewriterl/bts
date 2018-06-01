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
  loading: boolean = false;

  constructor(public activeModal: NgbActiveModal, public router: Router) { }

  goTo(id) {
    console.log(id);
    this.loading = true;
    this.router.navigateByUrl('/film/' + id);
    this.activeModal.close();
  }

}
