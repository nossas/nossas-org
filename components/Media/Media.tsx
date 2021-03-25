import React from "react";
import { Heading, Img as Image, Grid } from "@chakra-ui/react";

const ImageLogo = ({ logo }: any) => {
  const image = (
    <Image src={logo?.src || logo} alt="" width={["80%", "50%", "unset"]} />
  );

  if (logo?.href) {
    return (
      <a href={logo.href} target="_blank">
        {image}
      </a>
    );
  }

  return image;
};

const Media = ({ title, logos }) => {
  return (
    <section>
      <Grid
        backgroundColor="gray.light"
        templateColumns={["auto", "auto", "300px 50%"]}
        templateRows={["auto auto", "auto auto", "auto"]}
        p={["30px", "30px", "100px"]}
        justifyContent={["initial", "initial", "space-between"]}
      >
        <Heading
          display="flex"
          alignItems="center"
          color="blue.main"
          size="lg"
          fontWeight="normal"
        >
          {title}{" "}
          <span style={{ marginLeft: "60px", fontSize: "2rem" }}>|</span>
        </Heading>
        <Grid
          templateColumns={[
            "repeat(2, auto)",
            "repeat(2, auto)",
            "repeat(4, auto)",
          ]}
          justifyItems="center"
          gridRowGap={["25px"]}
          gridColumnGap={["25px"]}
        >
          {logos.map((logo: any, i: number) => (
            <ImageLogo key={`media-${i}`} logo={logo} />
          ))}
        </Grid>
      </Grid>
    </section>
  );
};

export default Media;
