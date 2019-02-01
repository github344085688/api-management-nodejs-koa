import Vue from "vue";
import { Component, Prop, Provide, Watch } from "vue-property-decorator";
import template from "./element-select.vue";
import { Select, Option } from "element-ui";
import { mixins } from "vue-class-component";
Vue.use(Select);
Vue.use(Option);

@Component({
    mixins: [template],
    name: 'element-select'
})

export default class ElementSelect extends Vue {

    @Prop({
        default: false
    })
    filterable!: boolean;

    @Prop({
        default: false
    })
    clearable!: boolean;

    @Prop()
    value!: string;

    @Prop({
        default: function () {
            return [];
        }
    })
    options!: Array<any>;


    selectValue: any = "";

    @Prop()
    remoteSearchMethod!: Function;


    mounted() {
        this.selectValue = this.value;
    }


    @Watch("value")
    valueChanged() {
        this.selectValue = this.value;
    }

    selectChange() {
        this.$emit("selectChange", this.selectValue);
    }

}
