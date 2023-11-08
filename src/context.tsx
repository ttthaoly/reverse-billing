import React from "react";

export const variables = React.createContext<{
  pageSize: number;
  // pageIndex: any[]
  totalPageNumber: number;
  currentPage: number;
  first: number;
  last: number;
  items: number;
  index: number;

  //---------------
  onClickItem: any;
}>({
  pageSize: 5,
  // pageIndex: [],
  totalPageNumber: 1,
  currentPage: 1,
  first: 1,
  last: 5,
  items: 0,
  index: 0,

  //------------------
  onClickItem: () => {},
});
