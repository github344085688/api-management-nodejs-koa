import WiseVue from "../../shared/wise-vue";
import { Component, Prop, Provide, Watch } from "vue-property-decorator";
import template from "./default-main-layout.vue";
import AppHeader from './app-header';
import auth from "../../shared/auth";




@Component({
    mixins: [template],
    components: {
        AppHeader
    }
})
export default class DefaultMainLayout extends WiseVue {


}