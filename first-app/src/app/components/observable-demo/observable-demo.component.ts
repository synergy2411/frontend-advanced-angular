import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  unSub: Subscription | undefined;

  obs$ = new Observable((observer) => {
    setTimeout(() => observer.next("First Package"), 1000);
    setTimeout(() => observer.next("Second Package"), 3000);
    setTimeout(() => observer.next("Third Package"), 5000);
    setTimeout(() => observer.next("Fourth Package"), 6000);
    setTimeout(() => observer.next("Fifth Package"), 8000);
    setTimeout(() => observer.complete(), 10000);
  })

  onSubscribe() {
    // this.obs$.subscribe({
    //   next: (data) => { console.log("DATA : ", data) },     // data handler
    //   error: (err) => { console.log("ERROR :", err); },     // error handler
    //   complete: () => console.log("COMPLETED")              // complete
    // })

    this.unSub = this.obs$.subscribe((data) => console.log(data))
  }

  onUnsubscribe() {
    this.unSub?.unsubscribe();
  }

}
