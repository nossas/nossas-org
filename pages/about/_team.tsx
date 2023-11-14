import React from "react";
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
          avatar: "/static/media/team/ana-carolina.jpeg",
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
          avatar: "/static/media/team/atila-roque.jpeg",
          name: "Átila Roque",
          role: t("teams.board.members.atila.role"),
          about: t("teams.board.members.atila.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/branca-vianna.jpg",
          name: "Branca Vianna",
          role: t("teams.board.members.branca.role"),
          about: t("teams.board.members.branca.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/enrica-duncan.jpeg",
          name: "Enrica Duncan",
          role: t("teams.board.members.enrica.role"),
          about: t("teams.board.members.enrica.about"),
          team: t("teams.board.title"),
        },
        {
          avatar: "/static/media/team/semayat-oliveira.jpeg",
          name: "Semayat Oliveira",
          role: t("teams.board.members.semayat.role"),
          about: t("teams.board.members.semayat.about"),
          team: t("teams.board.title"),
        }
      ]}
    />
  );
};

export const FounderMembers: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <EmployeeTeam
      title={t("teams.founders.title")}
      members={[
        {
          avatar: "/static/media/team/alessandra-orofino.png",
          name: "Alessandra Orofino",
          about: t("teams.founders.alessandra.about"),
          team: t("teams.founders.title"),
        },
        {
          avatar: "/static/media/team/miguel-lago.png",
          name: "Miguel Lago",
          about: t("teams.founders.miguel.about"),
          team: t("teams.founders.title"),
        },
      ]}
    />
  );
};

export const LeadersMembers: React.FC = () => {
  const { t } = useTranslation("about");

  return (
    <EmployeeTeam
      title={t("teams.leaders.title")}
      members={[
        {
          avatar: "/static/media/team/aurea-carolina.png",
          name: "Áurea Carolina",
          role: t("teams.leaders.aurea.role"),
          about: t("teams.leaders.aurea.about"),
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
          avatar: "/static/media/team/daniela-orofino.png",
          name: "Daniela Orofino",
          role: t("teams.leaders.daniela.role"),
          about: t("teams.leaders.daniela.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/talita.png",
          name: "Talita Novacoski",
          role: t("teams.leaders.talita.role"),
          about: t("teams.leaders.talita.about"),
          team: t("teams.leaders.title"),
        },
        {
          avatar: "/static/media/team/roberto-andres.png",
          name: "Roberto Andrés",
          role: t("teams.leaders.roberto.role"),
          about: t("teams.leaders.roberto.about"),
          team: t("teams.leaders.title"),
        },
      ]}
    />
  );
};

// Equipe
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
          avatar: "/static/media/team/alice.jpg",
          name: "Alice",
          role: t("teams.team.alice.role"),
          about: t("teams.team.alice.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/barbara.png",
          name: "Bárbara",
          role: t("teams.team.barbara.role"),
          about: t("teams.team.barbara.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/camila.png",
          name: "Camila",
          role: t("teams.team.camila.role"),
          about: t("teams.team.camila.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/carolina.png",
          name: "Carolina",
          role: t("teams.team.carolina.role"),
          about: t("teams.team.carolina.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/carol-abreu.png",
          name: "Carol",
          role: t("teams.team.carol.role"),
          about: t("teams.team.carol.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/catarina.png",
          name: "Catarina",
          role: t("teams.team.catarina.role"),
          about: t("teams.team.catarina.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/clareana.png",
          name: "Clareana",
          role: t("teams.team.clareana.role"),
          about: t("teams.team.clareana.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/danielle.png",
          name: "Danielle",
          role: t("teams.team.danielle.role"),
          about: t("teams.team.danielle.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/fabiana.png",
          name: "Fabiana",
          role: t("teams.team.fabiana.role"),
          about: t("teams.team.fabiana.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/gabrielly.png",
          name: "Gabrielly",
          role: t("teams.team.gabrielly.role"),
          about: t("teams.team.gabrielly.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/gisela.png",
          name: "Gisela",
          role: t("teams.team.gisela.role"),
          about: t("teams.team.gisela.about"),
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
          avatar: "/static/media/team/guilherme.png",
          name: "Guilherme",
          role: t("teams.team.guilherme.role"),
          about: t("teams.team.guilherme.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/gustavo.png",
          name: "Gustavo",
          role: t("teams.team.gustavo.role"),
          about: t("teams.team.gustavo.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/helena.png",
          name: "Helena",
          role: t("teams.team.helena.role"),
          about: t("teams.team.helena.about"),
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
          avatar: "/static/media/team/kaianaku.png",
          name: "Kaianaku",
          role: t("teams.team.kaianaku.role"),
          about: t("teams.team.kaianaku.about"),
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
          avatar: "/static/media/team/larissa.png",
          name: "Larissa",
          role: t("teams.team.larissa.role"),
          about: t("teams.team.larissa.about"),
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
          avatar: "/static/media/team/leila.png",
          name: "Leila",
          role: t("teams.team.leila.role"),
          about: t("teams.team.leila.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/lucas.png",
          name: "Lucas",
          role: t("teams.team.lucas.role"),
          about: t("teams.team.lucas.about"),
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
          avatar: "/static/media/team/maria-alice.png",
          name: "Maria Alice",
          role: t("teams.team.maria-alice.role"),
          about: t("teams.team.maria-alice.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/maria-julia.jpg",
          name: "Maria Julia",
          role: t("teams.team.maria-julia.role"),
          about: t("teams.team.maria-julia.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/miguel-soares.jpg",
          name: "Miguel Soares",
          role: t("teams.team.miguel-soares.role"),
          about: t("teams.team.miguel-soares.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/paulo.png",
          name: "Paulo",
          role: t("teams.team.paulo.role"),
          about: t("teams.team.paulo.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/raphaela.jpeg",
          name: "Raphaela",
          role: t("teams.team.raphaela.role"),
          about: t("teams.team.raphaela.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/renata.png",
          name: "Renata",
          role: t("teams.team.renata.role"),
          about: t("teams.team.renata.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/romulo.jpg",
          name: "Romulo",
          role: t("teams.team.romulo.role"),
          about: t("teams.team.romulo.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/sarah.png",
          name: "Sarah",
          role: t("teams.team.sarah.role"),
          about: t("teams.team.sarah.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/sarah-cristina.jpeg",
          name: "Sarah",
          role: t("teams.team.sarah-cristina.role"),
          about: t("teams.team.sarah-cristina.about"),
          team: t("teams.team.title"),
        },
        {
          avatar: "/static/media/team/tayane.png",
          name: "tayane",
          role: t("teams.team.tayane.role"),
          about: t("teams.team.tayane.about"),
          team: t("teams.team.title"),
        },
      ]}
    />
  );
};

export default TeamMembers;
