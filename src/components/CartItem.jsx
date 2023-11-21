import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    // <div>
      <div className="flex w-[70%] gap-x-20 mt-10">
        <div className="h-[180px] w-[250px]">
          <img src={item.image} className="h-full w-full" />
        </div>
        <div className="flex w-full flex-col gap-y-4">
          <h1 className="font-bold text-m">{item.title}</h1>
          <h1 className="text-sm">{item.description}</h1>
          <div className="flex justify-between">
            <p className="font-bold text-green-500">{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase />
            </div>
          </div>
        </div>
      </div>


    // </div>
  );
};

export default CartItem;
