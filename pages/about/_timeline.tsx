import React from "react";
import { useTranslation } from "next-i18next";
import { Box, Heading, Stack, SimpleGrid, Text } from "@chakra-ui/react";

import { Carousel } from "../../components/Slider";
import { Timeline, ImageText } from "../../components/Timeline";
import { useWindowSize } from "../../components/Page";

const renderDesktop = (t: any) => [
  <SimpleGrid columns={4}>
    <Timeline title="2011">
      <ImageText
        alt='Imagem com o texto "meu rio"'
        href="https://www.meurio.org.br/"
        src="/static/media/timeline/PT/meurio.png"
        text={t("timeline.2011.1")}
      />
    </Timeline>
    <Timeline title="2013">
      <ImageText
        alt='Imagem com o texto "vitória da friedenreich, escola não se destrói!"'
        href="https://www.escolanaosedestroi.meurio.org.br/"
        src="/static/media/timeline/PT/vitoria.png"
        text={t("timeline.2013.1")}
      />
    </Timeline>
    <Timeline title="2014">
      <ImageText
        alt='Imagem com o texto "minha sampa"'
        href="https://www.minhasampa.org.br/"
        src="/static/media/timeline/PT/minhasampa.png"
        text={t("timeline.2014.1")}
      />
      <ImageText
        alt='Imagem com o texto "amarildos e priscilas"'
        href="https://www.amarildosepriscilas.meurio.org.br/"
        src="/static/media/timeline/PT/amarildosepriscilas.png"
        text={t("timeline.2014.2")}
      />
    </Timeline>
    <Timeline title="2014" titleVisibility="hidden">
      <ImageText
        alt='Imagem com o texto "paulista aberta"'
        href="https://www.paulistaaberta.minhasampa.org.br/"
        src="/static/media/timeline/PT/paulistaaberta.png"
        text={t("timeline.2014.3")}
      />
      <ImageText
        alt='Imagem com o texto "RNC"'
        href="https://www.redenossascidades.org/"
        src="/static/media/timeline/PT/rnc.png"
        text={t("timeline.2014.4")}
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2016">
      <ImageText
        alt='Imagem com o texto "defezap"'
        href="http://www.saibamais.defezap.org.br/"
        src="/static/media/timeline/PT/defezap.png"
        text={t("timeline.2016.1")}
      />
      <ImageText
        alt='Imagem com o texto "mapa do acolhimento"'
        href="https://www.mapadoacolhimento.org/"
        src="/static/media/timeline/PT/mapadoacolhimento.png"
        text={t("timeline.2016.2")}
      />
      <ImageText
        alt='Imagem com o texto "não vai ter mesada"'
        href="https://www.naovaitermesada.meurio.org.br/"
        src="/static/media/timeline/PT/naovaitermesada.png"
        text={t("timeline.2016.3")}
      />
    </Timeline>
    <Timeline title="2017">
      <ImageText
        alt='Imagem com o texto "beta"'
        href="https://www.beta.org.br/"
        src="/static/media/timeline/PT/beta.png"
        text={t("timeline.2017.1")}
      />
    </Timeline>
    <Timeline title="2018">
      <ImageText
        alt='Imagem com o texto "bonde"'
        href="https://www.bonde.org/"
        src="/static/media/timeline/PT/bonde.png"
        text={t("timeline.2018.1")}
      />
      <ImageText
        alt='Imagem com o texto "ninguém fica pra trás"'
        href="https://www.ninguemficapratras.org/"
        src={t("timeline.2018.2.src")}
        text={t("timeline.2018.2.text")}
      />
    </Timeline>
    <Timeline title="2018" titleVisibility="hidden">
      <ImageText
        alt='Imagem com o texto "pelo fim dos canudos de plástico no rio de janeiro"'
        href="https://www.riosemcanudo.meurio.org.br/"
        src="/static/media/timeline/PT/canudos.png"
        text={t("timeline.2018.3")}
      />
      <ImageText
        alt='Imagem com o texto "somos cria"'
        href="https://www.somoscria.meurio.org.br/"
        src="/static/media/timeline/PT/somoscria.png"
        text={t("timeline.2018.4")}
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2019">
      <ImageText
        alt='Imagem com o texto "programa de mobilizadores"'
        href="https://www.mobilizadores.nossas.org/"
        src="/static/media/timeline/PT/programamobilizadores.png"
        text={t("timeline.2019.1")}
      />
      <ImageText
        alt='Imagem com o texto "violência não tem hora"'
        href="https://www.violencianaotemhora.minhasampa.org.br/"
        src="/static/media/timeline/PT/violencianaotemhora.png"
        text={t("timeline.2019.2")}
      />
    </Timeline>
    <Timeline title="2019" titleVisibility="hidden">
      <ImageText
        alt='Imagem com o texto "pelo fim dos canudos de plástico em são paulo"'
        href="https://www.spsemcanudo.minhasampa.org.br/"
        src="/static/media/timeline/PT/canudos-sp.png"
        text={t("timeline.2019.3")}
      />
      <ImageText
        alt='Imagem com o texto "parem o cavalo de troia!"'
        src="/static/media/timeline/PT/pec29.png"
        text={t("timeline.2019.4")}
      />
    </Timeline>
    <Timeline title="2020">
      <ImageText
        alt='Imagem com o texto "renda básica que queremos"'
        href="https://www.rendabasica.org.br/"
        src="/static/media/timeline/PT/rendabasica.png"
        text={t("timeline.2020.1")}
      />
      <ImageText
        alt='Imagem com o texto "covid 19 nas favelas"'
        href="https://www.covid19nasfavelas.meurio.org.br/"
        src="/static/media/timeline/PT/covidnasfavelas.png"
        text={t("timeline.2020.2")}
      />
      <ImageText
        alt='Imagem com o texto "sem aula sem ENEM"'
        href="https://www.semaulasemenem.nossas.org.br/"
        src="/static/media/timeline/PT/semaulassemenem.png"
        text={t("timeline.2020.3")}
      />
    </Timeline>
    <Timeline title="2020" titleVisibility="hidden">
      <ImageText
        alt='Imagem com o texto "4g para estudar"'
        href="https://www.4gparaestudar.nossas.org.br/"
        src="/static/media/timeline/PT/4g-para-estudar.png"
        text={t("timeline.2020.4")}
      />
      <ImageText
        alt='Imagem com o texto "Amazônia contra a Covid-19"'
        href="https://www.amazoniacontracovid.nossas.org/"
        src="/static/media/timeline/PT/amazoniacontracovid.png"
        text={t("timeline.2020.5")}
      />
      <ImageText
        alt='Imagem com o texto "Periferia que faz"'
        href="https://www.editalperiferiaquefaz.nossas.org/"
        src="/static/media/timeline/PT/periferia-que-faz.png"
        text={t("timeline.2020.6")}
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2021">
      <ImageText
        alt='Imagem com o texto "Minha Manaus"'
        href="https://www.minhamanaus.org.br/"
        src="/static/media/timeline/PT/minha-manaus.png"
        text={t("timeline.2021.1")}
      />
      <ImageText
        alt='Ilustração com o texto "Surpervia, aumento não"'
        href="https://www.superviaaumentonao.meurio.org.br/"
        src="/static/media/timeline/PT/supervia.png"
        text={t("timeline.2021.2")}
      />
      <ImageText
        alt='Imagem com o texto "MUVUCA programa de ativismo climático"'
        href="https://www.muvuca.nossas.org/"
        src="/static/media/timeline/PT/muvuca.png"
        text={t("timeline.2021.3")}
      />
    </Timeline>
    <Timeline title="2021" titleVisibility="hidden">
      <ImageText
        alt='Ilustração com o texto "Meu corpo Meu DIU"'
        href="https://www.meucorpomeudiu.nossas.org/"
        src="/static/media/timeline/PT/meu-corpo-meu-diu.png"
        text={t("timeline.2021.4")}
      />
      <ImageText
        alt='Ilustração com o texto "Contra-ataque: apoie o jacaré basquete"'
        href="https://www.jacarebasquete.meurio.org.br/"
        src="/static/media/timeline/PT/logo-jacare-basquete.png"
        text={t("timeline.2021.11")}
      />
      <ImageText
        alt='Imagem com o texto "Meia-entrada SIM! #VETAPL300"'
        href="https://www.meiaentradasim.minhasampa.org.br/"
        src="/static/media/timeline/PT/meia-entrada.png"
        text={t("timeline.2021.5")}
      />
    </Timeline>
    <Timeline title="2021" titleVisibility="hidden">
      <ImageText
        alt='Imagem com o texto "EmLuta"'
        href="https://www.emluta.org.br/"
        src="/static/media/timeline/PT/em-luta.png"
        text={t("timeline.2021.6")}
      />
      <ImageText
        alt='Imagem da Cop 26 com o texto "keep the amazon alive"'
        src="/static/media/timeline/PT/cop26.png"
        text={t("timeline.2021.7")}
      />
      <ImageText
        alt='Ilustração com o texto "Acolhimento não se terceiriza"'
        href="https://www.acolhimentonaoseterceiriza.minhasampa.org.br/"
        src="/static/media/timeline/PT/acolhimento-nao-se-terceiriza.png"
        text={t("timeline.2021.8")}
      />
    </Timeline>
    <Timeline title="2021" titleVisibility="hidden">
      <ImageText
        alt='Ilustração com o texto "1º fórum do mapa do acolhimento"'
        src="/static/media/timeline/PT/forum.png"
        text={t("timeline.2021.9")}
      />
      <ImageText
        alt='Imagem com o texto "SOS floresta do camboatá"'
        href="https://www.sosflorestadocamboata.meurio.org.br/"
        src="/static/media/timeline/PT/sos-floresta-camboata.png"
        text={t("timeline.2021.10")}
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2022">
      <ImageText
        alt='Imagem com o texto "Paraisópolis Resiste"'
        href="https://paraisopolis.minhasampa.org.br/"
        src="/static/media/timeline/PT/logo-paraisopolis-resiste.png"
        text={t("timeline.2022.1")}
      />
      <ImageText
        alt='Ilustração com o texto "Cadê meu absorvente?"'
        href="https://www.cademeuabsorvente.nossas.org.br/"
        src="/static/media/timeline/PT/logo-cade-meu-absorvente.png"
        text={t("timeline.2022.2")}
      />
      <ImageText
        alt='Imagem com o texto "Creators pelo clima"'
        href="https://creatorspeloclima.nossas.org/"
        src="/static/media/timeline/PT/logo-creators-pelo-clima.png"
        text={t("timeline.2022.3")}
      />
    </Timeline>
    <Timeline title="2022" titleVisibility="hidden">
      <ImageText
        alt='Imagem com o texto "cada voto conta"'
        href="https://www.cadavotoconta.org.br/"
        src="/static/media/timeline/PT/logo-cada-voto-conta.png"
        text={t("timeline.2022.4")}
      />
      <ImageText
        alt='Imagem com o texto "Geração que move"'
        href="https://geracaoquemove.nossas.org/"
        src="/static/media/timeline/PT/logo-geracao-que-move.png"
        text={t("timeline.2022.5")}
      />
    </Timeline>
  </SimpleGrid>,
];

