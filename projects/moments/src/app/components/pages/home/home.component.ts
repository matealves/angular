import { Component } from '@angular/core';

import { MomentService } from '../../../services/moment.service';
import { Moment } from '../../../interfaces/Moment';

import { environment } from '../../../../environments/environment.development';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];

  baseApiUrl: string = environment.baseApiUrl;

  // todo search

  constructor(private momentService: MomentService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe(({ data }) => {
      this.allMoments = data;
      this.moments = data;
    });
  }
}
