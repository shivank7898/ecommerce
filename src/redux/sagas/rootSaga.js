import { takeLatest } from "redux-saga/effects";
import { getCategoryAction, getProductDetailsAction, getProductsAction } from "../actions/action";
import { getProductDetailsSaga, getProductsSaga, } from "./products/products";
import { categorySaga } from "./category/category";

export function* watchSaga() {
  yield takeLatest(getProductsAction.type, getProductsSaga);
  yield takeLatest(getProductDetailsAction.type, getProductDetailsSaga);
  yield takeLatest(getCategoryAction.type, categorySaga)
}
