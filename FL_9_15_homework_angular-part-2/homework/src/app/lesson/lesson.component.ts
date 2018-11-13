import { TemplateRef, ViewChild } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Lesson } from '../lesson.interface';
import { LocalStorageService } from '../local-storage.service';

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.css']
})
export class LessonComponent {

    @ViewChild('readOnlyTemplate') readOnlyTemplate: TemplateRef<any>;
    @ViewChild('editTemplate') editTemplate: TemplateRef<any>;

    public editedLesson: Lesson;
    @Input() list: Lesson;

    constructor(private _localStorageService: LocalStorageService) { }

    editLesson(lesson: Lesson): void {
        this.editedLesson = new Lesson(lesson.id, lesson.topic, lesson.date, lesson.lecturer);
    }

    loadTemplate(lesson: Lesson) {
        if (this.editedLesson && this.editedLesson.id === lesson.id) {
            return this.editTemplate;
        } else {
            return this.readOnlyTemplate;
        }
    }

    saveChanges(invalidData): void {
        if (invalidData) {
            return;
        } else {
            const listOfLessons = this._localStorageService.getListData();
            listOfLessons.splice(this.editedLesson.id - 1, 1, this.editedLesson);
            this.editedLesson = null;
        }
    }

    deleteLesson(e): void {
        const lessonIndex = e.target.parentElement.parentElement.children[0].textContent;
        this._localStorageService.deleteDataInList(lessonIndex - 1);
    }

}
