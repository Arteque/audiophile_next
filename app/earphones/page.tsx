import PageHero from "@/_components/shared/PageHero";
import Section from "@/_components/Assets/Section";
import Container from "@/_components/Assets/Container";
const page = async () => {
  const resp = await fetch("api/nagivation/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "sw-access-key": process.env.SHOPWARE_ACCESS_KEY || "",
    },
  });
  const data = await resp.json();
  console.log(data);

  return (
    <>
      {/* 
     <Items category="earphones" />  */}
      <PageHero pageTitle="Earphones" />
      <Section>
        <Container>
          <header>
            <h2 className="text-center text-[32px] uppercase font-black">
              Earphones
            </h2>
          </header>
        </Container>
      </Section>
    </>
  );
};

export default page;
