import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
}
const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={`Logo lg:w-fit ${className}`}>
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
