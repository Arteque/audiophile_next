import Image from "next/image";
import Button from "./Button";

const CategorieItemStyling = () => {
  return "flex flex-col items-center rounded-[8px] w-full mb-[1rem] max-w-[350px] relative pt-[1rem] pb-[36px] mx-auto";
};

const CategorieItem = ({ cat }: { cat: any }) => {
  return (
    <figure className={`productCard ${CategorieItemStyling()}`}>
      <Image
        src={`${cat.media.url}`}
        alt={
          cat.media.alt || cat.media.title || cat.name || cat.translated.name
        }
        width={cat.media.metaData.width}
        height={cat.media.metaData.height}
      />
      <figcaption>
        <h3 className="font-bold text-[15px] tracking-[1.07px] mb-[15px] lg:text-[18px] lg:tracking-[1.29px]">
          {cat.name || cat.translated.name}
        </h3>
        <Button
          href={`products/${cat.name || cat.translated.name}?id=${cat.id}`}
          variant="inline"
          text="Shop"
          className="mt-2 mx-auto"
        />
      </figcaption>
    </figure>
  );
};

export default CategorieItem;