const renderMobile = (t: any) => [
  <Timeline title="2011">
    <ImageText
      alt='Imagem com o texto "meu rio"'
      href="https://www.meurio.org.br/"
      src="/static/media/timeline/PT/meurio.png"
      text={t("timeline.2011.1")}
    />
  </Timeline>,
  <Timeline title="2013">
    <ImageText
      alt='Imagem com o texto "vitória da friedenreich, escola não se destrói!"'
      href="https://www.escolanaosedestroi.meurio.org.br/"
      src="/static/media/timeline/PT/vitoria.png"
      text={t("timeline.2013.1")}
    />
  </Timeline>,
  <Timeline title="2014">
    <ImageText
      alt='Imagem com o texto "minha sampa"'
      href="https://www.minhasampa.org.br/"
      src="/static/media/timeline/PT/minhasampa.png"
      text={t("timeline.2014.1")}
    />
    <ImageText
      alt='Imagem com o texto "amarildos e priscilas"'
      href="https://www.amarildosepriscilas.meurio.org.br/"
      src="/static/media/timeline/PT/amarildosepriscilas.png"
      text={t("timeline.2014.2")}
    />
  </Timeline>,
  <Timeline title="2014">
    <ImageText
      alt='Imagem com o texto "paulista aberta"'
      href="https://www.paulistaaberta.minhasampa.org.br/"
      src="/static/media/timeline/PT/paulistaaberta.png"
      text={t("timeline.2014.3")}
    />
    <ImageText
      alt='Imagem com o texto "RNC"'
      href="https://www.redenossascidades.org/"
      src="/static/media/timeline/PT/rnc.png"
      text={t("timeline.2014.4")}
    />
  </Timeline>,
  <Timeline title="2016">
    <ImageText
      alt='Imagem com o texto "defezap"'
      href="http://www.saibamais.defezap.org.br/"
      src="/static/media/timeline/PT/defezap.png"
      text={t("timeline.2016.1")}
    />
    <ImageText
      alt='Imagem com o texto "mapa do acolhimento"'
      href="https://www.mapadoacolhimento.org/"
      src="/static/media/timeline/PT/mapadoacolhimento.png"
      text={t("timeline.2016.2")}
    />
    <ImageText
      alt='Imagem com o texto "não vai ter mesada"'
      href="https://www.naovaitermesada.meurio.org.br/"
      src="/static/media/timeline/PT/naovaitermesada.png"
      text={t("timeline.2016.3")}
    />
  </Timeline>,
  <Timeline title="2017">
    <ImageText
      alt='Imagem com o texto "beta"'
      href="https://www.beta.org.br/"
      src="/static/media/timeline/PT/beta.png"
      text={t("timeline.2017.1")}
    />
  </Timeline>,
  <Timeline title="2018">
    <ImageText
      alt='Imagem com o texto "bonde"'
      href="https://www.bonde.org/"
      src="/static/media/timeline/PT/bonde.png"
      text={t("timeline.2018.1")}
    />
    <ImageText
      alt='Imagem com o texto "ninguém fica pra trás"'
      href="https://www.ninguemficapratras.org/"
      src={t("timeline.2018.2.src")}
      text={t("timeline.2018.2.text")}
    />
  </Timeline>,
  <Timeline title="2018">
    <ImageText
      alt='Imagem com o texto "pelo fim dos canudos de plástico no rio de janeiro"'
      href="https://www.riosemcanudo.meurio.org.br/"
      src="/static/media/timeline/PT/canudos.png"
      text={t("timeline.2018.3")}
    />
    <ImageText
      alt='Imagem com o texto "somos cria"'
      href="https://www.somoscria.meurio.org.br/"
      src="/static/media/timeline/PT/somoscria.png"
      text={t("timeline.2018.4")}
    />
  </Timeline>,
  <Timeline title="2019">
    <ImageText
      alt='Imagem com o texto "programa de mobilizadores"'
      href="https://www.mobilizadores.nossas.org/"
      src="/static/media/timeline/PT/programamobilizadores.png"
      text={t("timeline.2019.1")}
    />
    <ImageText
      alt='Imagem com o texto "violência não tem hora"'
      href="https://www.violencianaotemhora.minhasampa.org.br/"
      src="/static/media/timeline/PT/violencianaotemhora.png"
      text={t("timeline.2019.2")}
    />
  </Timeline>,
  <Timeline title="2019">
    <ImageText
      alt='Imagem com o texto "pelo fim dos canudos de plástico em são paulo"'
      href="https://www.spsemcanudo.minhasampa.org.br/"
      src="/static/media/timeline/PT/canudos-sp.png"
      text={t("timeline.2019.3")}
    />
    <ImageText
      alt='Imagem com o texto "parem o cavalo de troia!"'
      src="/static/media/timeline/PT/pec29.png"
      text={t("timeline.2019.4")}
    />
  </Timeline>,
  <Timeline title="2020">
    <ImageText
      alt='Imagem com o texto "renda básica que queremos"'
      href="https://www.rendabasica.org.br/"
      src="/static/media/timeline/PT/rendabasica.png"
      text={t("timeline.2020.1")}
    />
    <ImageText
      alt='Imagem com o texto "covid 19 nas favelas"'
      href="https://www.covid19nasfavelas.meurio.org.br/"
      src="/static/media/timeline/PT/covidnasfavelas.png"
      text={t("timeline.2020.2")}
    />
    <ImageText
      alt='Imagem com o texto "sem aula sem ENEM"'
      href="https://www.semaulasemenem.nossas.org.br/"
      src="/static/media/timeline/PT/semaulassemenem.png"
      text={t("timeline.2020.3")}
    />
  </Timeline>,
  <Timeline title="2020">
    <ImageText
      alt='Imagem com o texto "4g para estudar"'
      href="https://www.4gparaestudar.nossas.org.br/"
      src="/static/media/timeline/PT/4g-para-estudar.png"
      text={t("timeline.2020.4")}
    />
    <ImageText
      alt='Imagem com o texto "Amazônia contra a Covid-19"'
      href="https://www.amazoniacontracovid.org.br/"
      src="/static/media/timeline/PT/amazoniacontracovid.png"
      text={t("timeline.2020.5")}
    />
    <ImageText
      alt='Imagem com o texto "Periferia que faz"'
      href="https://www.editalperiferiaquefaz.nossas.org/"
      src="/static/media/timeline/PT/periferia-que-faz.png"
      text={t("timeline.2020.6")}
    />
  </Timeline>,
  <Timeline title="2021">
    <ImageText
      alt='Imagem com o texto "Minha Manaus"'
      href="https://www.minhamanaus.org.br/"
      src="/static/media/timeline/PT/minha-manaus.png"
      text={t("timeline.2021.1")}
    />
    <ImageText
      alt='Ilustração com o texto "Surpervia, aumento não"'
      href="https://www.superviaaumentonao.meurio.org.br/"
      src="/static/media/timeline/PT/supervia.png"
      text={t("timeline.2021.2")}
    />
    <ImageText
      alt='Imagem com o texto "MUVUCA programa de ativismo climático"'
      href="https://www.muvuca.nossas.org/"
      src="/static/media/timeline/PT/muvuca.png"
      text={t("timeline.2021.3")}
    />
  </Timeline>,
  <Timeline title="2021">
    <ImageText
      alt='Ilustração com o texto "Meu corpo Meu DIU"'
      href="https://www.meucorpomeudiu.nossas.org/"
      src="/static/media/timeline/PT/meu-corpo-meu-diu.png"
      text={t("timeline.2021.4")}
    />
    <ImageText
      alt='Ilustração com o texto "Contra-ataque: apoie o jacaré basquete"'
      href="https://www.jacarebasquete.meurio.org.br/"
      src="/static/media/timeline/PT/logo-jacare-basquete.png"
      text={t("timeline.2021.11")}
    />
    <ImageText
      alt='Imagem com o texto "Meia-entrada SIM! #VETAPL300"'
      href="https://www.meiaentradasim.minhasampa.org.br/"
      src="/static/media/timeline/PT/meia-entrada.png"
      text={t("timeline.2021.5")}
    />
  </Timeline>,
  <Timeline title="2021">
    <ImageText
      alt='Imagem com o texto "EmLuta"'
      href="https://www.emluta.org.br/"
      src="/static/media/timeline/PT/em-luta.png"
      text={t("timeline.2021.6")}
    />
    <ImageText
      alt='Imagem da Cop 26 com o texto "keep the amazon alive"'
      src="/static/media/timeline/PT/cop26.png"
      text={t("timeline.2021.7")}
    />
    <ImageText
      alt='Imagem com o texto "Amazônia contra a Covid 19"'
      href="https://www.acolhimentonaoseterceiriza.minhasampa.org.br/"
      src="/static/media/timeline/PT/amazoniacontracovid.png"
      text={t("timeline.2021.8")}
    />
  </Timeline>,
  <Timeline title="2021">
    <ImageText
      alt='Ilustração com o texto "1º fórum do mapa do acolhimento"'
      src="/static/media/timeline/PT/forum.png"
      text={t("timeline.2021.9")}
    />
    <ImageText
      alt='Imagem com o texto "SOS floresta do camboatá"'
      href="https://www.sosflorestadocamboata.meurio.org.br/"
      src="/static/media/timeline/PT/sos-floresta-camboata.png"
      text={t("timeline.2021.10")}
    />
  </Timeline>,
  <Timeline title="2022">
    <ImageText
      alt='Imagem com o texto "Paraisópolis Resiste"'
      href="https://paraisopolis.minhasampa.org.br/"
      src="/static/media/timeline/PT/logo-paraisopolis-resiste.png"
      text={t("timeline.2022.1")}
    />
    <ImageText
      alt='Ilustração com o texto "Cadê meu absorvente?"'
      href="https://www.cademeuabsorvente.nossas.org.br/"
      src="/static/media/timeline/PT/logo-cade-meu-absorvente.png"
      text={t("timeline.2022.2")}
    />
    <ImageText
      alt='Imagem com o texto "Creators pelo clima"'
      href="https://creatorspeloclima.nossas.org/"
      src="/static/media/timeline/PT/logo-creators-pelo-clima.png"
      text={t("timeline.2022.3")}
    />
  </Timeline>,
  <Timeline title="2022">
    <ImageText
      alt='Imagem com o texto "cada voto conta"'
      href="https://www.cadavotoconta.org.br/"
      src="/static/media/timeline/PT/logo-cada-voto-conta.png"
      text={t("timeline.2022.4")}
    />
    <ImageText
      alt='Imagem com o texto "Geração que move"'
      href="https://geracaoquemove.nossas.org/"
      src="/static/media/timeline/PT/logo-geracao-que-move.png"
      text={t("timeline.2022.5")}
    />
  </Timeline>,
];

const TimelineView = () => {
  const { t } = useTranslation("about");
  const { isMobile, isSSR } = useWindowSize();

  if (isSSR) {
    return <p>Loading...</p>;
  }

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
      {!isSSR ? (
        <Carousel items={isMobile ? renderMobile(t) : renderDesktop(t)} />
      ) : (
        <p>Loading...</p>
      )}
    </Stack>
  );
};

export default TimelineView;
