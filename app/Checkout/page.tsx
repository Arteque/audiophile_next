import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
import GoBack from "@/_components/shared/GoBack";
import Form from "@/_components/Assets/Form/Form";

const page = () => {
  return (
    <>
      <Section className="bg-light-100">
        <Container>
          <div className="2cols">
            <div className="form">
              <GoBack />
              <h2 className="heading_main">Checkout</h2>
              <Form />
            </div>
            <div className="cart"></div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default page;
