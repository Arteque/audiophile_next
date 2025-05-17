import Image from "next/image";
import Button from "../Assets/Button";

const ShowCase = () => {
  return (
    <figure>
      <Image
        src="/shared/desktop/image-category-thumbnail-headphones.png"
        alt="Earphones"
        width="122"
        height="160"
      />
      <figcaption>
        <h2>Headphones</h2>
        <Button variant="inline" text="Shop" href="/products/headphones" />
      </figcaption>
    </figure>
  );
};

export default ShowCase;
