import Image from "next/image";
import Banner from "./components/Banner";
import Button from "./components/Button";
import ContactCard from "./components/ContactCard";
import Container from "./components/Container";
import Flex from "./components/Flex";
import Home_About_Us from "./components/Home_About_Us";
import Home_Engineering_Solution from "./components/Home_Engineering_Solution";
import Home_Technical_Trainning from "./components/Home_Technical_Trainning";

export default function PageNotFound() {
  return (
    <>
    <Container>
        <Flex className={"flex flex-col gap-y-2 h-full items-center"}>
            <Image src={'/images/not_found.png'} alt={'404'} width={1920} height={500} loading="eager" fetchPriority={"high"} className={"md:w-[40%] w-full pt-20 md:pt-0"}></Image>
            <Flex className={"flex flex-col gap-y-6 h-full font-semibold text-2xl text-text_tertiary pb-20"}>
                
            <span>Oops! Page Not Found</span>
            <span>The page you are looking for does not exist or has been removed.</span>
            <Button link="/">Go to Home</Button>
            </Flex>
        </Flex>
    </Container>
    </>
  );
}
