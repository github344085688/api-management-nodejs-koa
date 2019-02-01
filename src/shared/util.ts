import { Subject } from 'rxjs/Subject';
import Vue from 'vue';
import { Observable } from 'rxjs/Observable';


export default {

    isSubject: (subject: any) => {
        return subject && (
            typeof subject.next === 'function' ||
            typeof subject.onNext === 'function'
        );
    },

    eventToObservable: function (el: any , evtName: Array<any> | string) {
        const evtNames = Array.isArray(evtName) ? evtName : [evtName];
        const obs$ = Observable.create( (observer: any) => {
          const eventPairs = evtNames.map(name => {
            const callback = (msg: any) => observer.next({ name, msg });
            el.$on(name, callback);
            return { name, callback };
          });

          return () => {
            // Only remove the specific callback
            eventPairs.forEach(pair => el.$off(pair.name, pair.callback));
          };
        });
        return obs$;
    }
};