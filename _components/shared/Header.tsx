import Nav from "../Assets/Nav";
import Burger from "../Assets/Burger";
import Cart from "../Assets/Cart";
import Logo from "../Assets/Logo";

const Header = () => {
  return (
    <header className="bg-[#191919] text-light-100 py-[2rem 0] px-[1rem] gap-1 sticky top-0 left-0 right-0 z-[9999]">
      <div className="container mx-auto flex items-center justify-between  lg:border-b-1 lg:border-b-light-100/20">
        <Burger />
        <Logo />
        <Nav />
        <Cart itemsCount={0} />
      </div>
    </header>
  );
};

export default Header;
