import Nav from "../Assets/Nav";
import Burger from "../Assets/Burger";
import Cart from "../Assets/Cart";
import Logo from "../Assets/Logo";

const Header = () => {
  return (
    <header className="bg-dark-100 text-light-100 py-[2rem] px-[1rem] gap-1">
      <div className="container mx-auto flex items-center justify-between">
        <Burger />
        <Logo />
        <Nav />
        <Cart itemsCount={10} />
      </div>
    </header>
  );
};

export default Header;
