import React from "react";
import { Heading } from "@chakra-ui/react";
import { Section } from "../../components/Page";
import { TimelineController } from "../../components/Timeline";

const Timeline = ({ isMobile, t }: any) => (
  <Section direction="column" spacing="55px">
    <Heading as="h2" variant="tag">
      {t("content:blocks.about.timeline.title")}
    </Heading>
    <TimelineController
      isMobile={isMobile}
      items={{
        2011: [
          {
            src: "/static/media/timeline/meurio.png",
            text: t("content:blocks.about.timeline.2011.meurio"),
          },
        ],
        2014: [
          {
            src: "/static/media/timeline/minhasampa.png",
            text: t("content:blocks.about.timeline.2014.minhasampa"),
          },
          {
            src: "/static/media/timeline/rnc.png",
            text: t("content:blocks.about.timeline.2014.rnc"),
          },
        ],
        2016: [
          {
            src: "/static/media/timeline/defezap.png",
            text: t("content:blocks.about.timeline.2016.defezap"),
          },
          {
            src: "/static/media/timeline/mapadoacolhimento.png",
            text: t("content:blocks.about.timeline.2016.mapadoacolhimento"),
          },
        ],
        2017: [
          {
            src: "/static/media/timeline/instintodevida.png",
            text: t("content:blocks.about.timeline.2017.instintodevida"),
          },
          {
            src: "/static/media/timeline/beta.png",
            text: t("content:blocks.about.timeline.2017.beta"),
          },
        ],
        2018: [
          {
            src: "/static/media/timeline/bonde.png",
            text: t("content:blocks.about.timeline.2018.bonde"),
          },
        ],
        2019: [
          {
            src: "/static/media/timeline/maraton.png",
            text: t("content:blocks.about.timeline.2019.maraton"),
          },
          {
            src: "/static/media/timeline/programamobilizadores.png",
            text: t("content:blocks.about.timeline.2019.programamobilizadores"),
          },
        ],
        2020: [
          {
            src: "/static/media/timeline/periferiaquefaz.png",
            text: t("content:blocks.about.timeline.2020.periferiaquefaz"),
          },
        ],
      }}
    />
  </Section>
);

export default Timeline;
