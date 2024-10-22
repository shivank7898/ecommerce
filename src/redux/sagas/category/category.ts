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
    const response:{ data: string[]} = yield call(categoryApi);
    yield put(setCategory(response.data));
  } catch (error: unknown) {
   let errorMessage = "An unexpected error occurred";      
    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message; 
    } else if (error instanceof Error) {
      errorMessage = error.message;  
    } else if (typeof error === "string") {
      errorMessage = error;  
    }
    yield put(setCategoryErr(errorMessage));
  }
}
