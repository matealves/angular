import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Moment } from '../../../interfaces/Moment';
import { MomentService } from '../../../services/moment.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrl: './edit-moment.component.css',
})
export class EditMomentComponent {
  constructor(
    private momentService: MomentService,
    private route: ActivatedRoute
  ) {}

  moment!: Moment;
  btnText: string = 'Editar';

  editHandler(e: Event): void {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.momentService
      .getMoment(id)
      .subscribe(({ data }) => (this.moment = data));
  }
}
