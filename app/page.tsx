import Categories from "@/_components/Pages/Start/Categories";
import Hero from "@/_components/Pages/Start/Hero";
import Showcase from "@/_components/Pages/Start/Showcase";
import Showcase_2 from "@/_components/Pages/Start/Showcase_2";
import Showcase_3 from "@/_components/Pages/Start/Showcase_3";

// Add async to make this a server component that can show loading
const page = async () => {
  // Simulate loading delay to demonstrate the loading page
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <>
      <Hero />
      <Categories />
      <Showcase />
      <Showcase_2 />
      <Showcase_3 />
    </>
  );
};

export default page;
