import { APIClient } from "./api";

import { Area } from "@interface/api/areas";

import { GET_AREAS } from "@constants/api";

// @desc       Get Areas
// @route      GET /api/areas.json
// @access     Public
export const getAreas = () => APIClient.get<Area[]>(GET_AREAS);
