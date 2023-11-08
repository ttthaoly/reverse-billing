export default interface ReversebillingDescriptionType {
  itemTable: itemTableType;
  description: descriptionType;
  price: priceType;
}
export type itemTableType = {
  itemTable: string;
};
export type descriptionType = {
  description: string;
};
export type priceType = {
  price: number;
};
