import {Component, OnInit} from '@angular/core';
import {ReplaySubject, Subject, Subscription, takeWhile, timer} from 'rxjs';

@Component ({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  subject: ReplaySubject<number> = new ReplaySubject (5);
  subscription!: Subscription;
  currentValue: any;

  autoPlay = false;
  timer$: Subject<any> = new Subject<number> ();
  stop$: Subject<any> = new Subject ();

  ngOnInit (): void {
    this.timer$.subscribe (() => {
      this.setTimer ();
    });

    this.stop$.subscribe (() => {
      this.subscription.unsubscribe ();
      this.currentValue = 'READY!';
    });
  }

  start (): void {
    this.timer$.next (null);
  }

  stop (): void {
    this.stop$.next (null);
  }

  private setTimer () {
    let number = 10;
    this.subscription = timer (0, 500)
      .pipe (takeWhile (value => 11 !== value))
      .subscribe (() => {
        if (0 === number) {
          this.currentValue = 'READY!';
          this.autoPlay = !this.autoPlay;
        } else {
          this.currentValue = number;
          number--;
        }
        console.log (this.currentValue);
      });
  }
}
