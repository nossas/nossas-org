import React from "react";
import Media from "../components/Media";

const ContentMedia = ({ title }: any) => (
  <Media
    title={title}
    logos={[
      {
        href:
          "https://www.7dias.co/2020/05/25/no-hay-tiempo-habitantes-de-zonas-pobres-de-america-latina-lideran-batalla-contra-el-virus-y946o4Bl?infinite_scroll=true",
        src: "/static/media/s3/dias.png",
      },
      {
        href:
          "https://www.reuters.com/article/us-health-coronavirus-latam-slums/no-time-latin-americas-slum-dwellers-lead-coronavirus-battle-idUSKBN2311GR",
        src: "/static/media/s3/reuters.png",
      },
      {
        href:
          "https://www.nytimes.com/2020/06/03/opinion/bolsonaro-brazil-coronavirus.html",
        src: "/static/media/s3/nyt.png",
      },
      {
        href: "https://piaui.folha.uol.com.br/materia/o-levante/",
        src: "/static/media/s3/piaui.png",
      },
      {
        href:
          "https://brasil.elpais.com/opiniao/2020-03-23/renda-basica-de-emergencia-uma-proposta-de-solidariedade-para-enfrentar-o-caos.html",
        src: "/static/media/s3/elpais.png",
      },
      {
        href:
          "https://www.forbes.com/sites/tudormihailescu/2018/12/04/newly-launched-philanthropic-organization-pledges-to-invest-60-million-in-civic-tech-in-2019/#5914999f3c3c",
        src: "/static/media/s3/forbes.png",
      },
      {
        href: "https://www.youtube.com/watch?v=zMGE3mbS9NY",
        src: "/static/media/s3/ted.png",
      },
      {
        href: "https://www.youtube.com/watch?v=Yt-fzb3xLH0",
        src: "/static/media/s3/zeitgeist.png",
      },
    ]}
  />
);

export default ContentMedia;
