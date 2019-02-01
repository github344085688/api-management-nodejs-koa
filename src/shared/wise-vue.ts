import { Vue } from "vue-property-decorator";
import { Subscription } from "rxjs/Subscription";
import session from './session';

export default class WiseVue extends Vue {

    unsubcribers: Subscription[] = [];

    beforeDestroy() {
        this.unsubcribers.forEach( sb => sb.unsubscribe());
    }


    addUserCustomerIdToObject(object: any) {
        if (!object) {
            object = {};
        }
        object.customerId = session.getUserRelatedCustomerId();
        return object;
    }
}