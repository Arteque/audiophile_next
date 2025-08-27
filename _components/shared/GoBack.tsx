"use client";
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="block py-[1rem_24px] text-dark-100/50 text-[15px] font-medium leading-[25px] bg-transparent border-none cursor-pointer hover:text-prime-100"
    >
      Go Back
    </button>
  );
};

export default GoBack;
