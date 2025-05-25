import CategorieItemsList from "@/_components/Assets/CategorieItemsList";
import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
const Categories = () => {
  return (
    <Section marginTop="full" className="mb-[120px]">
      <Container>
        <div className="md:grid md:grid-cols-3 md:gap-[10px] lg:py-[4rem]">
          <CategorieItemsList />
        </div>
      </Container>
    </Section>
  );
};

export default Categories;
