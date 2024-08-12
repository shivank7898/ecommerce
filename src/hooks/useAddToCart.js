import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
// import { addToCart as addToCartAction } from "../redux/cartSlice";
// import { addToCart } from "../redux/slices/cartSlice";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const handleAddToCart = ({product,quantity}) => {
    dispatch(addToCart({ product, quantity }));
    // console.log(product,"handle")
  };

  return { handleAddToCart };
};

export default useAddToCart;
