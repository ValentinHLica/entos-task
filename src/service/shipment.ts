import { APIClient } from "./api";

import { Shipment } from "@interface/api/shipment";

import { GET_SHIPMENT } from "@constants/api";

// @desc       Get Shipments
// @route      GET /api/shipment.json
// @access     Public
export const getShipment = () => APIClient.get<Shipment[]>(GET_SHIPMENT);
