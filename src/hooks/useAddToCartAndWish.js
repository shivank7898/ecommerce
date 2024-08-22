import { useDispatch } from "react-redux";
import { addToCart, removeCart } from "../redux/slices/cartSlice";
import { addToWish, removeWish } from "../redux/slices/wishSlice";

const useAddToCartAndWish = () => {
  const dispatch = useDispatch();

  const handleAddToCart = ({ product, quantity }) => {
    product || quantity
      ? dispatch(addToCart({ product, quantity }))
      : alert("Sorry something Went Wrong Plese refresh and try again ");
  };

  const handleRemoveFromCart = ({ id }) => {
    id ? dispatch(removeCart({ id })) : alert("please try again");
  };

  const handleAddToWishlist = ({ product }) => {
    product
      ? dispatch(addToWish({ product }))
      : alert("Please try again after Refresh");
  };

  const handleRemoveWishlist = ({ id }) => {
    id ? dispatch(removeWish({ id })) : alert("please try again");
  };

  return {
    handleAddToCart,
    handleAddToWishlist,
    handleRemoveWishlist,
    handleRemoveFromCart,
  };
};

export default useAddToCartAndWish;
