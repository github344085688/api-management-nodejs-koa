import BaseService from "./_base-service";
import { Observable } from 'rxjs/Observable';


class UserService extends BaseService {

   getApiSpec() {
       return this.resource$.get<any>("/viabaron/wms-app/swagger/api/receipt/spec");
   }


}

let userService =  new UserService();
export default userService;