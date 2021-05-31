import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Heading, Stack, SimpleGrid, Text } from "@chakra-ui/react";

import { Carousel } from "../../components/Slider";
import { Timeline, ImageText } from "../../components/Timeline";

const renderDesktop = (t: any) => [
  <SimpleGrid columns={4}>
    <Timeline title="2011">
      <ImageText
        href="https://www.meurio.org.br/"
        src="/static/media/timeline/meurio.png"
        text={t("timeline.2011.1")}
      />
    </Timeline>
    <Timeline title="2013">
      <ImageText
        href="https://www.escolanaosedestroi.meurio.org.br/"
        src="/static/media/timeline/vitoria.png"
        text={t("timeline.2013.1")}
      />
    </Timeline>
    <Timeline title="2014">
      <ImageText
        href="https://www.minhasampa.org.br/"
        src="/static/media/timeline/minhasampa.png"
        text={t("timeline.2014.1")}
      />
      <ImageText
        href="https://www.amarildosepriscilas.meurio.org.br/"
        src="/static/media/timeline/amarildosepriscilas.png"
        text={t("timeline.2014.2")}
      />
    </Timeline>
    <Timeline title="2014" titleVisibility="hidden">
      <ImageText
        href="https://www.paulistaaberta.minhasampa.org.br/"
        src="/static/media/timeline/paulistaaberta.png"
        text={t("timeline.2014.3")}
      />
      <ImageText
        href="https://www.redenossascidades.org/"
        src="/static/media/timeline/rnc.png"
        text={t("timeline.2014.4")}
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2016">
      <ImageText
        href="http://www.saibamais.defezap.org.br/"
        src="/static/media/timeline/defezap.png"
        text={t("timeline.2016.1")}
      />
      <ImageText
        href="https://www.mapadoacolhimento.org/"
        src="/static/media/timeline/mapadoacolhimento.png"
        text={t("timeline.2016.2")}
      />
      <ImageText
        href="https://www.naovaitermesada.meurio.org.br/"
        src="/static/media/timeline/naovaitermesada.png"
        text={t("timeline.2016.3")}
      />
    </Timeline>
    <Timeline title="2017">
      <ImageText
        href="https://www.beta.org.br/"
        src="/static/media/timeline/beta.png"
        text={t("timeline.2017.1")}
      />
    </Timeline>
    <Timeline title="2018">
      <ImageText
        href="https://www.bonde.org/"
        src="/static/media/timeline/bonde.png"
        text={t("timeline.2018.1")}
      />
      <ImageText
        href="https://www.ninguemficapratras.org/"
        src="/static/media/timeline/nfpt.png"
        text={t("timeline.2018.2")}
      />
    </Timeline>
    <Timeline title="2018" titleVisibility="hidden">
      <ImageText
        href="https://www.riosemcanudo.meurio.org.br/"
        src="/static/media/timeline/canudos.png"
        text={t("timeline.2018.3")}
      />
      <ImageText
        href="https://www.somoscria.meurio.org.br/"
        src="/static/media/timeline/somoscria.png"
        text={t("timeline.2018.4")}
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2019">
      <ImageText
        href="https://www.mobilizadores.nossas.org/"
        src="/static/media/timeline/programamobilizadores.png"
        text={t("timeline.2019.1")}
      />
      <ImageText
        href="https://www.violencianaotemhora.minhasampa.org.br/"
        src="/static/media/timeline/violencianaotemhora.png"
        text={t("timeline.2019.2")}
      />
      <ImageText
        href="https://www.spsemcanudo.minhasampa.org.br/"
        src="/static/media/timeline/canudos-sp.png"
        text={t("timeline.2019.3")}
      />
    </Timeline>
    <Timeline title="2019" titleVisibility="hidden">
      <ImageText
        href=""
        src="/static/media/timeline/pec29.png"
        text={t("timeline.2019.4")}
      />
      <ImageText
        href=""
        src="/static/media/timeline/nossas.png"
        text={t("timeline.2019.5")}
      />
    </Timeline>
    <Timeline title="2020">
      <ImageText
        href="https://www.rendabasica.org.br/"
        src="/static/media/timeline/rendabasica.png"
        text={t("timeline.2020.1")}
      />
      <ImageText
        href="https://www.covid19nasfavelas.meurio.org.br/"
        src="/static/media/timeline/covidnasfavelas.png"
        text={t("timeline.2020.2")}
      />
      <ImageText
        href="https://www.semaulasemenem.nossas.org.br/"
        src="/static/media/timeline/semaulassemenem.png"
        text={t("timeline.2020.3")}
      />
    </Timeline>
    <Timeline title="2020" titleVisibility="hidden">
      <ImageText
        href="https://www.4gparaestudar.nossas.org.br/"
        src="/static/media/timeline/4gpraestudantes.png"
        text={t("timeline.2020.4")}
      />
      <ImageText
        href="https://www.amazoniacontracovid.org.br/"
        src="/static/media/timeline/amazoniacontracovid.png"
        text={t("timeline.2020.5")}
      />
      <ImageText
        href="https://www.editalperiferiaquefaz.nossas.org/"
        src="/static/media/timeline/periferia-que-faz.png"
        text="O primeiro programa de repasses do NOSSAS contemplou 12 coletivos periféricos nas cinco regiões do país."
      />
    </Timeline>
  </SimpleGrid>,
];

