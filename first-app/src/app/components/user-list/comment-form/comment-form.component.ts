import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IComment } from 'src/app/model/comment.interface';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent {

  @Output() childEvent = new EventEmitter<IComment>()

  onFormSubmit(form: NgForm) {
    const { stars, body, author } = form.value;
    let newComment: IComment = {
      author, body, stars
    }
    this.childEvent.emit(newComment);
  }
}
