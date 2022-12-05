import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  onFormSubmit(form: NgForm) {
    const { stars, body, author } = form.value;
    console.log(stars, body, author);
  }
}
