import axios from "axios";
import { call, put } from "redux-saga/effects";
import {
  setCategory,
  setCategoryErr,
  setCategoryStart,
} from "../../slices/categorieSlice";

const url = "https://fakestoreapi.com";

const categoryApi = () => {
  const response = axios.get(`${url}/products/categories`);
  return response;
};

export function* categorySaga() {
  yield put(setCategoryStart());
  try {
    const response = yield call(categoryApi);
    yield put(setCategory(response.data));
  } catch (error) {
    yield put(setCategoryErr(err));
  }
}
