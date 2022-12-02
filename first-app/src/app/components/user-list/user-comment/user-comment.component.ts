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
}
