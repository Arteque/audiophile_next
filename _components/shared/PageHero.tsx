import Section from "../Assets/Section"
import Container from "../Assets/Container"

type PageHeroProps = {
  pageTitle : string;
}

const PageHero = ({pageTitle}:PageHeroProps) => {
  return (
    <Section className="page_hero bg-dark-100 mt-[unset_!important]">
      <Container className="my-0">
          <h2 className=" font-bold text-center py-[97px] text-light-100 text-[40px] uppercase">{pageTitle}</h2>
      </Container>
    </Section>
  )
}

export default PageHero
