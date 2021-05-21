import React from "react";
import { NextPage } from "next";
import { WithUserAgentProps, withUserAgent } from "next-useragent";
import { Heading, Stack, Text, Img, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";

import { I18nInitialProps, withTranslation } from "../../i18n";
import { Body, Section } from "../../components/Page";
import Hero from "../../components/Hero";
import { Carousel } from "../../components/Slider";
import {
  Header,
  DescriptionBox,
  SubscribeForm,
  ImageTextListBox,
} from "../../content";
import {
  MegaphoneGreen,
  People,
  ThumbsUp,
  Transfer,
} from "../../components/IconsSVG/Functionalities";

interface ImageTextProps {
  src: string;
  alt?: string;
  title: string;
  description: string;
  href?: string;
  linkText?: string;
}

export const ImageText: React.FC<ImageTextProps> = ({
  alt,
  src,
  title,
  description,
  href,
  linkText,
}) => {
  return (
    <Stack
      direction={["column", "column", null, null, "row"]}
      spacing="70px"
      alignItems="center"
    >
      <Img
        objectFit="cover"
        boxSize={["357px", null, null, null, "357px", "427px"]}
        src={src}
        alt={alt}
      />
      <Stack spacing="10px" textAlign="left">
        <Link href={href} target="_blank">
          <Heading as="h3" color="blue.main" fontWeight="bold" size="md">
            {title}
          </Heading>
        </Link>
        <Text>{description}</Text>
        <Link href={href} target="_blank" variant="pink">
          {`${linkText} +`}
        </Link>
      </Stack>
    </Stack>
  );
};

interface PageProps extends WithUserAgentProps {
  t: any;
}

const ImageIcon = styled(Img)`
  transform: scale(${(props) => props.scale});
`;

ImageIcon.defaultProps = {
  scale: 0.7,
};

const Incubations: NextPage<PageProps, I18nInitialProps> = ({ ua, t }) => (
  <Body>
    {/* Cover */}
    <Hero
      maxWidth="380px"
      videoUrl="/static/media/covers/incubations.mp4"
      title="Incube seu projeto com a gente!"
      titleColor="white"
      titleAlign="center"
    />
    {/* Content */}
    <Section>
      <Header
        title={
          <>
            Incubar: <br /> <b>o que é isso?</b>
          </>
        }
        description={`
          Você pode receber capacitação e apoio para desenvolver ou acelerar seu
          projeto de mobilização ou solidariedade utilizando as metodologias
          desenvolvidas pelo NOSSAS.
        `}
      />
    </Section>
    <ImageTextListBox
      width="330px"
      title="A gente oferece"
      items={[
        {
          icon: <MegaphoneGreen />,
          description: "Formação em ferramentas e estratégias de comunicação",
        },
        {
          icon: <Transfer />,
          description:
            "Transferência de metodologias e tecnologias de mobilização",
        },
        {
          icon: <ThumbsUp />,
          description: "Criação e posicionamento de marca",
        },
        {
          icon: <People />,
          description:
            "Soluções em organização de pessoas, treinamentos e gestão de voluntários",
        },
      ]}
    />
    <Section
      id="projects"
      direction="column"
      spacing="110px"
      bgColor="gray.light"
    >
      <Header
        title={
          <>
            O que já <br />
            <b>incubamos</b>
          </>
        }
        description={`
          Conheça alguns dos projetos que já passaram por nosso processo de
          incubação e hoje são referência em suas áreas de atuação.
        `}
      />
      <Carousel
        infiniteLoop
        showStatus
        items={[
          <ImageText
            src="/static/media/s3/meacolhelgbt.png"
            title="Acolhe LGBT+"
            description="Essa rede de solidariedade para a comunidade LGBTQIA+ conecta pessoas que precisam de apoio psicológico com profissionais voluntários."
            href="https://www.acolhelgbt.org/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/paneladepressao.png"
            title={t("Panela de pressão")}
            description={t(
              "Nossa primeira tecnologia à serviço da participação popular: com o Panela de Pressão, qualquer pessoa montava sua própria campanha, em poucos cliques."
            )}
            href="http://paneladepressao.nossascidades.org/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/merepresenta.png"
            title="Me Representa"
            description={t(
              "A plataforma promove, a cada eleição, o encontro digital entre candidatos(as) e eleitores(as) que priorizem as mesmas pautas."
            )}
            href="https://merepresenta.org.br/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/incubacoes-meurecife.jpg"
            title="Meu recife"
            description={t(
              "Fundada em 2015, essa rede ativista de mobilização social luta por uma Recife mais justa, transparente e sustentável."
            )}
            href="https://www.meurecife.org.br/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/defezap.jpg"
            title="Defezap"
            description={t(
              "O Defezap é um sistema pioneiro de denúncias contra a violência de Estado no Rio de Janeiro, direto no WhatsApp, garantindo o sigilo da vítima."
            )}
            href="http://www.saibamais.defezap.org.br/"
            linkText="Saiba mais"
          />,
        ]}
      />
    </Section>
    <Section direction="column" spacing="30px">
      <Heading as="h2" color="green" size="lg">
        Projetos <b>Atuais</b>
      </Heading>

      <Carousel
        infiniteLoop
        showStatus
        isMobile={ua.isMobile}
        items={[
          <ImageText
            src="/static/media/s3/mapadoacolhimento.png"
            title="Mapa do acolhimento"
            description="O Mapa do Acolhimento é uma rede de solidariedade que conecta mulheres que sofrem ou sofreram violência de gênero a psicólogas e advogadas dispostas a ajudá-las de forma voluntária."
            href="https://www.mapadoacolhimento.org/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/incubacoes-meurio.jpg"
            title="Meu rio"
            description="A primeira experiência em incubação foi com o Meu Rio, uma rede de ação que mobiliza pessoas para participarem ativamente dos processos de decisão da cidade."
            href="https://www.meurio.org.br/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/incubacoes-msp.jpg"
            title="Minha sampa"
            description="A rede paulistana de ação Minha Sampa faz mobilizações locais que aproximam os cidadãos da política."
            href="https://www.minhasampa.org.br/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/incubacoes-rnc.jpg"
            title="Rede nossas cidades"
            description="Grupos de ativistas de quatro cidades espalhadas em três regiões do país fazem hoje parte da Rede Nossas Cidades, após processo de incubação."
            href="https://www.redenossascidades.org/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/incubacoes-bonde.jpg"
            title="Bonde"
            description="Feita por ativistas para ativistas, a ferramenta de tecnologia do NOSSAS pode ser usada por qualquer pessoa ou organização que queira colocar sua campanha na rua!"
            href="https://www.bonde.org/"
            linkText="Saiba mais"
          />,
          <ImageText
            src="/static/media/s3/incubacoes-beta.jpg"
            title="Beta"
            description="A primeira robô feminista do Facebook acompanha a tramitação de projetos de lei sobre direitos das mulheres e avisa quando tem cheiro de retrocesso no ar!"
            href="https://www.beta.org.br/"
            linkText="Saiba mais"
          />,
        ]}
      />
    </Section>

    <DescriptionBox
      color="pink"
      title={
        <>
          Incube seu <b>projeto</b>
        </>
      }
      description="Sua organização tem um projeto incrível que pode gerar impacto em sua comunidade, mas precisa de um empurrãozinho para colocá-lo no mundo? Nossa incubadora foi feita pra você! Inscreva-se ao lado, entraremos em contato em breve para que vocês nos contem um pouco mais :)"
    >
      <SubscribeForm
        color="blue"
        t={t}
        widgetId={parseInt(process.env.NEXT_PUBLIC_INCUBATIONS_WIDGET_ID)}
        title="Inscreva-se"
        submitText="Enviar"
        textSuccess="Recebemos sua inscrição! Em até duas semanas entraremos em contato para conversarmos sobre seu projeto :) Boa sorte!"
      />
    </DescriptionBox>
  </Body>
);

Incubations.getInitialProps = async () => ({
  namespacesRequired: ["common", "content"],
});

export default withUserAgent(
  withTranslation(["common", "content"])(Incubations)
);
