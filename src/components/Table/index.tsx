import React, { useMemo } from "react";

import { useAppSelector } from "@store/hooks";

import { calculateShipment } from "@utils/helper";

import styles from "@styles/components/table.module.scss";

type Props = {};

const Table = (props: Props) => {
  const { selectedAreas, selectedCompanies, shipment, companies, areas } =
    useAppSelector((state) => state.home);

  const filteredData = useMemo(
    () =>
      calculateShipment({
        selectedAreas,
        selectedCompanies,
        shipment,
        companies,
        areas,
      }),
    [selectedAreas, selectedCompanies, shipment, companies, areas]
  );

  return (
    <table className={styles.table} cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th>Company</th>
          <th>Area</th>
          <th>Shipment Count</th>
        </tr>
      </thead>

      <tbody>
        {filteredData.length > 0 &&
          filteredData.map(({ companyName, area, shipmentCount }, index) => (
            <tr key={index}>
              <td>{companyName}</td>
              <td>{area}</td>
              <td>{shipmentCount}</td>
            </tr>
          ))}

        {filteredData.length === 0 && (
          <tr>
            <td colSpan={3}>
              <h3 className={styles.table__empty}>No Data</h3>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;
