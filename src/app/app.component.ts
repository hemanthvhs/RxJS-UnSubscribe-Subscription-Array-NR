import { Component } from '@angular/core';
import { OnInit,OnDestroy } from '@angular/core';
import { of , from,Subscription} from 'rxjs'; 
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit,OnDestroy {

private subscriptions = new Subscription() // Create one subscription object

/* 
  NOTE : NEVER CREATE A SUBSCRIPTION ARRAY & PUSH ALL THE SUBSCRIPTIONS
         NOT RECOMMENDED METHOD
*/

source$ = of(1,2,3) 
source1$ = from([1,2,3])

ngOnInit() {

// Push all the subscriptions into the declared private subscriptions variable
this.subscriptions.add( this.source$.pipe(
                           map(res => res*2)).subscribe( val => console.log(val)))

this.subscriptions.add( this.source1$.pipe(
                            map(num => num*2)).subscribe ( val => console.log(val)))


}

ngOnDestroy() {
 this.subscriptions.unsubscribe()  // Unsubscribe to all the subscriptions
}

}







              
                          

            