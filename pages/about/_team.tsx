import React from "react";
import { useTranslation } from "next-i18next";
import type { Employee } from "../../components/Employee";
import { EmployeeTeam } from "../../components/Employee";

export const BoardMembers = () => {
  const { t } = useTranslation("team");

  return (
    <EmployeeTeam
      title={t("content:blocks.about.team.board")}
      members={[
        {
          avatar: "/static/media/team/ana-carolina.png",
          name: "Ana Carolina Evangelista",
          role: t("board.anacarolina.role"),
          about: t("board.anacarolina.about"),
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/ana-paula.png",
          name: "Ana Paula Lisboa",
          role: t("board.anapaula.role"),
          about: t("board.anapaula.about"),
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/roberto-andres.png",
          name: "Roberto Andres",
          role: t("board.robertoandres.role"),
          about: t("board.robertoandres.about"),
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/branca-vianna.png",
          name: "Branca Vianna",
          role: t("board.brancavianna.role"),
          about: t("board.brancavianna.about"),
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/felipe-estefan.png",
          name: "Felipe Estefan",
          role: t("board.felipeestefan.role"),
          about: t("board.felipeestefan.about"),
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/ines-laffer.png",
          name: "Inês Laffer",
          role: t("board.ineslaffer.role"),
          about: t("board.ineslaffer.about"),
          team: "Conselho",
        },
      ]}
    />
  );
};

// export default TeamMembers;

export const LeadersMembers = () => {
  const { t } = useTranslation("team");

  return (
    <EmployeeTeam
      title={t("content:blocks.about.team.leaders")}
      members={[
        {
          avatar: "/static/media/team/alessandra-orofino.png",
          name: "Alessandra Orofino",
          role: t("leaders.alessandraorofino.role"),
          about: t("leaders.alessandraorofino.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/enrica-duncan.png",
          name: "Enrica Duncan",
          role: t("leaders.enricaduncan.role"),
          about: t("leaders.enricaduncan.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/virginia.png",
          name: "Virginia Rigot-muller",
          role: t("leaders.virginiarigotmuller.role"),
          about: t("leaders.virginiarigotmuller.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/daniela-orofino.png",
          name: "Daniela Orofino",
          role: t("leaders.danielaorofino.role"),
          about: t("leaders.danielaorofino.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/manoela-miklos.png",
          name: "Manoela Miklos",
          role: t("leaders.manoelamiklos.role"),
          about: t("leaders.manoelamiklos.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/cledisson-junior.png",
          name: "Cledisson Junior",
          role: t("leaders.cledissonjunior.role"),
          about: t("leaders.cledissonjunior.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/debora-pio.png",
          name: "Debora Pio",
          role: t("leaders.deborapio.role"),
          about: t("leaders.deborapio.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/lucas-pirola.png",
          name: "Lucas Pirola",
          role: t("leaders.lucaspirola.role"),
          about: t("leaders.lucaspirola.about"),
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/talita-novacoski.png",
          name: "Talita Novacoski",
          role: t("leaders.talitanovacoski.role"),
          about: t("leaders.talitanovacoski.about"),
          team: "Liderança",
        },
      ]}
    />
  );
};

export const team: Employee[] = [
  {
    avatar: "/static/media/team/adriele-alvarenga.png",
    name: "Adriele Alvarenga",
    role: "Programadora",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/alexandra-maier.png",
    name: "Alexandra Maier",
    role: "Coordenadora de Operações",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/aline-taboada.png",
    name: "Aline Taboada",
    role: "Coordenadora Financeira",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/ana-beatriz.png",
    name: "Ana Beatriz El-Kadri",
    role: "Coordenadora de Voluntárias do Mapa do Acolhimento",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/ana-claudia.png",
    name: "Ana Claudia Medeiros",
    role: "Designer e Mobilizadora",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/anderson-bento.png",
    name: "Anderson Bento",
    role: "Coordenador de Dados",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/bela-avelar.png",
    name: "Bela Avelar",
    role: "Coordenadora de Design e Mobilização",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/flavia-rocha.png",
    name: "Flavia Rocha",
    role: "Analista de Dados",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/gabriela-silva.png",
    name: "Gabriela Silva",
    role: "Coordenadora de Atendimento do Mapa do Acolhimento",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/gloria-teodoro.png",
    name: "Glória Teodoro",
    role: "Programadora",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/igor-santos.png",
    name: "Igor Santos",
    role: "Programador",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/isabel-pessanha.png",
    name: "Isabel Pessanha",
    role: "Assistente pessoal de Alessandra Orofino",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/izamir-barbosa.png",
    name: "Izamir Barbosa",
    role: "Mobilizador",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/karina-penha.png",
    name: "Karina Penha",
    role: "Mobilizadora",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/larissa.png",
    name: "Larissa Schmillevitch",
    role: "Gestora do Mapa do Acolhimento",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/leca.png",
    name: "Leca Cunha",
    role: "Coordenadora de Sustentabilidade",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/leticia-castro.png",
    name: "Leticia Castro",
    role: "Mobilizadora",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/livia-merlin.png",
    name: "Livia Merlin",
    role: "Coordenadora de Mobilização",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/luciana-travassos.png",
    name: "Luciana Travassos",
    role: "Mobilizadora",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/maira-baracho.png",
    name: "Maira Baracho",
    role: "Gestora de Treinamento",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/sany-cristina.png",
    name: "Sany Cristina",
    role: "Coordenadora de Comunicação",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/tayna-araujo.png",
    name: "Tayná Araújo",
    role: "Analista de Sustentabilidade",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/thalita-queiroz.png",
    name: "Thalita Queiroz dos Santos",
    role: "Articuladora do Mapa do Acolhimento",
    team: "Equipe",
  },
  {
    avatar: "/static/media/team/gomes-barbosa.png",
    name: "Gomes Barbosa",
    role: "Articuladora do Mapa do Acolhimento",
    team: "Equipe",
  },
];
