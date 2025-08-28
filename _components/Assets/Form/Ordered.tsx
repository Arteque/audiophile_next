"use client";
import Image from "next/image";
import { useCartStore } from "@/store/CartStore";
import { useEffect } from "react";
import Currency from "@/Tools/Currency";
import Button from "../Button";
const Ordered = ({state = false}:{state:boolean}) => {
  const cart = useCartStore((state) => state.items);
  const resetCart = useCartStore((state) => state.clearCart);

  const goHomeHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // Clear the cart and navigate to the homepage
    resetCart();
    state = false;
    window.location.href = "/";
  };

  useEffect(()=>{
    document.body.dataset.ordercard = state ? "open" : "closed";
  },[state])

  return (
    <div className="p-[32px] fixed left-[10%] right-[10%] max-w-[540px] top-[50dvh] translate-y-[-50%] mx-auto z-[99999]  bg-light-200  rounded-[8px]">
        <Image
        aria-hidden="true"
        src="/checkout/icon-order-confirmation.svg"
        alt="Order Confirmed check"
        width={64}
        height={64}
        className="mb-[2rem]"
      />
      <h2 className="text-dark-100 max-w-[250px] uppercase font-bold text-[24px] leading-[28px] tracking-[0.86px]">Thank you <br />for your order!</h2>
      <p className="text-center text-dark-100/50 my-[1rem]">
        You will receive an email confirmation shortly.
      </p>
      <div className="rounded-3xl overflow-hidden">
       <div className="bg-light-100 rounded-t-[8px] px-[24px] pt-[24px]">
         {cart.map(
          (item, index) =>
            index < 1 && (
              <div key={item.id} className=" text-dark-100 flex justify-between gap-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-[50px] h-[50px]"
                />
                <span className="mr-auto font-bold">
                  <b className="text-dark-100">{item.name.split(" ").shift()}</b> <br />
                  <b className="text-dark-100/50">{Currency(item.price * item.quantity, "USD")}</b>
                </span>
                <span className="relative top-[2ch]">
                  x{item.quantity}
                </span>
              </div>
            )
        )}
        {cart.length > 1 && (
          <p className="text-dark-100/50 text-center px-[25px] py-[15px_25px] border-t-1 border-dark-100/20 mt-5 font-bold">
            and {cart.length - 1} other item{cart.length - 1 > 1 ? "s" : ""}
          </p>
        )}
       </div>
        <div className="bg-dark-100 px-[24px] py-[15px]">
          <span className="text-light-200/50 uppercase block w-full mn-[8px] font-medium">Grand Total</span>
          <span className="text-light-100 text-[18px] mt-[8px] font-bold block mb-[19px]">
            {Currency(cart.reduce((acc, item) => acc + item.price, 0), "USD")}
          </span>
        </div>
      </div>
        <Button variant="call" href="/" text="Go to Homepage" className="mx-auto w-full mt-5 block text-center" onClick={goHomeHandler}/>
    </div>
  );
};

export default Ordered;
