export default interface ReversebillingType {
  id: idType;
  details: detailsType;
  pickUp_dropOff: pickUpdropOffType;
  vendor: vendorType;
  cost: costType;
  lastUpdate: lastUpdateType;
  status: statusType;
}
export type detailsType = {
  transport: string;
  qty: number;
  booked: string;
  utc: string;
};
export type idType = {
  a: string;
  order: string;
};
export type pickUpdropOffType = {
  a: string;
  b: string;
};
export type vendorType = {
  nameVendor: string;
  codeVendor: string;
};
export type costType = {
  price: number;
  usd: string;
};
export type lastUpdateType = {
  date: string;
  by: string;
};
export type statusType = {
  status: string;
};

