import React from "react";
import { Heading, Image, Grid } from "@chakra-ui/react";

const Media = ({ title, logos }) => {
  return (
    <section>
      <Grid
        backgroundColor="#F7F7F7"
        templateColumns={["auto", "auto", "300px 50%"]}
        templateRows={["auto auto", "auto auto", "auto"]}
        p={["30px", "30px", "100px"]}
        justifyContent={["initial", "initial", "space-between"]}
      >
        <Heading
          display="flex"
          alignItems="center"
          fontSize={["3xl", "5xl"]}
          color="nossas.blue"
          fontWeight="200"
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
        >
          {logos.map((logo, i) => (
            <Image
              src={logo}
              alt=""
              key={`media-${i}`}
              width={["80%", "50%", "unset"]}
            />
          ))}
        </Grid>
      </Grid>
    </section>
  );
};

export default Media;
