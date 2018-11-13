import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public lessonsData;

  private open = false;

  constructor(private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.lessonsData = this._localStorageService.getListData();
  }

  openModal(): void {
    this.open = true;
  }

  closeModal(close): void {
    this.open = close;
  }

  addLessonToList(lesson) {
    lesson.id = this.lessonsData.length + 1;
    this.lessonsData.push(lesson);
  }

}
