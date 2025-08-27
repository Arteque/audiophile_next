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
                    <legend className="text-[13px] font-bold tracking-[.93px] leading-[25px] text-prime-100 uppercase mt-[41px] mb-[1rem]">Billing Details</legend>
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
    children: React.ReactNode;
}) => {
    return  <label htmlFor={htmlFor} className="block mb-[9px] font-bold">{children}</label>
}