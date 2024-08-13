import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWish, removeWish } from "../redux/slices/wishSlice";
// import { addToCart as addToCartAction } from "../redux/cartSlice";
// import { addToCart } from "../redux/slices/cartSlice";

const useAddToCartAndWish = () => {
  const dispatch = useDispatch();

  const handleAddToCart = ({ product, quantity }) => {
    dispatch(addToCart({ product, quantity }));
    // console.log(product,"handle")
  };

  const handleAddToWishlist = ({ product }) => {
    dispatch(addToWish({ product }));
  };

  const handleRemoveWishlist = ({id}) => {
    console.log(id, "wish")
    dispatch(dispatch(removeWish({id})));
  };

  return { handleAddToCart, handleAddToWishlist, handleRemoveWishlist };
};

export default useAddToCartAndWish;
