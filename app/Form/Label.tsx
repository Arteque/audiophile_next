const Label = ({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode | string;
}) => {
  return (
    <label htmlFor={htmlFor} className="block mb-[9px] font-bold">
      {children}
    </label>
  );
};
export default Label;
