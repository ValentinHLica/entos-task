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
  companies,
  shipment,
  areas,
}: {
  selectedCompanies: number[];
  selectedAreas: number[];
  shipment: Shipment[];
  companies: Company[];
  areas: Area[];
}): CalculatedShipment[] => {
  // Store Company IDs and Area IDs into Set's for fast check time
  const companiesIds = new Set(selectedCompanies);
  const areasIds = new Set(selectedAreas);

  // Filter Shipment that have the Selected Company ID and Selected Area ID
  const filteredShipment = shipment.filter(
    (item) =>
      // If Selected Area IDs is empty do not take this filter into account
      (selectedAreas.length > 0 ? areasIds.has(item.areaId) : true) &&
      // If Selected Companies IDs is empty do not take this filter into account
      (selectedCompanies.length > 0 ? companiesIds.has(item.companyId) : true)
  );

  // Store an object with keys of Company IDs and value of object with keys for Area IDs and value of the shipment count
  const data: {
    [companyId: number | string]: {
      [areaId: number | string]: number;
    };
  } = {};

  // Group Companies with their respective name
  const groupedCompanies: { [key: number | string]: string } = {};

  companies.forEach((company) => {
    if (!groupedCompanies[company.companyId])
      groupedCompanies[company.companyId] = company.name;
  });

  // Group Areas with their respective name
  const groupedAreas: { [key: number | string]: string } = {};

  areas.forEach((area) => {
    if (!groupedAreas[area.areaId]) groupedAreas[area.areaId] = area.state;
  });

  // Loop through filtered Shipment
  for (const item of filteredShipment) {
    // Check if Company with Area is in Stored Data Object
    if (data[item.companyId] && data[item.companyId][item.areaId]) {
      // Add to the shipment counter with +1
      data[item.companyId][item.areaId] = data[item.companyId][item.areaId] + 1;
    } else {
      // Add value to Stored Data variable
      data[item.companyId] = {
        ...data[item.companyId],
        [item.areaId]: 1,
      };
    }
  }

  const list: CalculatedShipment[] = [];

  // Loop through each Company ID key
  Object.keys(data).forEach((companyKey) => {
    // Loop through each Area ID key
    Object.keys(data[companyKey]).forEach((areaKey) => {
      // Add to the list formatted shipment data
      list.push({
        area: groupedAreas[areaKey],
        companyName: groupedCompanies[companyKey],
        shipmentCount: data[companyKey][areaKey],
      });
    });
  });

  // Sort Data By Shipment Count
  return list.sort(
    (firstItem, secondItem) =>
      secondItem.shipmentCount - firstItem.shipmentCount
  );
};