const renderMobile = (t: any) => [
  <Timeline title="2011">
    <ImageText
      href="https://www.meurio.org.br/"
      src="/static/media/timeline/meurio.png"
      text={t("timeline.2011.1")}
    />
  </Timeline>,
  <Timeline title="2013">
    <ImageText
      href="https://www.escolanaosedestroi.meurio.org.br/"
      src="/static/media/timeline/vitoria.png"
      text={t("timeline.2013.1")}
    />
  </Timeline>,
  <Timeline title="2014">
    <ImageText
      href="https://www.minhasampa.org.br/"
      src="/static/media/timeline/minhasampa.png"
      text={t("timeline.2014.1")}
    />
    <ImageText
      href="https://www.amarildosepriscilas.meurio.org.br/"
      src="/static/media/timeline/amarildosepriscilas.png"
      text={t("timeline.2014.2")}
    />
  </Timeline>,
  <Timeline title="2014" titleVisibility="hidden">
    <ImageText
      href="https://www.paulistaaberta.minhasampa.org.br/"
      src="/static/media/timeline/paulistaaberta.png"
      text={t("timeline.2014.3")}
    />
    <ImageText
      href="https://www.redenossascidades.org/"
      src="/static/media/timeline/rnc.png"
      text={t("timeline.2014.4")}
    />
  </Timeline>,
  <Timeline title="2016">
    <ImageText
      href="http://www.saibamais.defezap.org.br/"
      src="/static/media/timeline/defezap.png"
      text={t("timeline.2016.1")}
    />
    <ImageText
      href="https://www.mapadoacolhimento.org/"
      src="/static/media/timeline/mapadoacolhimento.png"
      text={t("timeline.2016.2")}
    />
    <ImageText
      href="https://www.naovaitermesada.meurio.org.br/"
      src="/static/media/timeline/naovaitermesada.png"
      text={t("timeline.2016.3")}
    />
  </Timeline>,
  <Timeline title="2017">
    <ImageText
      href="https://www.beta.org.br/"
      src="/static/media/timeline/beta.png"
      text={t("timeline.2017.1")}
    />
  </Timeline>,
  <Timeline title="2018">
    <ImageText
      href="https://www.bonde.org/"
      src="/static/media/timeline/bonde.png"
      text={t("timeline.2018.1")}
    />
    <ImageText
      href="https://www.ninguemficapratras.org/"
      src="/static/media/timeline/nfpt.png"
      text={t("timeline.2018.2")}
    />
  </Timeline>,
  <Timeline title="2018" titleVisibility="hidden">
    <ImageText
      href="https://www.riosemcanudo.meurio.org.br/"
      src="/static/media/timeline/canudos.png"
      text={t("timeline.2018.3")}
    />
    <ImageText
      href="https://www.somoscria.meurio.org.br/"
      src="/static/media/timeline/somoscria.png"
      text={t("timeline.2018.4")}
    />
  </Timeline>,
  <Timeline title="2019">
    <ImageText
      href="https://www.mobilizadores.nossas.org/"
      src="/static/media/timeline/programamobilizadores.png"
      text={t("timeline.2019.1")}
    />
    <ImageText
      href="https://www.violencianaotemhora.minhasampa.org.br/"
      src="/static/media/timeline/violencianaotemhora.png"
      text={t("timeline.2019.2")}
    />
    <ImageText
      href="https://www.spsemcanudo.minhasampa.org.br/"
      src="/static/media/timeline/canudos-sp.png"
      text={t("timeline.2019.3")}
    />
  </Timeline>,
  <Timeline title="2019" titleVisibility="hidden">
    <ImageText
      src="/static/media/timeline/pec29.png"
      text={t("timeline.2019.4")}
    />
    <ImageText
      src="/static/media/timeline/nossas.png"
      text={t("timeline.2019.5")}
    />
  </Timeline>,
  <Timeline title="2020">
    <ImageText
      href="https://www.rendabasica.org.br/"
      src="/static/media/timeline/rendabasica.png"
      text={t("timeline.2020.1")}
    />
    <ImageText
      href="https://www.covid19nasfavelas.meurio.org.br/"
      src="/static/media/timeline/covidnasfavelas.png"
      text={t("timeline.2020.2")}
    />
    <ImageText
      href="https://www.semaulasemenem.nossas.org.br/"
      src="/static/media/timeline/semaulassemenem.png"
      text={t("timeline.2020.3")}
    />
  </Timeline>,
  <Timeline title="2020" titleVisibility="hidden">
    <ImageText
      href="https://www.4gparaestudar.nossas.org.br/"
      src="/static/media/timeline/4gpraestudantes.png"
      text={t("timeline.2020.4")}
    />
    <ImageText
      href="https://www.amazoniacontracovid.org.br/"
      src="/static/media/timeline/amazoniacontracovid.png"
      text={t("timeline.2020.5")}
    />
    <ImageText
      href="https://www.editalperiferiaquefaz.nossas.org/"
      src="/static/media/timeline/periferia-que-faz.png"
      text="O primeiro programa de repasses do NOSSAS contemplou 12 coletivos periféricos nas cinco regiões do país."
    />
  </Timeline>,
];

const TimelineView = ({ isMobile }: any) => {
  const { t } = useTranslation("about");

  return (
    <Stack direction="column">
      <SimpleGrid
        columns={[1, null, null, 2]}
        templateColumns={["auto", null, null, "582px auto"]}
        rowGap="30px"
        mb="50px"
        ml={["32px", "0"]}
      >
        <Box>
          <Heading as="h2" variant="tag">
            {t("timeline.title")}
          </Heading>
        </Box>
        <Text>{t("timeline.description")}</Text>
      </SimpleGrid>
      <Carousel items={isMobile ? renderMobile(t) : renderDesktop(t)} />
    </Stack>
  );
};

export default TimelineView;
