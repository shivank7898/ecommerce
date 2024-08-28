import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  setProductDetails,
  setProductDetailsErr,
  setProducts,
  setProductsErr,
  setProductStart,
} from "../../slices/productSlice";

const url = "https://fakestoreapi.com";

const productsApi = () => {
  const response = axios.get(`${url}/products`);
  return response;
};

const productsDetailsApi = (id) => {
  const response = axios.get(`${url}/products/${id}`);
  return response;
};

export function* getProductsSaga() {
  yield put(setProductStart());
  try {
    const response = yield call(productsApi);
    const { data } = response;
    yield put(setProducts(data));
  } catch (error) {
    yield put(setProductsErr(error));
  }
}

export function* getProductDetailsSaga(action) {
  const { payload } = action;
  try {
    const response = yield call(productsDetailsApi, payload);
    yield put(setProductDetails(response.data));
  } catch (error) {
    yield put(setProductDetailsErr(error));
  }
}
