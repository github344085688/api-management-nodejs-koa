import session from './session';
import errorHanlder from './error-handler';

import companyService from  "../services/company-service";
import facilityService from  "../services/facility-service";
import userService from  "../services/user-service";


export class Auth {

    isSignIn() {
        return session.getUserId();
    }



    async initialRequiredUserInfo() {
        await this.fetchCurrentCompanyFacility();
        await this.setUserRelatedCustomerId();
    }

    private async fetchCurrentCompanyFacility() {
        if (session.getCurrentCompanyFacility()) {
            return session.getCurrentCompanyFacility();
        } else {
            let userInfo = await session.fetchUserInfo();
            let [currentCompany, currentFacility] = await Promise.all([
                companyService.get(userInfo.defaultCompanyFacility.companyId).toPromise(),
                facilityService.get(userInfo.defaultCompanyFacility.facilityId).toPromise()]);
                session.setCurrentCompanyFacility({company: currentCompany, facility: currentFacility});
            return session.getCurrentCompanyFacility();
        }
     }

     async setUserRelatedCustomerId() {
        if (!session.getUserRelatedCustomerId()) {
            let userInfo = await session.fetchUserInfo();
            session.setUserRelatedCustomerId(userInfo.relatedCustomerId);
            return session.getUserRelatedCustomerId();
        }
     }


}

export default new Auth();