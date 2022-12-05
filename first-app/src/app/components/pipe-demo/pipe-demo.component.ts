import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent {

  promiseObj = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes")
    }, 2000)
  })

  contactNumber = 987654321;

  fruits = ["banana", "apple", "guava", "kiwi", "orange"]

  filteredFruits: string = '';

  sortOrder: string = 'asc'

}
