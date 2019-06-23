import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  submittable = false;

  note = {
    title: '',
    description: '',
    id: 0,
    dateCreated: ''
  };

  notes = [];

  constructor() {

  }

  readyToSubmit() {
    if (this.note.title && this.note.description) {
      return this.submittable = true;
    }
  }

  createNote(note) {
    return note = new Note(note.title, note.description, note.id, Date());
  }

  deleteNote(i) {
    return this.notes.splice(i, 1);
  }

  onSubmit() {
    this.notes.push(this.createNote(this.note));
  }

  ngOnInit() {

  }

}
