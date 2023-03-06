import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { getCompanyAreas } from "@service/company-area";
import { getCompanies } from "@service/companies";
import { getShipment } from "@service/shipment";
import { getAreas } from "@service/area";

import {
  setCompanyArea,
  setCompanies,
  setShipment,
  setAreas,
} from "@store/home";

import Layout from "@components/Layout";

const HomePage = () => {
  const dispatch = useDispatch();

  const onLoad = async () => {
    try {
      const [companyArea, companies, shipment, areas] = await Promise.all([
        getCompanyAreas(),
        getCompanies(),
        getShipment(),
        getAreas(),
      ]);

      dispatch(setCompanyArea(companyArea.data));
      dispatch(setCompanies(companies.data));
      dispatch(setShipment(shipment.data));
      dispatch(setAreas(areas.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="container">
        <h1>HomePage</h1>
      </div>
    </Layout>
  );
};

export default HomePage;
