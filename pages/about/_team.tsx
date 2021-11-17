import React from "react";
import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

import { EmployeeTeam } from "../../components/Employee";

export const BoardMembers: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <EmployeeTeam
      title={t("teams.board.title")}
      description={t("teams.board.description")}
      members={[
        {
          avatar: "/static/media/team/ana-carolina.png",
          name: "Ana Carolina Evangelista",
          role: t("teams.board.members.anacarolina.role"),
          about: t("teams.board.members.anacarolina.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/ana-paula.png",
          name: "Ana Paula Lisboa",
          role: t("teams.board.members.anapaula.role"),
          about: t("teams.board.members.anapaula.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/roberto-andres.png",
          name: "Roberto Andres",
          role: t("teams.board.members.roberto.role"),
          about: t("teams.board.members.roberto.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/branca-vianna.png",
          name: "Branca Vianna",
          role: t("teams.board.members.branca.role"),
          about: t("teams.board.members.branca.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/felipe-estefan.png",
          name: "Felipe Estefan",
          role: t("teams.board.members.felipe.role"),
          about: t("teams.board.members.felipe.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/ines-laffer.png",
          name: "Inês Lafer",
          role: t("teams.board.members.ines.role"),
          about: t("teams.board.members.ines.about"),
          team: t("teams.board.title"),
        },
      ]}
    />
  );
};

export const LeadersMembersMobile: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <Stack direction="column" spacing="35px">
      <Heading as="h2" fontWeight="bold" color="pink.main">
        Equipe
      </Heading>
      <Stack direction="column" spacing="20px">
        <Image
          objectFit="cover"
          src="/static/media/team/alessandra-orofino.png"
          width="240px"
          height="240px"
        />
        <Box flexDirection="column">
          <Heading as="h3" fontWeight="bold" fontSize="3xl" lineHeight="42px">
            Alessandra Orofino
          </Heading>
          <Text>{t("teams.leaders.alessandra.role")}</Text>
        </Box>
        <Text>{t("teams.leaders.alessandra.about")}</Text>
      </Stack>
    </Stack>
  );
};

export const LeadersMembers: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <EmployeeTeam
      title={t("teams.leaders.title")}
      members={[
        {
          avatar: "/static/media/team/alessandra-orofino.png",
          name: "Alessandra Orofino",
          role: t("teams.leaders.alessandra.role"),
          about: t("teams.leaders.alessandra.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/enrica-duncan.png",
          name: "Enrica Duncan",
          role: t("teams.leaders.enrica.role"),
          about: t("teams.leaders.enrica.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/virginia.png",
          name: "Virginia Rigot-muller",
          role: t("teams.leaders.virginia.role"),
          about: t("teams.leaders.virginia.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/rafael.jpg",
          name: "Rafael Sampaio",
          role: t("teams.leaders.rafael.role"),
          about: t("teams.leaders.rafael.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/manoela-miklos.png",
          name: "Manoela Miklos",
          role: t("teams.leaders.manoela.role"),
          about: t("teams.leaders.manoela.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/daniela-orofino.png",
          name: "Daniela Orofino",
          role: t("teams.leaders.daniela.role"),
          about: t("teams.leaders.daniela.about"),
          team: t("teams.leaders.title"),
        },
      ]}
    />
  );
};

export const TeamMembers: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <EmployeeTeam
      title={t("teams.team.title")}
      members={[
        {
          avatar: "/static/media/team/adriele.jpg",
          name: "Adriele",
          role: t("teams.team.adriele.role"),
          about: t("teams.team.adriele.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/alexandra-maier.png",
          name: "Alexandra",
          role: t("teams.team.alexandra.role"),
          about: t("teams.team.alexandra.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/alice.jpg",
          name: "Alice",
          role: t("teams.team.alice.role"),
          about: t("teams.team.alice.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/aline-taboada.png",
          name: "Aline",
          role: t("teams.team.aline.role"),
          about: t("teams.team.aline.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/ana-beatriz.png",
          name: "Ana Beatriz",
          role: t("teams.team.anabeatriz.role"),
          about: t("teams.team.anabeatriz.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/ana-claudia.png",
          name: "Ana Claudia",
          role: t("teams.team.anaclaudia.role"),
          about: t("teams.team.anaclaudia.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/anderson-bento.png",
          name: "Anderson",
          role: t("teams.team.anderson.role"),
          about: t("teams.team.anderson.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/bianca.jpg",
          name: "Bianca",
          role: t("teams.team.bianca.role"),
          about: t("teams.team.bianca.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/cledisson-junior.png",
          name: "Cledisson",
          role: t("teams.team.cledisson.role"),
          about: t("teams.team.cledisson.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/gabriela-silva.png",
          name: "Gabriela",
          role: t("teams.team.gabriela.role"),
          about: t("teams.team.gabriela.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/gloria.jpg",
          name: "Glória",
          role: t("teams.team.gloria.role"),
          about: t("teams.team.gloria.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/igor.jpg",
          name: "Igor",
          role: t("teams.team.igor.role"),
          about: t("teams.team.igor.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/isabel-pessanha.png",
          name: "Isabel",
          role: t("teams.team.isabel.role"),
          about: t("teams.team.isabel.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/isabella.jpg",
          name: "Isabella",
          role: t("teams.team.isabella.role"),
          about: t("teams.team.isabella.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/izamir-barbosa.png",
          name: "Izamir",
          role: t("teams.team.izamir.role"),
          about: t("teams.team.izamir.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/jerlan.jpg",
          name: "Jerlan",
          role: t("teams.team.jerlan.role"),
          about: t("teams.team.jerlan.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/juliana.jpg",
          name: "Juliana",
          role: t("teams.team.juliana.role"),
          about: t("teams.team.juliana.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/karina-penha.png",
          name: "Karina",
          role: t("teams.team.karina.role"),
          about: t("teams.team.karina.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/karol.jpg",
          name: "Karol",
          role: t("teams.team.karol.role"),
          about: t("teams.team.karol.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/laura.jpg",
          name: "Laura",
          role: t("teams.team.laura.role"),
          about: t("teams.team.laura.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/leca.png",
          name: "Leca",
          role: t("teams.team.leca.role"),
          about: t("teams.team.leca.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/leticia-castro.png",
          name: "Leticia",
          role: t("teams.team.leticia.role"),
          about: t("teams.team.leticia.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/livia-merlin.png",
          name: "Lívia",
          role: t("teams.team.livia.role"),
          about: t("teams.team.livia.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/lucas-pirola.png",
          name: "Lucas",
          role: t("teams.team.pirola.role"),
          about: t("teams.team.pirola.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/luciana-travassos.png",
          name: "Luciana",
          role: t("teams.team.luciana.role"),
          about: t("teams.team.luciana.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/maira-baracho.png",
          name: "Maira",
          role: t("teams.team.maira.role"),
          about: t("teams.team.maira.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/mariana.jpg",
          name: "Mariana",
          role: t("teams.team.mariana.role"),
          about: t("teams.team.mariana.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/paula.jpg",
          name: "Paula",
          role: t("teams.team.paula.role"),
          about: t("teams.team.paula.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/sany-cristina.png",
          name: "Sany",
          role: t("teams.team.sany.role"),
          about: t("teams.team.sany.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/talita-novacoski.png",
          name: "Talita",
          role: t("teams.team.talita.role"),
          about: t("teams.team.talita.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/tayna-araujo.png",
          name: "Tayná",
          role: t("teams.team.tayna.role"),
          about: t("teams.team.tayna.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/thalita-queiroz.png",
          name: "Thalita",
          role: t("teams.team.thalita.role"),
          about: t("teams.team.thalita.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/gomes-barbosa.png",
          name: "Vanessa",
          role: t("teams.team.vanessa.role"),
          about: t("teams.team.vanessa.about"),
          team: t("teams.team.title"),
        },
      ]}
    />
  );
};

export default TeamMembers;
