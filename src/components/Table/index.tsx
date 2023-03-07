import React from "react";

// import { useAppSelector } from "@store/hooks";

import styles from "@styles/components/table.module.scss";

type Props = {};

const Table = (props: Props) => {
  // const { selectedAreas, selectedCompanies } = useAppSelector(
  //   (state) => state.home
  // );

  return (
    <table className={styles.table} cellSpacing="0" cellPadding="0">
      <thead>
        <tr>
          <th>Company</th>
          <th>Shipment Count</th>
          <th>Areas</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Test</td>
          <td>0</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
