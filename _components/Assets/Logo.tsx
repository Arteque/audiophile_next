import Image from "next/image";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="Logo md:w-full">
      <Image
        src="/shared/desktop/logo.svg"
        alt="Audiphile Onlineshope Logo White"
        width="143"
        height="25"
        priority
      />
    </Link>
  );
};

export default Logo;
