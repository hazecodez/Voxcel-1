import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
  text?: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Voxcel")}</Language>
              <Large to="/">
                {t("Trendy Accessories for Your Smart Life!")}
              </Large>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <a
                  href="tel:+9710501175542"
                  style={{
                    fontSize: "16px",
                    color: "#000",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    textTransform: "capitalize",
                    lineHeight: "24px",
                    display: "block",
                    marginBottom: "0.625rem",
                    maxWidth: "max-content",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLElement; // Typecast here
                    target.style.color = "#4CBB17";
                    target.style.textDecoration = "wavy underline #4CBB17";
                    target.style.textUnderlinePosition = "under";
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement; // Typecast here
                    target.style.color = "#000";
                    target.style.textDecoration = "none";
                  }}
                >
                  +971 050 117 5542
                </a>

                <a
                  href="tel:+9710528403027"
                  style={{
                    fontSize: "16px",
                    color: "#000",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    textTransform: "capitalize",
                    lineHeight: "24px",
                    display: "block",
                    marginBottom: "0.625rem",
                    maxWidth: "max-content",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLElement; // Typecast here
                    target.style.color = "#4CBB17";
                    target.style.textDecoration = "wavy underline #4CBB17";
                    target.style.textUnderlinePosition = "under";
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement; // Typecast here
                    target.style.color = "#000";
                    target.style.textDecoration = "none";
                  }}
                >
                  +971 052 840 3027
                </a>
                <a
                  href="https://maps.app.goo.gl/cV4hCLg5gFt4Le9g9"
                  style={{
                    fontSize: "16px",
                    color: "#000",
                    cursor: "pointer",
                    transition: "all 0.3s ease-in-out",
                    textTransform: "capitalize",
                    lineHeight: "24px",
                    display: "block",
                    marginBottom: "0.625rem",
                    maxWidth: "max-content",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    const target = e.target as HTMLElement; // Typecast here
                    target.style.color = "#4CBB17";
                    target.style.textDecoration = "wavy underline #4CBB17";
                    target.style.textUnderlinePosition = "under";
                  }}
                  onMouseOut={(e) => {
                    const target = e.target as HTMLElement; // Typecast here
                    target.style.color = "#000";
                    target.style.textDecoration = "none";
                  }}
                >
                  Opp. INDEX CHARCOAL, Musaffah - 37, Musaffah Industrial - Abu
                  Dhabi
                </a>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Services")}</Title>
              <Large to="/">{t("All Mobile Accessories")}</Large>
              <Large to="/">{t("Smartwatches")}</Large>
              <Large to="/">{t("Sim Cards")}</Large>
              <Large to="/">{t("Mobile Sales  and Service")}</Large>
              <Large to="/">{t("Hardwaring and Softwaring")}</Large>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Social")}</Title>

              <div style={{ display: "flex", gap: "24px" }}>
                <SocialLink href="https://wa.link/8zkq1t" src="wp.svg" />
                <SocialLink
                  href="https://www.instagram.com/_voxcel_/"
                  src="insta.svg"
                />
                <SocialLink
                  href="https://www.facebook.com/453743141148891"
                  src="fb.svg"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.png"
                  aria-label="homepage"
                  width="150px"
                  height="40px"
                />
              </LogoContainer>
            </NavLink>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
