import { APIClient } from "./api";

import { Company } from "@interface/api/companies";

import { GET_COMPANIES } from "@constants/api";

// @desc       Get Companies
// @route      GET /api/companies.json
// @access     Public
export const getCompanies = () => APIClient.get<Company[]>(GET_COMPANIES);
