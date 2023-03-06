import { CompanyArea } from "@interface/api/company-area";
import { Company } from "@interface/api/companies";
import { Shipment } from "@interface/api/shipment";
import { Area } from "@interface/api/areas";

export interface InitialHomeState {
  companyArea: CompanyArea[];
  companies: Company[];
  shipment: Shipment[];
  areas: Area[];
}
