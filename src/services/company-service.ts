import BaseService from "./_base-service";


class CompanyService extends BaseService {


    get(companyId: string) {
        return this.resource$.get<any>(`/fd-app/company/${companyId}`);
    }
}

export default new CompanyService();