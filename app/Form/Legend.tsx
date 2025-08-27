const Legend = ({ children }: { children: React.ReactNode | string }) => {
  return (
    <div className="le">
      <legend className="block text-[13px] font-bold tracking-[.93px] leading-[25px] text-prime-100 uppercase mt-[41px] mb-[1rem]">
        {children}
      </legend>
    </div>
  );
};

export default Legend;
