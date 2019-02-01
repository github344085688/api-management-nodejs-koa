import {Component, Emit, Inject, Model, Prop, Provide, Vue, Watch} from 'vue-property-decorator';
import WiseVue from "../../shared/wise-vue";
import tlp from "./api-management.vue";
import { Loading } from "element-ui";
import { Subscription } from 'rxjs/Subscription';
import errorHandler from "../../shared/error-handler";
import Pager from "../../components/pager/pager";
import ScrollPager from "../../components/scroll-pager/scroll-pager";
import ReceiptService from "../../services/receipt-service";
import ElementSelect from "../../components/element-select/element-select";

WiseVue.use(Loading);

@Component({
    mixins: [tlp],
    components: {
        Pager,
        ScrollPager,
        ElementSelect
    }
})
export default class ApiManagement extends WiseVue {
    receiptSpec: any = {};
    loading = false;
    companies: Array<any> = ["Bevmo", "VIZIO", "KEEN", "Sun Power"];
    sequences: Array<any> = [0, 1, 2, 3, 4, 5, 6];
    systems: Array<any> = ["Client Portal"];
    pages: Array<any> = ["Receipt", "Order", "Inventory", "Item Spec"];
    searchInfo: any = {company: "VIZIO", system: "Client Portal", page: "Receipt"};
    lodingModule:any={
      selectValue:'en'
    };
    get receiptFields() {
        return this.receiptSpec.definitions ? this.receiptSpec.definitions.ReceiptCreate.properties : {};
    }

  @Watch('searchInfo.company')
  valueChanged(val:string, oldVal:string) {
      // alert(val);
      // alert(oldVal);
    //this.$i18n.locale=val;
  }



  mounted() {
        this.getReceiptSpect();
    }
  onselectChange(val:any){
    this.searchInfo.company=val;
  }
    getReceiptSpect() {
        this.loading = true;
        ReceiptService.getApiSpec().subscribe(
            spec => {
                this.receiptSpec = spec;
                this.loading = false;
            },
            err => {
                this.loading = false;
                return errorHandler.handle(err);
            }
        );
    }

}
