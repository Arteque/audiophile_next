"use client";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/CartStore";

import Label from "./Label";
import Legend from "./Legend";
import { motion } from "motion/react";
import ItemInTheCart from "@/_components/Assets/Cart/ItemInTheCart";

import Currency from "@/Tools/Currency";
import Ordered from "./Ordered";

const Form = () => {
  const cart = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const shippingCost = useCartStore((state) => state.shippingCosts);
  const vat = useCartStore((state) => state.vat);


  const [emoney, setEmoney] = useState<boolean>(false);

  const PaymentChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value === "e-money" ? setEmoney(true) : setEmoney(false);
  };


  const [orderState, setOrderState] = useState<boolean>(false);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOrderState(true);
  }

  return (
    <form className="mt-[1rem] w-full md:flex md:gap-[2rem]" onSubmit={formSubmitHandler}>
      <div className="col-1 bg-light-200 p-[23px] md:p-[3rem] rounded-2xl mb-[1rem]">
        <fieldset>
          <Legend>Billing Details</Legend>
          <div className="flex flex-col gap-[1rem] md:flex-row">
            <div className="name w-full">
              <Label htmlFor="name">Name*:</Label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Alexei Ward"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
            <div className="mail w-full">
              <Label htmlFor="email">Email Address*:</Label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="alexei@mail.com"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
          </div>
          <div className="phone mt-[24px]">
            <Label htmlFor="phone">Phone Number*:</Label>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="+1 202-555-0136"
              className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
            />
          </div>
        </fieldset>

        <fieldset>
          <Legend>Shipping Info</Legend>
          <div className="address w-full">
            <Label htmlFor="address">Address*:</Label>
            <input
              type="text"
              name="address"
              id="address"
              required
              placeholder="123 Main St"
              className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
            />
          </div>
          <div className="flex flex-wrap flex-col gap-[1rem] md:flex-row md:justify-between mt-[24px]">
            <div className="zip w-full md:w-[47%]">
              <Label htmlFor="zipcode">Zip Code*:</Label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                required
                placeholder="12345"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
            <div className="city w-full md:w-[47%]">
              <Label htmlFor="city">City*:</Label>
              <input
                type="text"
                name="city"
                id="city"
                required
                placeholder="Los Angeles"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
            <div className="country">
              <Label htmlFor="country">Country*:</Label>
              <input
                type="text"
                name="country"
                id="country"
                required
                placeholder="United States"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <Legend>Payment Details</Legend>

          <div className="payment md:flex md:justify-between">
            <Label htmlFor="payment-method">Payment Method *:</Label>
            <div className="payments-items w-full md:w-[50%] max-w-[689px]">
              <div className="radio-item flex items-center gap-[1rem] p-[1rem] border-2 border-[#cfcfcf] rounded-[8px] mb-[1rem]">
                <input
                  type="radio"
                  name="payment-method"
                  id="e-money"
                  value="e-money"
                  className="w-[20px] h-[20px]"
                  required
                  onChange={PaymentChecked}
                />
                <Label htmlFor="e-money">e-Money</Label>
              </div>
              <div className="radio-item flex items-center gap-[1rem] p-[1rem] border-2 border-[#cfcfcf] rounded-[8px]">
                <input
                  type="radio"
                  name="payment-method"
                  id="cash-on-delivery"
                  value="cash-on-delivery"
                  className="w-[20px] h-[20px]"
                  required
                  onChange={PaymentChecked}
                />
                <Label htmlFor="cash-on-delivery">Cash on Delivery</Label>
              </div>
            </div>
          </div>
          <motion.div
            initial={{ height:0, opacity: 0, y: 20 }}
            animate={{ height:emoney ? 100 : 0, opacity: emoney ? 1 : 0, y: emoney ? 0 : 20 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-[1rem] md:flex-row md:justify-between mt-[24px]"
          >
            <div className="e-money-number w-full md:w-[49%]">
              <Label htmlFor="e-money-number">e-Money Number*:</Label>
              <input
                type="text"
                name="e-money-number"
                id="e-money-number"
                required ={emoney}
                placeholder="238521993"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
            <div className="e-money-pin w-full md:w-[49%]">
              <Label htmlFor="e-money-pin">e-Money PIN*:</Label>
              <input
                type="text"
                name="e-money-pin"
                id="e-money-pin"
                required = {emoney}
                placeholder="6891"
                className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"
              />
            </div>
          </motion.div>
        </fieldset>
      </div>
      <div className="col-2 rounded-2xl bg-light-200 p-[1.5rem] md:p-[48px] h-fit md:min-w-[40%] md:sticky md:top-30">
        <h4 className="text-[1.125rem] font-bold uppercase text-black mb-[1.5rem] mt-[2rem] md:mt-0">
          Summary
        </h4>
        <div className="items">
          <ItemInTheCart checkout />
        </div>

        <div className="totals">
          <div className="total-item flex justify-between">
            <span className="text-dark-100/50 font-medium text-[15px] leading-[25px] uppercase">
              Total
            </span>
            <span className="text-dark-100 font-bold">
              {Currency(
                cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
                "USD"
              )}
            </span>
          </div>
          <div className="shipping flex justify-between mt-[8px]">
            <span className="text-dark-100/50 font-medium text-[15px] leading-[25px] uppercase">
              Shipping
            </span>
            <span className="text-dark-100 font-bold">
              {Currency(shippingCost, "USD")}
            </span>
          </div>
          <div className="vat flex justify-between mt-[8px]">
            <span className="text-dark-100/50 font-medium text-[15px] leading-[25px] uppercase">
              VAT (Included)
            </span>
            <span className="text-dark-100 font-bold">
              {Currency(vat, "USD")}
            </span>
          </div>
          <div className="grandtotal mt-5 flex justify-between">
            <span className="text-dark-100/50 font-medium text-[15px] leading-[25px] uppercase">
              Grand Total
            </span>
            <span className="text-prime-100 font-bold">
              {Currency(
                cart.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                ) +
                  shippingCost +
                  vat,
                "USD"
              )}
            </span>
          </div>
        </div>
        <button className="w-full mt-5 uppercase text-[13px] font-bold px-[2rem] py-[1rem] bg-prime-100 text-light-100 hover:bg-prime-200">
          Continue and Pay
        </button>
      </div>
      {orderState && <Ordered state={orderState} aria-hidden={!orderState} className={orderState ? "block" : "hidden"} />}

    </form>
  );
};

export default Form;
