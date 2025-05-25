import Nav from "../Assets/Nav";
import Burger from "../Assets/Burger";
import Cart from "../Assets/Cart";
import Logo from "../Assets/Logo";

const Header = () => {
  return (
    <header className="bg-[#191919] text-light-100 py-[2rem] px-[1rem] gap-1 sticky top-0 left-0 right-0 z-[9999] lg:py-[0]">
      <div className="container mx-auto max-w-[1110px] flex items-center justify-between  lg:border-b-1 lg:border-b-light-100/20">
        <Burger />
        <Logo className="md:w-full md:mx-[42px]"/>
        <Nav  variant="main"/>
        <Cart itemsCount={0} />
      </div>
    </header>
  );
};

export default Header;
