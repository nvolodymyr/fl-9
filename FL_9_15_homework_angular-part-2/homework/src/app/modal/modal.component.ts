import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Lesson } from '../lesson.interface';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent {

    private lesson: Lesson = {
        id: null,
        topic: '',
        date: '',
        lecturer: ''
    };

    @Input() opened;
    @Output() closeModal = new EventEmitter();
    @Output() addnewLesson = new EventEmitter();

     onCloseModal(): void {
         this.opened = false;
         this.closeModal.emit(this.opened);
    }

    addToTheList(invalidData) {
        if (invalidData) {
            return;

        } else {
            this.addnewLesson.emit(this.lesson);
            this.onCloseModal();
        }
    }

}
