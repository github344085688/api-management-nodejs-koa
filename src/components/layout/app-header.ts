import WiseVue from "../../shared/wise-vue";
import { Component, Prop, Provide, Watch } from "vue-property-decorator";
import template from "./app-header.vue";
import session from '../../shared/session';
import userService from '../../services/user-service';
import errorHanlder from '../../shared/error-handler';


@Component({
    mixins: [template],
    name: 'app-header'
})
export default class WiseHeader extends WiseVue {


    userInfo: any = {};

    isShowUserDropdownList: boolean = false;

    isShowNavWms: boolean = false;



    get currentRouteCategory() {
        return this.$route.meta.category;
    }

    isRouteLinkMatchCurrentRoute(routeName: string) {
        return this.$route.name == routeName;
    }

    showUserDropdownList () {
        this.isShowUserDropdownList = true;
        (<Element>this.$refs.box).classList.add("right-header");
    }

    hideUserDropdownList() {
        this.isShowUserDropdownList = false;
        (<Element>this.$refs.box).classList.remove("right-header");
    }


    signOut() {
        userService.logout(session.getUserToken()).subscribe(
            res => {
                session.clean();
                this.$router.replace({name: 'Login'});
            },
            err => {
                session.clean();
                this.$router.replace({name: 'Login'});
                errorHanlder.handle(err);
            }
        );
    }

    async mounted() {
        this.userInfo = await session.fetchUserInfo();

    }


}