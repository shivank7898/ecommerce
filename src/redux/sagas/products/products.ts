import axios, { AxiosResponse } from "axios";
import { call, put } from "redux-saga/effects";
import {
  setProductDetails,
  setProductDetailsErr,
  setProducts,
  setProductsErr,
  setProductStart,
} from "../../slices/productSlice";
import { Product } from "../../slices/cartSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const url = "https://fakestoreapi.com";

const productsApi = (): Promise<AxiosResponse<Product[]>> => {
  const response = axios.get(`${url}/products`);
  return response;
};

const productsDetailsApi = (id: number): Promise<AxiosResponse<Product>> => {
  const response = axios.get(`${url}/products/${id}`);
  return response;
};

export function* getProductsSaga() {
  yield put(setProductStart());
  try {
    const response: {data: Product[]} = yield call(productsApi);
    const { data } = response;
    yield put(setProducts(data));
  } catch (error) {
   if (axios.isAxiosError(error)) {
      yield put(setProductsErr(error.message));
    } else {
      yield put(setProductsErr("An unexpected error occurred"));
    }
  }
}

export function* getProductDetailsSaga(action : PayloadAction<{id: number}>) {
  const { payload } = action;
  try {
    const response :{data: Product} = yield call(productsDetailsApi, payload);
    yield put(setProductDetails(response.data));
  } catch (error) {
    if(axios.isAxiosError(error)){
      yield put(setProductDetailsErr(error.message))
    }else{
      yield put(setProductDetailsErr("An unexpected error occured"));
    }
  }
}
