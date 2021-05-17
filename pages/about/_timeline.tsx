import React from "react";
import { Heading, Stack, SimpleGrid } from "@chakra-ui/react";
import { Carousel } from "../../components/Slider";
import { Timeline, ImageText } from "../../components/Timeline";

const renderDesktop = [
  <SimpleGrid columns={4}>
    <Timeline title="2011">
      <ImageText
        src="/static/media/timeline/meurio.png"
        text="O NOSSAS nasce com o Meu Rio, uma organização multi-causas que aproxima os cariocas da política local."
      />
    </Timeline>
    <Timeline title="2013">
      <ImageText
        src="/static/media/timeline/vitoria.png"
        text="O Meu Rio salva da demolição uma das melhores escolas públicas da cidade. A campanha envolveu várias táticas de mobilização popular e foi a primeira expressiva vitória da organização."
      />
    </Timeline>
    <Timeline title="2014">
      <ImageText
        src="/static/media/timeline/minhasampa.png"
        text="O Meu Rio faz sua primeira experiência de replicação, exportando metodologia e tecnologia para São Paulo. Nasce a Minha Sampa."
      />
      <ImageText
        src="/static/media/timeline/amarildosepriscilas.png"
        text="O Meu Rio lidera campanha pela criação da primeira Delegacia de Descoberta de Paradeiros. Após sua implementação, 80% dos casos de desaparecimento no Rio passam a ser solucionados."
      />
    </Timeline>
    <Timeline title="2014" titleVisibility="hidden">
      <ImageText
        src="/static/media/timeline/paulistaaberta.png"
        text="A principal avenida de São Paulo passa a ser inteiramente para pedestres aos domingos graças a uma campanha da Minha Sampa e parceiros, que fez história na cidade."
      />
      <ImageText
        src="/static/media/timeline/rnc.png"
        text="O programa de fundadores da Rede Nossas Cidades é lançado, com o objetivo de treinar pessoas de todo o Brasil para fundar suas redes de mobilização local."
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2016">
      <ImageText
        src="/static/media/timeline/defezap.png"
        text="O Defezap, primeiro sistema de denúncia colaborativa e investigação contra a violência de estado no Rio de Janeiro, é criado. A ferramenta é doada à Comissão de Direitos Humanos da ALERJ."
      />
      <ImageText
        src="/static/media/timeline/mapadoacolhimento.png"
        text="Nasce o Mapa do Acolhimento, uma rede de solidariedade que permite a conexão entre mulheres vítimas de violência e psicólogas ou advogadas voluntárias."
      />
      <ImageText
        src="/static/media/timeline/naovaitermesada.png"
        text="O Meu Rio barra um projeto de lei que garantiria mesada vitalícia a vereadores da cidade. A campanha gerou mais de 10 mil pressões em menos de 24 horas."
      />
    </Timeline>
    <Timeline title="2017">
      <ImageText
        src="/static/media/timeline/beta.png"
        text="Beta, a primeira chatbot feminista do Facebook, é desenvolvida para dar visibilidade à luta feminista no Brasil e compartilhar oportunidades de agir pelos direitos das mulheres"
      />
    </Timeline>
    <Timeline title="2018">
      <ImageText
        src="/static/media/timeline/bonde.png"
        text="Lançamento do BONDE, a plataforma para ativistas que querem criar sites de impacto para mobilizar pessoas e movimentar suas causas"
      />
      <ImageText
        src="/static/media/timeline/nfpt.png"
        text="Logo após as eleições, a campanha Ninguém Fica Pra Trás arrecada R$400 mil para organizações que atendem populações vulneráveis ao discurso de ódio"
      />
    </Timeline>
    <Timeline title="2018" titleVisibility="hidden">
      <ImageText
        src="/static/media/timeline/canudos.png"
        text="O Rio de Janeiro é a primeira capital do país a banir a distribuição de canudos de plástico em estabelecimentos comerciais, após uma mobilização histórica"
      />
      <ImageText
        src="/static/media/timeline/somoscria.png"
        text="Lançamento da primeira edição do Somos Cria, campanha de apoio a pré-vestibulares comunitários que ajudou na entrada de alunos periféricos nas universidades"
      />
    </Timeline>
  </SimpleGrid>,
  <SimpleGrid columns={4}>
    <Timeline title="2019">
      <ImageText
        src="/static/media/timeline/programamobilizadores.png"
        text="O Programa de Mobilizadores passa a oferecer treinamento em metodologias e ferramentas de mobilização para pessoas de várias cidades do Brasil"
      />
      <ImageText
        src="/static/media/timeline/violencianaotemhora.png"
        text="Depois de muita pressão da Minha Sampa, dez Delegacias de Atendimento a Mulheres Vítimas de Violência passam a funcionar 24h em todo Estado de São Paulo"
      />
      <ImageText
        src="/static/media/timeline/canudos-sp.png"
        text="No rastro da mobilização carioca, a Minha Sampa lidera campanha de pressão que leva a maior cidade do país a proibir a distribuição de canudos de plástico"
      />
    </Timeline>
    <Timeline title="2019" titleVisibility="hidden">
      <ImageText
        src="/static/media/timeline/pec29.png"
        text="Graças à mobilização realizada com a Beta, a PEC 29, que proibiria o aborto até em casos onde é legal, é arquivada no Senado. Foram dispararados mais de 50 mil e-mails de pressão"
      />
      <ImageText
        src="/static/media/timeline/nossas.png"
        text="A marca NOSSAS nasce para o mundo, e representa a superação do modelo de atuação por cidades ou projetos, em prol de amplas mobilizações nacionais"
      />
    </Timeline>
    <Timeline title="2020">
      <ImageText
        src="/static/media/timeline/rendabasica.png"
        text="Após a aprovação do Auxílio Emergencial em 2020, a meta agora é garantir uma renda básica permanente para toda população mais vulnerável"
      />
      <ImageText
        src="/static/media/timeline/covidnasfavelas.png"
        text="A campanha distribui 400 mil reais a dez coletivos periféricos do Rio de Janeiro, beneficiando a mais de 3 mil famílias duramente atingidas pela crise sanitária"
      />
      <ImageText
        src="/static/media/timeline/semaulassemenem.png"
        text="Através da mobilização Sem Aula Sem Enem, estudantes lançam mais de 4 mil campanhas locais em seus estados e conseguem o adiamento do ENEM para 2021"
      />
    </Timeline>
    <Timeline title="2020" titleVisibility="hidden">
      <ImageText
        src="/static/media/timeline/4gpraestudantes.png"
        text="33 pré-vestibulares comunitários recebem apoio para inclusão digital durante a pandemia. A campanha beneficiou mais de 4,5 mil alunos em 10 estados do país"
      />
      <ImageText
        src="/static/media/timeline/amazoniacontracovid.png"
        text="A primeira campanha de arrecadação a bater o milhão de reais permitiu a distribuição de cestas básicas e kits de higiene para comunidades indígenas da Amazônia por seis meses"
      />
    </Timeline>
  </SimpleGrid>,
];

