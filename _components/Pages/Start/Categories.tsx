import CategorieItemsList from "@/_components/Assets/CategorieItemsList";
import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
const Categories = () => {
  return (
    <Section>
      <Container>
        <div className="lg:grid lg:grid-cols-3 lg:gap-[2rem] lg:py-[4rem]">
          <CategorieItemsList />
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
