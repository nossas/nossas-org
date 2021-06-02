import React from "react";
import { NextPage } from "next";
import { I18nInitialProps, withTranslation } from "../../i18n";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading } from "@chakra-ui/react";

import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import Header from "../../content/Header";
import { SliderPanel } from "../../components/Slider";

interface PageProps extends WithUserAgentProps {
  t: any;
}

const Mobilizations: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="470px"
      bgImage="/static/media/covers/mobilizations.png"
      title="Participe de uma de nossas campanhas!"
      titleColor="white"
      titleAlign="center"
    />
    <Section>
      <Header
        title={
          <>
            Vem com <br />
            <b>a gente!</b>
          </>
        }
        description={`
          Ajude nossas campanhas a fazer barulho e a conquistar vitórias que
          consolidam políticas públicas e protegem nossos direitos. Chega mais, e
          vem fazer parte da mudança!
        `}
      />
    </Section>
    <Section direction={["column"]} spacing="30px">
      <Heading as="h2" color="pink.main">
        Campanhas que <b>estão rolando</b>
      </Heading>
      <SliderPanel
        isMobile={ua.isMobile}
        infiniteLoop
        items={[
          {
            src: "/static/media/s3/liberaotablet.jpg",
            alt: "Libera o tablet",
            title: "Libera o tablet",
            description:
              "O governo de São Paulo adquiriu tablets para alunos das escolas públicas no ano passado, mas até agora não liberou os equipamentos para auxiliar no ensino remoto dos jovens!",
            href: "https://www.liberaotablet.minhasampa.org.br/",
            link: "Pressione para liberar o tablet",
          },
          {
            src: "/static/media/s3/licenciamento-ambiental.png",
            href: "https://www.licenciamentoambientalfica.org/",
            alt: "Licenciamento ambiental fica",
            title: "Licenciamento ambiental fica",
            description:
              "A qualquer momento o Senado pode votar o Projeto de Lei que flexibiliza o licenciamento ambiental no país, colocando em risco nossos biomas brasileiros e populações tradicionais.",
            link: "Pressione para barrar o projeto",
          },
          {
            src: "/static/media/s3/auxilioemergencial.png",
            alt: "Auxílio até o fim da pandemia",
            title: "Auxílio até o fim da pandemia",
            description:
              "O fim do auxílio emergencial em 2021 pode deixar milhares de pessoas na miséria. A distribuição de recursos precisa continuar enquanto durar a crise!",
            href: "https://www.auxilioateofimdapandemia.org/",
            link: "Participe da campanha",
          },
          {
            alt: "Tem gente com fome",
            src: "/static/media/s3/temgentecomfome.png",
            title: "Tem gente com fome",
            description:
              "Uma mobilização nacional está arrecadando fundos para combater a fome e a miséria na pandemia. É preciso comprar comida, a fome não pode esperar!",
            link: "Participe da campanha",
            href: "https://www.temgentecomfome.com.br/",
          },
        ]}
      />
    </Section>
    <Section direction={["column"]} spacing="30px" bgColor="gray.light">
      <Heading as="h2" color="blue.main">
        Nossas <b>vitórias</b>
      </Heading>
      <SliderPanel
        infiniteLoop
        isMobile={ua.isMobile}
        items={[
          {
            src: "/static/media/s3/camarotedavacina.jpg",
            alt: "Camarote da vacina não",
            title: "Camarote da vacina não",
            description:
              "Empresários fizeram aprovar na Câmara um projeto de lei que permitia que eles comprassem vacinas para aplicar em seus funcionários e familiares, furando a fila de prioridades do SUS. Com uma campanha que teve mais de 100 mil pressões, conseguimos barrar o projeto no Senado.",
            href: "https://www.camarotedavacinanao.nossas.org.br/",
          },
          {
            src: "/static/media/s3/restingaemangue.png",
            alt: "Restinga e mangue ficam",
            title: "Restinga e mangue ficam",
            description:
              "Uma resolução do CONAMA poderia deixar ainda mais vulneráveis nossos principais biomas: as restingas e os mangues. A mobilização reuniu mais de 180 mil assinaturas e conseguiu frear a boiada, garantindo a preservação do litoral brasileiro e seus ecossistemas.",
            href: "https://www.restingaemangueficam.org.br/",
          },
          {
            src: "/static/media/s3/rededeprotecao.jpg",
            alt: "Auxílio para saúde",
            title: "Auxílio para saúde",
            description:
              "Profissionais da área da saúde, como técnicas de enfermagem, auxiliares de limpeza e serviços gerais ficaram muito expostas ao vírus durante a pandemia. Graças à pressão, foi aprovada uma lei que garante indenização aos familiares dos profissionais que faleceram por conta da Covid19.",
            href: "https://www.auxilioparasaude.nossas.org.br/",
          },
          {
            src: "/static/media/s3/semaulasemenem.jpg",
            alt: "Sem aula sem enem",
            title: "Sem aula sem enem",
            description:
              "Realizar a prova do ENEM normalmente no meio da pandemia seria uma catástrofe, principalmente para os estudantes mais pobres que ficaram sem aula. Mais de 4 mil alunos fizeram campanhas regionais pressionando os senadores e, com mais de 150 mil pressões no total, a prova foi adiada.",
            href: "https://www.semaulasemenem.nossas.org.br/",
          },
          {
            src: "/static/media/s3/renda-basica.jpg",
            alt: "Renda básica",
            title: "Renda básica",
            description:
              "Junto com outras 200 organizações, conseguimos aprovar o auxílio emergencial de R$600 para 68 milhões de brasileiros em 2020. Em 2021, a luta  continua para a criação de um projeto de lei que garanta uma renda básica permanente para toda a população.",
            href: "https://www.rendabasica.org.br/",
          },
          {
            src: "/static/media/s3/paulista.jpg",
            alt: "Paulista aberta",
            title: "Paulista aberta",
            description:
              "Depois de mais de dois anos de intensa mobilização com organizações e coletivos da sociedade civil paulista, o então prefeito Fernando Haddad publicou o decreto que criou a Paulista aberta e o projeto Ruas Abertas, e mudou a rotina de lazer de São Paulo.",
            href: "https://www.paulistaaberta.minhasampa.org.br/",
          },
          {
            src: "/static/media/s3/escola.jpg",
            alt: "Escola não se destrói",
            title: "Escola não se destrói",
            description:
              "A Escola Friedenreich ocupa até hoje um dos primeiros lugares no IDEB do Rio de Janeiro, mas em 2014 ela corria o risco de ser derrubada para dar lugar a um estacionamento para a Copa do Mundo. Depois de uma campanha que teve várias etapas, a escola continuou de pé!",
            href: "https://www.escolanaosedestroi.meurio.org.br/",
          },
          {
            src: "/static/media/s3/rio-sem-canudo.jpg",
            alt: "Rio sem canudo",
            title: "Rio sem canudo",
            description:
              "O Rio de Janeiro foi a primeira cidade a proibir a distribuição de canudos de plástico em bares, restaurantes e estabelecimentos comerciais. Depois dela, várias outras cidades no país seguiram o mesmo exemplo. Agora, a luta segue pelo fim de todos os plásticos de uso único!",
            href: "https://www.riosemcanudo.meurio.org.br/",
          },
        ]}
      />
    </Section>
  </Body>
);

Mobilizations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Mobilizations)
);
