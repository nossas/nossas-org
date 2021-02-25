import React from "react";
import { TagAsTitle, Section } from "../../components/Page";
import { TimelineController } from "../../components/Timeline";

const Timeline = ({ isMobile, t }: any) => (
  <Section direction="column" spacing="55px">
    <TagAsTitle>{t("content:blocks.about.timeline.title")}</TagAsTitle>
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
      }}
    />
  </Section>
);

export default Timeline;
