import { APIClient } from "./api";

import { CompanyArea } from "@interface/api/company-area";

import { GET_COMPANY_AREA } from "@constants/api";

// @desc       Get Company Areas
// @route      GET /api/company-area.json
// @access     Public
export const getCompanyAreas = () =>
  APIClient.get<CompanyArea[]>(GET_COMPANY_AREA);
