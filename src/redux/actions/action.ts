import { createAction } from "@reduxjs/toolkit";

export const getProductsAction = createAction("GET_PRODUCTS")
export const getProductDetailsAction = createAction<string | undefined>("GET_PRODUCT_DETAILS")
export const getCategoryAction = createAction("GET_CATEGORY")
