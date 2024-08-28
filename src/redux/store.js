import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import { categoryReducer } from "./slices/categorieSlice";
import { cartReducer } from "./slices/cartSlice";
import { wishReducer } from "./slices/wishSlice";
import { userReducer } from "./slices/userSlice";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import createSagaMiddleware from "redux-saga";
import { thunk } from "redux-thunk";
import { watchSaga } from "./sagas/rootSaga";

const rootReducer = combineReducers({
  product: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  wish: wishReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["product"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [thunk, sagaMiddleware],
});

const persistor = persistStore(store);

sagaMiddleware.run(watchSaga);

export { store, persistor };
