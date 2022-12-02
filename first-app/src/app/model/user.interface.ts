import { IComment } from "./comment.interface";

export interface IUser {
  firstName: string;
  lastName: string;
  dob: Date;
  company: string;
  income: number;
  image: string;
  votes: number;
  comments: Array<IComment>
}
