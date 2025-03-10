import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import ContainerBanner from "../../common/Container-banner";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
  return (
    <>
      <ContainerBanner>
        <ScrollToTop />
        <div
          style={{
            backgroundImage: "url('/img/imgs/banner.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            minHeight: "calc(100% + 50px)",
            padding: "20px",
          }}
        >
          <ContentBlock
            direction="right"
            title={IntroContent.title}
            content={IntroContent.text}
            button={IntroContent.button}
            icon=""
            id="intro"
            color="#FFFFFF"
          />
        </div>
      </ContainerBanner>
      <Container>
        <MiddleBlock
          title={MiddleBlockContent.title}
          content={MiddleBlockContent.text}
          button={MiddleBlockContent.button}
        />
        <ContentBlock
          direction="left"
          title={AboutContent.title}
          content={AboutContent.text}
          section={AboutContent.section}
          icon="img-2.jpg"
          id="about"
          color="#000000"
        />
        <ContentBlock
          direction="right"
          title={MissionContent.title}
          content={MissionContent.text}
          icon="product-launch.svg"
          id="mission"
          color="#000000"
        />
        <ContentBlock
          direction="left"
          title={ProductContent.title}
          content={ProductContent.text}
          icon="waving.svg"
          id="product"
          color="#000000"
        />
        {/* <Contact
  title={ContactContent.title}
  content={ContactContent.text}
  id="contact"
/> */}
      </Container>
    </>
  );
};

export default Home;
