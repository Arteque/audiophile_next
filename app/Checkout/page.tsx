"use client"
import Section from "@/_components/Assets/Section"
import Container from "@/_components/Assets/Container"
import GoBack from "@/_components/shared/GoBack"
import { useCartStore } from "@/store/CartStore"
import { useEffect } from "react"

const page = () => {


    const cart = useCartStore((state) => state.items)


    useEffect(() => {
        console.log("CartData", cart)
    }, [cart])

  return (
    <>
    <Section>
        <Container>
            <div className="2cols">
                <div className="form">
<GoBack />
            <h2 className="heading_main">
              Checkout
            </h2>
            <form className="mt-[1rem] w-full">
                <fieldset>
                    <Legend>Billing Details</Legend>
                    <div className="flex flex-col gap-[1rem] md:flex-row">
                        <div className="name w-full">
                            <Label htmlFor="name">Name*:</Label>
                            <input type="text" name="name" id="name" required placeholder="Alexei Ward" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                        <div className="mail w-full">
                            <Label htmlFor="email">Email Address*:</Label>
                            <input type="email" name="email" id="email" required placeholder="alexei@mail.com" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                    </div>
                    <div className="phone mt-[24px]">
                        <Label htmlFor="phone">Phone Number*:</Label>
                        <input type="tel" name="phone" id="phone" required placeholder="+1 202-555-0136" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                    </div>
                </fieldset>

                <fieldset>
                    <Legend>Shipping Info</Legend>
                    <div className="address w-full">
                        <Label htmlFor="address">Address*:</Label>
                        <input type="text" name="address" id="address" required placeholder="123 Main St" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                    </div>
                     <div className="flex flex-wrap flex-col gap-[1rem] md:flex-row md:justify-between mt-[24px]">
                        <div className="zip w-full md:w-[49%]">
                            <Label htmlFor="zipcode">Zip Code*:</Label>
                            <input type="text" name="zipcode" id="zipcode" required placeholder="12345" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                        <div className="city w-full md:w-[49%]">
                            <Label htmlFor="city">City*:</Label>
                            <input type="text" name="city" id="city" required placeholder="Los Angeles" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                        <div className="country">
                            <Label htmlFor="country">Country*:</Label>
                            <input type="text" name="country" id="country" required placeholder="United States" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <Legend>Payment Details</Legend>

                    <div className="payment md:flex md:justify-between">
                        <Label htmlFor="payment-method">Payment Method *:</Label>
                        <div className="payments-items w-full max-w-[689px]">
                            <div className="radio-item flex items-center gap-[1rem] p-[1rem] border-2 border-[#cfcfcf] rounded-[8px] mb-[1rem]">
                                <input type="radio" name="payment-method" id="e-money" value="e-money" className="w-[20px] h-[20px]" />
                                <Label htmlFor="e-money">e-Money</Label>
                            </div>
                            <div className="radio-item flex items-center gap-[1rem] p-[1rem] border-2 border-[#cfcfcf] rounded-[8px]">
                                <input type="radio" name="payment-method" id="cash-on-delivery" value="cash-on-delivery" className="w-[20px] h-[20px]" />
                                <Label htmlFor="cash-on-delivery">Cash on Delivery</Label>
                            </div>    
                        </div>
                    </div>
                    <div className="flex flex-col gap-[1rem] md:flex-row md:justify-between mt-[24px]">
                        <div className="e-money-number w-full md:w-[49%]">
                            <Label htmlFor="e-money-number">e-Money Number*:</Label>
                            <input type="text" name="e-money-number" id="e-money-number" required placeholder="238521993" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                        <div className="e-money-pin w-full md:w-[49%]">
                            <Label htmlFor="e-money-pin">e-Money PIN*:</Label>
                            <input type="text" name="e-money-pin" id="e-money-pin" required placeholder="6891" className="block w-full rounded-[8px] p-[1rem_24px] border-2 border-[#cfcfcf]"/>
                        </div>
                    </div>
                </fieldset>
            </form>
                </div>
                <div className="cart">

                </div>
            </div>
        </Container>
    </Section>
   
    </>
  )
}

export default page


const Label = ({ htmlFor, children }:{
    htmlFor: string;
    children: React.ReactNode | string;
}) => {
    return  <label htmlFor={htmlFor} className="block mb-[9px] font-bold">{children}</label>
}

const Legend = ({ children }: { children: React.ReactNode | string }) => {
    return <div className="le">
        <legend className="block text-[13px] font-bold tracking-[.93px] leading-[25px] text-prime-100 uppercase mt-[41px] mb-[1rem]">{children}</legend>
    </div>;
}