import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ContainerBanner from "../../common/Container-banner";
import ReviewCarousel from "../../components/Review";
import Gallery from "../../components/CollectionGallery";

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
          icon="img-2.jpg"
          id="about"
          color="#000000"
        />
        <Gallery/>        
      </Container>
      <ReviewCarousel/>
    </>
  );
};

export default Home;
