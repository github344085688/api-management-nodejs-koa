
import BaseService from "./_base-service";

class FacilityService extends BaseService {

    get(facilityId: string) {
        return this.resource$.get<any>(`/fd-app/facility/${facilityId}`);
    }
}

let facilityService = new FacilityService();
export default facilityService;

