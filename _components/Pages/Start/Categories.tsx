import CategorieItemsList from "@/_components/Assets/CategorieItemsList";
import Section from "@/_components/Assets/Section";
const Categories = () => {
  return (
    <Section>
      <div className="container">
        <div className="lg:grid lg:grid-cols-3 lg:gap-[2rem] lg:py-[4rem]">
          <CategorieItemsList />
        </div>
      </div>
    </Section>
  );
};

export default Categories;
