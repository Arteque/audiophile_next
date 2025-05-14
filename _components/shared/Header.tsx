import Nav from "../Assets/Nav";
import Burger from "../Assets/Burger";
import Cart from "../Assets/Cart";
import Logo from "../Assets/Logo";

const Header = () => {
  return (
    <header className="bg-dark-100 text-light-100 py-[2rem] px-[1rem] gap-1 fixed top-0 left-0 right-0 z-[9999]">
      <div className="container mx-auto flex items-center justify-between">
        <Burger />
        <Logo />
        <Nav />
        <Cart itemsCount={0} />
      </div>
    </header>
  );
};

export default Header;
