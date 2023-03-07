import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CompanyArea } from "@interface/api/company-area";
import { InitialHomeState } from "@interface/store/home";
import { Company } from "@interface/api/companies";
import { Shipment } from "@interface/api/shipment";
import { Area } from "@interface/api/areas";

const initialState: InitialHomeState = {
  companyArea: [],
  companies: [],
  shipment: [],
  areas: [],

  selectedCompanies: [],
  selectedAreas: [],
};

export const auth = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setCompanyArea: (state, action: PayloadAction<CompanyArea[]>) => {
      state.companyArea = action.payload;
    },
    setCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies = action.payload;
    },
    setShipment: (state, action: PayloadAction<Shipment[]>) => {
      state.shipment = action.payload;
    },
    setAreas: (state, action: PayloadAction<Area[]>) => {
      state.areas = action.payload;
    },
    setSelectedCompanies: (state, action: PayloadAction<number[]>) => {
      state.selectedCompanies = action.payload;
    },
    setSelectedAreas: (state, action: PayloadAction<number[]>) => {
      state.selectedAreas = action.payload;
    },
  },
});

export const {
  setSelectedCompanies,
  setSelectedAreas,
  setCompanyArea,
  setCompanies,
  setShipment,
  setAreas,
} = auth.actions;

export default auth.reducer;
