import { Injectable , ViewChild} from '@angular/core';
import {ModalManager} from 'ngb-modal';

@Injectable({
  providedIn: 'root'
})
export class ModelServiceService {
public modalName :string;
public modalRef :any;
  constructor(private modalService: ModalManager) { }
}
