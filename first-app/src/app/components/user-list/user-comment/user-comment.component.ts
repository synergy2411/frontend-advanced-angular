import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/model/comment.interface';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent {
  @Input("comments")
  comments: Array<IComment> | undefined;

  tab = 1;

  myStyle = {
    border: '2px grey dotted',
    'box-shadow': 'inset 0 0 25px 10px rgba(0,0,0,0.5)'
  }
}
