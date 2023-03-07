import { Area } from "@interface/api/areas";
import { Company } from "@interface/api/companies";
import { Shipment } from "@interface/api/shipment";

export interface CalculatedShipment {
  companyName: string;
  area: string;
  shipmentCount: number;
}

export const calculateShipment = ({
  selectedCompanies,
  selectedAreas,

  shipment,
  areas,
  companies,
}: {
  selectedCompanies: number[];
  selectedAreas: number[];

  shipment: Shipment[];
  companies: Company[];
  areas: Area[];
}): CalculatedShipment[] => {
  const companiesIds = new Set(selectedCompanies);
  const areasIds = new Set(selectedAreas);

  const filteredShipment = shipment.filter(
    (item) =>
      (selectedAreas.length > 0 ? areasIds.has(item.areaId) : true) &&
      (selectedCompanies.length > 0 ? companiesIds.has(item.companyId) : true)
  );

  const data: {
    [companyId: number | string]: {
      [areaId: number | string]: number;
    };
  } = {};

  const groupedCompanies = companies.reduce((result, current) => {
    result[current.companyId] = current.name;
    return result;
  }, {} as { [key: number | string]: string });

  const groupedAreas = areas.reduce((result, current) => {
    result[current.areaId] = current.state;
    return result;
  }, {} as { [key: number | string]: string });

  for (const item of filteredShipment) {
    if (data[item.companyId] && data[item.companyId][item.areaId]) {
      data[item.companyId][item.areaId] = data[item.companyId][item.areaId] + 1;
    } else {
      data[item.companyId] = {
        ...data[item.companyId],
        [item.areaId]: 1,
      };
    }
  }

  const list: CalculatedShipment[] = [];

  Object.keys(data).forEach((companyKey) => {
    Object.keys(data[companyKey]).forEach((areaKey) => {
      list.push({
        area: groupedAreas[areaKey],
        companyName: groupedCompanies[companyKey],
        shipmentCount: data[companyKey][areaKey],
      });
    });
  });

  return list.sort(
    (firstItem, secondItem) =>
      secondItem.shipmentCount - firstItem.shipmentCount
  );
};