const renderMobile = [
  <Timeline title="2011">
    <ImageText
      src="/static/media/timeline/meurio.png"
      text="O NOSSAS nasce com o Meu Rio, uma organização multi-causas que aproxima os cariocas da política local."
    />
  </Timeline>,
  <Timeline title="2013">
    <ImageText
      src="/static/media/timeline/vitoria.png"
      text="O Meu Rio salva da demolição uma das melhores escolas públicas da cidade. A campanha envolveu várias táticas de mobilização popular e foi a primeira expressiva vitória da organização."
    />
  </Timeline>,
  <Timeline title="2014">
    <ImageText
      src="/static/media/timeline/minhasampa.png"
      text="O Meu Rio faz sua primeira experiência de replicação, exportando metodologia e tecnologia para São Paulo. Nasce a Minha Sampa."
    />
    <ImageText
      src="/static/media/timeline/amarildosepriscilas.png"
      text="O Meu Rio lidera campanha pela criação da primeira Delegacia de Descoberta de Paradeiros. Após sua implementação, 80% dos casos de desaparecimento no Rio passam a ser solucionados."
    />
  </Timeline>,
  <Timeline title="2014" titleVisibility="hidden">
    <ImageText
      src="/static/media/timeline/paulistaaberta.png"
      text="A principal avenida de São Paulo passa a ser inteiramente para pedestres aos domingos graças a uma campanha da Minha Sampa e parceiros, que fez história na cidade."
    />
    <ImageText
      src="/static/media/timeline/rnc.png"
      text="O programa de fundadores da Rede Nossas Cidades é lançado, com o objetivo de treinar pessoas de todo o Brasil para fundar suas redes de mobilização local."
    />
  </Timeline>,
  <Timeline title="2016">
    <ImageText
      src="/static/media/timeline/defezap.png"
      text="O Defezap, primeiro sistema de denúncia colaborativa e investigação contra a violência de estado no Rio de Janeiro, é criado. A ferramenta é doada à Comissão de Direitos Humanos da ALERJ."
    />
    <ImageText
      src="/static/media/timeline/mapadoacolhimento.png"
      text="Nasce o Mapa do Acolhimento, uma rede de solidariedade que permite a conexão entre mulheres vítimas de violência e psicólogas ou advogadas voluntárias."
    />
    <ImageText
      src="/static/media/timeline/naovaitermesada.png"
      text="O Meu Rio barra um projeto de lei que garantiria mesada vitalícia a vereadores da cidade. A campanha gerou mais de 10 mil pressões em menos de 24 horas."
    />
  </Timeline>,
  <Timeline title="2017">
    <ImageText
      src="/static/media/timeline/beta.png"
      text="Beta, a primeira chatbot feminista do Facebook, é desenvolvida para dar visibilidade à luta feminista no Brasil e compartilhar oportunidades de agir pelos direitos das mulheres"
    />
  </Timeline>,
  <Timeline title="2018">
    <ImageText
      src="/static/media/timeline/bonde.png"
      text="Lançamento do BONDE, a plataforma para ativistas que querem criar sites de impacto para mobilizar pessoas e movimentar suas causas"
    />
    <ImageText
      src="/static/media/timeline/nfpt.png"
      text="Logo após as eleições, a campanha Ninguém Fica Pra Trás arrecada R$400 mil para organizações que atendem populações vulneráveis ao discurso de ódio"
    />
  </Timeline>,
  <Timeline title="2018" titleVisibility="hidden">
    <ImageText
      src="/static/media/timeline/canudos.png"
      text="O Rio de Janeiro é a primeira capital do país a banir a distribuição de canudos de plástico em estabelecimentos comerciais, após uma mobilização histórica"
    />
    <ImageText
      src="/static/media/timeline/somoscria.png"
      text="Lançamento da primeira edição do Somos Cria, campanha de apoio a pré-vestibulares comunitários que ajudou na entrada de alunos periféricos nas universidades"
    />
  </Timeline>,
  <Timeline title="2019">
    <ImageText
      src="/static/media/timeline/programamobilizadores.png"
      text="O Programa de Mobilizadores passa a oferecer treinamento em metodologias e ferramentas de mobilização para pessoas de várias cidades do Brasil"
    />
    <ImageText
      src="/static/media/timeline/violencianaotemhora.png"
      text="Depois de muita pressão da Minha Sampa, dez Delegacias de Atendimento a Mulheres Vítimas de Violência passam a funcionar 24h em todo Estado de São Paulo"
    />
    <ImageText
      src="/static/media/timeline/canudos-sp.png"
      text="No rastro da mobilização carioca, a Minha Sampa lidera campanha de pressão que leva a maior cidade do país a proibir a distribuição de canudos de plástico"
    />
  </Timeline>,
  <Timeline title="2019" titleVisibility="hidden">
    <ImageText
      src="/static/media/timeline/pec29.png"
      text="Graças à mobilização realizada com a Beta, a PEC 29, que proibiria o aborto até em casos onde é legal, é arquivada no Senado. Foram dispararados mais de 50 mil e-mails de pressão"
    />
    <ImageText
      src="/static/media/timeline/nossas.png"
      text="A marca NOSSAS nasce para o mundo, e representa a superação do modelo de atuação por cidades ou projetos, em prol de amplas mobilizações nacionais"
    />
  </Timeline>,
  <Timeline title="2020">
    <ImageText
      src="/static/media/timeline/rendabasica.png"
      text="Após a aprovação do Auxílio Emergencial em 2020, a meta agora é garantir uma renda básica permanente para toda população mais vulnerável"
    />
    <ImageText
      src="/static/media/timeline/covidnasfavelas.png"
      text="A campanha distribui 400 mil reais a dez coletivos periféricos do Rio de Janeiro, beneficiando a mais de 3 mil famílias duramente atingidas pela crise sanitária"
    />
    <ImageText
      src="/static/media/timeline/semaulassemenem.png"
      text="Através da mobilização Sem Aula Sem Enem, estudantes lançam mais de 4 mil campanhas locais em seus estados e conseguem o adiamento do ENEM para 2021"
    />
  </Timeline>,
  <Timeline title="2020" titleVisibility="hidden">
    <ImageText
      src="/static/media/timeline/4gpraestudantes.png"
      text="33 pré-vestibulares comunitários recebem apoio para inclusão digital durante a pandemia. A campanha beneficiou mais de 4,5 mil alunos em 10 estados do país"
    />
    <ImageText
      src="/static/media/timeline/amazoniacontracovid.png"
      text="A primeira campanha de arrecadação a bater o milhão de reais permitiu a distribuição de cestas básicas e kits de higiene para comunidades indígenas da Amazônia por seis meses"
    />
  </Timeline>,
];

const TimelineView = ({ isMobile }: any) => (
  <Stack direction="column">
    <Heading as="h2" variant="tag" padding={["0 30px", null, null, null, "0"]}>
      {/* {t("content:blocks.about.timeline.title")} */}
      Linha do tempo
    </Heading>
    <Carousel items={isMobile ? renderMobile : renderDesktop} />
  </Stack>
);

export default TimelineView;
