import Nav from "../Assets/Nav";
import Burger from "../Assets/Burger";
import Cart from "../Assets/Cart";
import Logo from "../Assets/Logo";
import Container from "../Assets/Container";
const Header = () => {
  return (
    <header className="bg-[#191919] text-light-100 py-[2rem] px-[1rem] gap-1 sticky top-0 left-0 right-0 z-[9999] lg:py-[0]">
      <Container className="flex items-center justify-between  lg:border-b-1 lg:border-b-light-100/20">
        <Burger />
        <Logo className="md:mr-[auto] md:mx-[42px] lg:mx-[unset]" />
        <Nav variant="main" />
        <Cart itemsCount={0} />
      </Container>
    </header>
  );
};

export default Header;
