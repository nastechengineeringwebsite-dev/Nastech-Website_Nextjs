import AnimatePage from "./components/AnimatePage";
import Banner from "./components/Banner";
import ContactCard from "./components/ContactCard";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Home_About_Us from "./components/Home_About_Us";
import Home_Engineering_Solution from "./components/Home_Engineering_Solution";
import Home_Technical_Trainning from "./components/Home_Technical_Trainning";

export default function Home() {
  return (
    <>
      <Flex className={"flex flex-col gap-y-[100px]"}>
        <Banner />
        <AnimatePage>
          <Flex className={"flex flex-col gap-y-[100px]"}>

          <Home_About_Us />
          <Home_Technical_Trainning />
          <Home_Engineering_Solution />
          <ContactCard />
          </Flex>
        </AnimatePage>
      </Flex>
    </>
  );
}
