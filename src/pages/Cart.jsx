import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="flex justify-center relative">
  {
    cart.length > 0  ? 
    (<div className="flex w-9/12  ">


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-col justify-between h-[500px] mt-10 ">

        <div>
          <div className="font-semibold text-lg text-green-600 uppercase">Your Cart</div>
          <div className="font-bold text-4xl text-green-600 uppercase">Summary</div>
          <p className="font-semibold mt-4">
          Total Items:
            <span className="font-normal" > {cart.length}</span>
          </p>
        </div>

        <div className="flex flex-col gap-y-3">
          <p >Total Amount: 
            <span className="font-bold">
            ${totalAmount}
            </span> 
            </p>
          <button className="bg-green-600 py-[8px] rounded-md text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 

    (<div className="flex justify-center items-center flex-col gap-y-3 w-full h-[85vh]">
      <h1 className="font-bold text-3xl">Cart Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-600 py-[8px] px-[10px] rounded-md text-white">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
