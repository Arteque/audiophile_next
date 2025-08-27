import { motion } from "framer-motion"
import Image from "next/image"
import Loading from "@/Tools/Loading"
import { Suspense } from "react"
import Currency from "@/Tools/Currency"
import AddAndDelItemBtns from "./AddAndDelItemBtns"
import { useCartStore } from "@/store/CartStore"

const ItemInTheCart = () => {
  const items = useCartStore((state) => state.items);

  if (!items.length) {
    return (
      <p className="text-dark-100/50 text-center p-5 bg-light-100 rounded-[8px]">
        Sorry the cart is empty!
      </p>
    );
  }

  return (
    <>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{
            y: -10,
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: index * 0.05, // Reduced delay for snappier animation
              duration: 0.2,
              ease: "easeOut"
            },
          }}
          exit={{
            y: -10,
            opacity: 0,
            transition: { 
              duration: 0.15,
              ease: "easeIn"
            }
          }}
          className="item flex items-center justify-between gap-5 mb-[24px]"
        >
          <div className="flex flex-row gap-[1rem] items-center ">
            <div className="w-[64px] h-[64px] overflow-hidden rounded-[8px]">
              <Suspense fallback={<Loading />}>
                <Image
                  src={item.image}
                  width={64}
                  height={64}
                  alt={item.name}
                />
              </Suspense>
            </div>
            <ul>
              <li>
                <span className="text-dark-100 text-[15px] font-bold leading-[25px]">
                  {item.name}
                </span>
              </li>
              <li>
                <span className="text-dark-100/50 font-bold text-[14px] leading-[25px]">
                  {Currency(item.price, "USD")}
                </span>
              </li>
            </ul>
          </div>
          <AddAndDelItemBtns
            stock={item.stock}
            isInCart={true}
            productId={item.id}
            productName={item.name}
            initialAmount={item.quantity}
            className="h-[32px_!important] w-[32px_!important]"
          />
        </motion.div>
      ))}
    </>
  );
}

export default ItemInTheCart