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

export const TeamMembers = () => {
  const { t } = useTranslation("team");

  return (
    <EmployeeTeam
      title={t("content:blocks.about.team.team")}
      members={[
        {
          avatar: "/static/media/team/adriele-alvarenga.png",
          name: "Adriele Alvarenga",
          role: t("team.adrielealvarenga.role"),
          about: t("team.adrielealvarenga.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/alexandra-maier.png",
          name: "Alexandra Maier",
          role: t("team.alexandramaier.role"),
          about: t("team.alexandramaier.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/aline-taboada.png",
          name: "Aline Taboada",
          role: t("team.alinetaboada.role"),
          about: t("team.alinetaboada.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/ana-beatriz.png",
          name: "Ana Beatriz El-Kadri",
          role: t("team.anabeatrizelkadri.role"),
          about: t("team.anabeatrizelkadri.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/ana-claudia.png",
          name: "Ana Claudia Medeiros",
          role: t("team.anaclaudiamedeiros.role"),
          about: t("team.anaclaudiamedeiros.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/anderson-bento.png",
          name: "Anderson Bento",
          role: t("team.andersonbento.role"),
          about: t("team.andersonbento.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/bela-avelar.png",
          name: "Bela Avelar",
          role: t("team.belaavelar.role"),
          about: t("team.belaavelar.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/flavia-rocha.png",
          name: "Flavia Rocha",
          role: t("team.flaviarocha.role"),
          about: t("team.flaviarocha.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/gabriela-silva.png",
          name: "Gabriela Silva",
          role: t("team.gabrielasilva.role"),
          about: t("team.gabrielasilva.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/gloria-teodoro.png",
          name: "Glória Teodoro",
          role: t("team.gloriateodoro.role"),
          about: t("team.gloriateodoro.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/igor-santos.png",
          name: "Igor Santos",
          role: t("team.igorsantos.role"),
          about: t("team.igorsantos.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/isabel-pessanha.png",
          name: "Isabel Pessanha",
          role: t("team.isabelpessanha.role"),
          about: t("team.isabelpessanha.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/izamir-barbosa.png",
          name: "Izamir Barbosa",
          role: t("team.izamirbarbosa.role"),
          about: t("team.izamirbarbosa.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/karina-penha.png",
          name: "Karina Penha",
          role: t("team.karinapenha.role"),
          about: t("team.karinapenha.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/larissa.png",
          name: "Larissa Schmillevitch",
          role: t("team.larissaschmillevitch.role"),
          about: t("team.larissaschmillevitch.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/leca.png",
          name: "Leca Cunha",
          role: t("team.lecacunha.role"),
          about: t("team.lecacunha.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/leticia-castro.png",
          name: "Leticia Castro",
          role: t("team.leticiacastro.role"),
          about: t("team.leticiacastro.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/livia-merlin.png",
          name: "Livia Merlin",
          role: t("team.liviamerlin.role"),
          about: t("team.liviamerlin.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/luciana-travassos.png",
          name: "Luciana Travassos",
          role: t("team.lucianatavassos.role"),
          about: t("team.lucianatavassos.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/maira-baracho.png",
          name: "Maira Baracho",
          role: t("team.mairabaracho.role"),
          about: t("team.mairabaracho.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/sany-cristina.png",
          name: "Sany Cristina",
          role: t("team.sanycristina.role"),
          about: t("team.sanycristina.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/tayna-araujo.png",
          name: "Tayná Araújo",
          role: t("team.taynaaraujo.role"),
          about: t("team.taynaaraujo.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/thalita-queiroz.png",
          name: "Thalita Queiroz dos Santos",
          role: t("team.thalitaqueiroz.role"),
          about: t("team.thalitaqueiroz.about"),
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/gomes-barbosa.png",
          name: "Gomes Barbosa",
          role: t("team.gomesbarbosa.role"),
          about: t("team.gomesbarbosa.about"),
          team: "Equipe",
        },
      ]}
    />
  );
};
