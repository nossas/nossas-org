import React from "react";
import { EmployeeTeam } from "../../components/Employee";

type TranslateProps = {
  t: (path: string) => any;
};

export const BoardMembers: React.FC<TranslateProps> = ({ t }) => {
  return (
    <EmployeeTeam
      // title={t("content:about.team.board")}
      title="Conselho"
      description="Nosso conselho é consultivo e conta com seis pessoas, eleitas para mandatos de dois anos:"
      members={[
        {
          avatar: "/static/media/team/ana-carolina.png",
          name: "Ana Carolina Evangelista",
          role: "Diretora Executiva do Instituto de Estudos da Religião (ISER)",
          about:
            "Cientista política e pesquisadora, Ana Carolina é especialista em políticas públicas locais e participação social. Foi gerente programática na Fundación Avina, onde fomentou experimentos em desenvolvimento urbano, gerenciamento local e inovação política na América Latina, e hoje é diretora do ISER, organização que promove estudos e pesquisas sobre religião e justiça social no Brasil. Tem mestrado em Relações Internacionais e é doutoranda pelo CPDOC/FGV.",
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/ana-paula.png",
          name: "Ana Paula Lisboa",
          role: "Fundadora da Casa Rede e colunista do jornal O Globo",
          about:
            'Ana Paula é escritora, produtora e colunista do jornal O Globo. Atualmente, vive entre Rio de Janeiro e Luanda, onde dirige a produtora Aláfia e o espaço cultural Casa Rede. Foi produtora e apresentadora do programa "Querendo Assunto", tem contos e poesias publicados em coletâneas nacionais e internacionais e, desde 2016, tem contribuído regularmente com a revista feminista AzMina.',
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/roberto-andres.png",
          name: "Roberto Andres",
          role: "Fundador do Ocupa Política e editor da Piseagrama",
          about:
            "Roberto é arquiteto, urbanista e pesquisador com ampla experiência em prática arquitetônica, desenvolvimento urbano e tecnologia da informação. É editor da revista Piseagrama e professor na UFMG, tendo passado antes pelos laboratórios de pesquisa Laboratório Gráfico para Experimentação Arquitetônica (LAGEAR/UFMG) e Laboratório de Material Didático Multimídia (LMDM/CETEC MG). Roberto também é diretor e co-fundador da Hometeka.",
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/branca-vianna.png",
          name: "Branca Vianna",
          role: "Fundadora e presidente da Rádio Novelo",
          about:
            'Branca é filantropa e Presidente do Conselho Administrativo do Instituto Serrapilheira, primeira instituição privada, sem fins lucrativos, de fomento à ciência no Brasil. Ela também é presidente da Rádio Novelo e apresentadora do podcast "Maria vai com as outras", sobre mulheres no mercado de trabalho. Foi professora da PUC-Rio por mais de 10 anos e possui experiência sólida em comunicação para grandes audiências.',
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/felipe-estefan.png",
          name: "Felipe Estefan",
          role: "Diretor de investimentos da Luminate",
          about:
            "À frente da Direção de investimentos na América Latina da Luminate, Felipe apoia a organização no fortalecimento de iniciativas e políticas públicas de direitos digitais, transparência financeira, independência da mídia e tecnologia cívica na região. Antes de entrar na Luminate, ele foi estrategista no Banco Mundial para a promoção da transparência nas instâncias de governo. Também foi membro fundador da Open Contracting Partnership.",
          team: "Conselho",
        },
        {
          avatar: "/static/media/team/ines-laffer.png",
          name: "Inês Laffer",
          role: "Diretora do Instituto Betty & Jacob Lafer",
          about:
            "Inês é especialista em iniciativas filantrópicas e políticas públicas focadas em crianças e adolescentes. Ela iniciou sua carreira como psicóloga no SESI antes de tornar-se consultora na Kairós Desenvolvimento Social em projetos nas áreas de criança e adolescência e assistência social. Foi gerente programática na Fundação Maria Cecília Souto Vidigal, assistente técnica na Comissão Municipal de Direitos Humanos de São Paulo e gerente de projetos no IDIS.",
          team: "Conselho",
        },
      ]}
    />
  );
};

export const LeadersMembers: React.FC<TranslateProps> = ({ t }) => {
  return (
    <EmployeeTeam
      // title={t("content:about.team.leaders")}
      title="Lideranças"
      members={[
        {
          avatar: "/static/media/team/alessandra-orofino.png",
          name: "Alessandra Orofino",
          role: "Co-fundadora e Diretora Executiva",
          about:
            "Alessandra é uma ativista, diretora, produtora e escritora com vasta experiência em mobilização de pessoas. Foi membro-fundadora da agência nova-iorquina Purpose, que trouxe para o Brasil antes de co-fundar o NOSSAS. Foi curadora do blog Agora É Que São Elas, colunista da Folha de São Paulo e palestrante do TED Global. Atualmente dirige o programa de jornalismo satírico Greg News, na HBO e é fellow da Obama Foundation. Alessandra é formada em Economia e Direitos Humanos pela Columbia University.",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/enrica-duncan.png",
          name: "Enrica Duncan",
          role: "Diretora Adjunta e Diretora do Mapa do Acolhimento",
          about:
            "Enrica chegou ao NOSSAS como mobilizadora antes de se tornar chefe de equipe e Diretora Adjunta. Ela já morou e trabalhou na Bélgica, África do Sul e Japão até se fixar em sua cidade natal, o Rio de Janeiro. No Brasil, foi produtora da GloboNews, cobrindo os protestos de 2013. Atualmente lidera o projeto Mapa do Acolhimento. Ela é Bacharel em Ciências Políticas com concentração em Estudos Globais pela The New School.",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/virginia.png",
          name: "Virginia Rigot-muller",
          role: "Diretora de Operações",
          about:
            "Virginia atuou como gerente de projetos editoriais nas Éditions Gallimard e pilotou projetos de comunicação pública e institucional em agências de comunicação na França. Ao regressar ao Brasil, atuou em organizações do terceiro setor que trabalham com cultura e justiça social. No NOSSAS, supervisiona as áreas de operações, comunicação e sustentabilidade. Ela é formada em Filosofia Política pela Sorbonne e pós-graduada em Comunicação pelo Instituto CELSA.",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/daniela-orofino.png",
          name: "Daniela Orofino",
          role: "Diretora de Mobilização",
          about:
            "Daniela atua em campanhas de mobilização, campanhas eleitorais, advocacy e assessoria legislativa há quase uma década. Trabalhou por quatro anos com o presidente da Comissão de Direitos Humanos da Assembleia Legislativa do Rio de Janeiro, ao lado de Marielle Franco. Atualmente é Diretora de Mobilização no NOSSAS e lidera nossa equipe de campanhas e treinamentos. Daniela é socióloga pela UFRJ e mestranda em Ciência da Informação, também pela UFRJ.",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/manoela-miklos.png",
          name: "Manoela Miklos",
          role: "Estrategista Chefe",
          about:
            "Manoela é especialista em direitos humanos e estudos de gênero e ativista pelos direitos das mulheres. Criou e coapresenta o podcast Novo Normal e contribui como colunista para vários veículos, como Folha de São Paulo, Veja, Volcánica e Mídia Ninja. Antes do NOSSAS, fez parte da equipe da Open Society Foundations LATAM. Manoela é doutora em segurança do cidadão pelo Programa de Pós-Graduação em Relações Internacionais San Tiago Dantas.",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/cledisson-junior.png",
          name: "Cledisson Junior",
          role: "Head de Advocacy",
          about:
            "Cledisson gerencia a área de advocacy no NOSSAS, elaborando análises conjunturais e de risco político e desenvolvendo estratégias de incidência junto a organizações parceiras e tomadores de decisões. Antes, foi Secretário Executivo do Conselho Nacional de Direitos Humanos da Presidência da República do Brasil de 2015 a 2016 e Assessor Parlamentar na Assembleia Legislativa de Minas Gerais. Cledisson é mestre em Desenvolvimento Rural pela UFRGS e doutorando em Ciências Sociais pela UFRRJ",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/debora-pio.png",
          name: "Debora Pio",
          role: "Gestora Sênior de Comunicação",
          about:
            "Debora é nascida na Vila Kennedy, na Zona Oeste do Rio de Janeiro, onde faz parte do coletivo Casa de Aya. Trabalhou na TV GLOBO, já foi repórter do Jornal O Globo e editora-chefe do Portal Viva Favela, site de jornalismo comunitário pioneiro no setor. É conselheira da Casa Fluminense, integrante da coorte Columbia Women Fellowship e doutoranda em Comunicação e Cultura pela UFRJ, onde pesquisa tecnologias, comunicação, algoritmos e favelas",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/lucas-pirola.png",
          name: "Lucas Pirola",
          role: "Head de Tecnologia",
          about:
            "Pirola é líder de desenvolvimento autodidata de São Paulo. Ingressou na equipe como programador, mas com seu vasto conhecimento técnico, rapidamente liderou a área e hoje supervisiona todos os projetos relacionados à tecnologia no NOSSAS. Antes, trabalhou como especialista em infografia durante as eleições presidenciais de 2010 no Brasil. Amante da natureza, nas horas vagas gosta de surfar e ficar com sua companheira e filhote",
          team: "Liderança",
        },
        {
          avatar: "/static/media/team/talita-novacoski.png",
          name: "Talita Novacoski",
          role: "Gestora Sênior de Tecnologia",
          about:
            "Talita gerencia a área de tecnologia do NOSSAS, trabalhando na interseção de design, tecnologia e ativismo. Ela tem experiência com estratégia de produto, pesquisa de usuário, design thinking, metodologias ágeis, pensamento sistêmico, design de UI e UX. Formada em Comunicação e Multimeios, se especializou em UX Design e trabalhou com grandes empresas como Itaú, Accenture, Facebook, Visa, Santander, Leroy Merlin e outras",
          team: "Liderança",
        },
      ]}
    />
  );
};

export const TeamMembers: React.FC<TranslateProps> = ({ t }) => {
  return (
    <EmployeeTeam
      // title= {t("content:about.team.team")}
      title="Equipe"
      members={[
        {
          avatar: "/static/media/team/adriele-alvarenga.png",
          name: "Adriele Alvarenga",
          role: "Programadora",
          about:
            "Adriele, preta, mineira, entrou recentemente para a equipe de tecnologia do Nossas. É graduada em Ciência da Computação pela UFJF e começou a trabalhar como programadora em 2014 e, desde então, vem questionando a importância da diversidade nesse meio, assim como as responsabilidades e poderes que profissionais da tecnologia têm na sociedade contemporânea. Nas horas vagas, gosta de música, viajar, cozinhar, boas companhias e boas histórias.",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/alexandra-maier.png",
          name: "Alexandra Maier",
          role: "Coordenadora de Operações",
          about:
            "Alexandra compõe a Equipe Operacional da organização, monitorando os processos internos burocráticos e administrativos. É amante de gastronomia, música e pessoas. Antes de chegar no NOSSAS, viveu e trabalhou na Dinamarca, Alemanha e Inglaterra. De volta ao Brasil já atuou na área de assessoria executiva e gestão de expatriados no setor de dragagem. É formada em Processos Gerenciais pela FGV e Hospitalidade pelo Highbury College",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/aline-taboada.png",
          name: "Aline Taboada",
          role: "Coordenadora Financeira",
          about:
            "Funcionária mais veterana da organização, Aline acompanhou nosso crescimento desde o primeiro ano do Meu Rio. Ao longo desse período trabalhou à frente da estrutura administrativa idealizando os processos operacionais de base. É viciada em trabalho, mas nas horas vagas conduz um estudo espiritual, dando aula em um centro de educação mediúnica. Considera seus colegas de trabalho como filhos e adotou todas as crianças do NOSSAS como netos",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/ana-beatriz.png",
          name: "Ana Beatriz El-Kadri",
          role: "Coordenadora de Voluntárias do Mapa do Acolhimento",
          about:
            "Ana é advogada formada pela PUC-SP e compõe a equipe do Mapa do Acolhimento. Entre 2015 e 2016 atuou na 1ª Vara de Família do Fórum Regional de Pinheiros acompanhando de perto casos e audiências de demandas de família sem a perspectiva de gênero. Depois de graduada realizou o curso de atendimento a mulheres vítimas de violência de gênero ministrado pelo IBCCRIM em parceria com o Instituto Avon e está no Mapa do Acolhimento desde outubro de 2018",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/ana-claudia.png",
          name: "Ana Claudia Medeiros",
          role: "Designer e Mobilizadora",
          about:
            "Ana Claudia é manauara e trabalhou durante 7 anos em organizações do terceiro setor na Amazônia. No NOSSAS, atua como designer e mobilizadora nas equipes de Criação e Comunicação. Ela é formada em design gráfico e estudante de artes visuais na Universidade Federal do Amazonas - UFAM",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/anderson-bento.png",
          name: "Anderson Bento",
          role: "Coordenador de Dados",
          about:
            "Anderson é graduado em Ciência Política pela UFPE, onde pesquisou sobre produção de políticas públicas, conflito legislativo e polarização político-partidária. Foi através de estudos acadêmicos que teve contato com dados e programação, área na qual tem se aprofundado desde então. No NOSSAS desde 2019, ajuda a monitorar métricas relevantes e conduz experimentos e análises observacionais para testar hipóteses sobre como aumentar o impacto da organização",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/bela-avelar.png",
          name: "Bela Avelar",
          role: "Coordenadora de Design e Mobilização",
          about:
            "Bela acredita no design enquanto ferramenta de resolução de problemas e mudanças sociais, integrado a processos. No NOSSAS coordena os eixos de Inclusão Econômica e Cidades, além da parte de design. Já atuou na Fábula, e também coordenou o design da campanha de 2018 do deputado federal Alessandro Molon. Bela é graduada pela PUC-Rio com passagem pelo Politécnico de Milão através do Ciência sem Fronteiras",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/flavia-rocha.png",
          name: "Flavia Rocha",
          role: "Analista de Dados",
          about:
            "Flávia é pernambucana, desenvolvedora, pesquisadora e co-fundadora de alguns projetos voltados à educação, meio ambiente, cadeia alimentar e de incentivo à tecnologia para mulheres. Atuou no serviço público por quase 2 anos em assessoria parlamentar e avaliando políticas públicas. Tem formação técnica em Desenvolvimento de Sistemas, bacharelado em Ciência Política na UFPE com formação complementar em Ciência de Dados",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/gabriela-silva.png",
          name: "Gabriela Silva",
          role: "Coordenadora de Atendimento do Mapa do Acolhimento",
          about:
            "Gabriela é feminista antirracista e trabalhou como articuladora no projeto “Feminicidades”, que visa dar voz a todos os tipos de mulheres. É psicóloga formada pela PUC-SP, especializou-se no atendimento à mulher em situação de violência de gênero no IBCCRIM, com foco em Lei Maria da Penha, Serviços Públicos, ONGs e violência familiar. Tem especialização em saúde coletiva pelo Instituto de Saúde da Secretaria de Estado da Saúde",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/gloria-teodoro.png",
          name: "Glória Teodoro",
          role: "Programadora",
          about:
            "Glória é baiana, atual moradora de Recife, e gosta de aprender sobre tecnologia, segurança da informação e música. Além disso, está sempre atenta a ambientes que incentivam o crescimento de mulheres na tecnologia. Ex-estudante de Direito, decidiu deixar o curso para se dedicar ao desenvolvimento de software, passando pela Reprograma e iniciando a graduação em Ciência da Computação na UFPE",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/igor-santos.png",
          name: "Igor Santos",
          role: "Programador",
          about:
            "Igor é desenvolvedor de software e produtor musical. Tem vasta experiência com programação e está há anos contribuindo com o desenvolvimento de novas tecnologias no NOSSAS. Ele é membro da Python Brasil Association, apaixonado por música, cultura e tecnologia",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/isabel-pessanha.png",
          name: "Isabel Pessanha",
          role: "Assistente pessoal de Alessandra Orofino",
          about:
            "Isabel já trabalhou com produção, RH e gestão da diversidade. Hoje, ela atua como assistente de redação do Greg News e assistente pessoal de nossa diretora executiva, dando apoio em sua rotina de trocas com parceiros e equipes. Isabel é formada em Administração pela PUC-Rio com especialização em Recursos Humanos e Diversidade, pela ESG-UQÀM",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/izamir-barbosa.png",
          name: "Izamir Barbosa",
          role: "Mobilizador",
          about:
            "Izamir é um ativista socioambiental interessado na agenda de desenvolvimento sustentável da Amazônia Ocidental. Amazonense, trabalhou como comunicador em algumas organizações e liderou projetos do terceiro setor em Manaus. É formado em Relações-públicas (UFAM) e jornalismo (FMF-Devry), possui MBA em Marketing Digital pela ESPM e é especialista em Relações Internacionais Contemporâneas pela UFRGS",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/karina-penha.png",
          name: "Karina Penha",
          role: "Mobilizadora",
          about:
            "Karina é maranhense, bióloga e ambientalista. Foi coordenadora do Grupo de Trabalho de Clima da Organização de Jovens Engajamundo entre 2018 e 2020, é Líder da comunidade de Protagonismo Juvenil USBEA desde 2015 e faz parte da rede de líderes globais International Exchange Alumni. É apaixonada por educação e cultura, ama dançar, andar de perna de pau e tentar outras habilidades circenses. Faz parte do grupo de missões de uma igreja local e ama diálogos e histórias",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/larissa.png",
          name: "Larissa Schmillevitch",
          role: "Gestora do Mapa do Acolhimento",
          about:
            "Larissa é psicóloga, ativista, feminista, militante LGBT+ e contra todas as formas de manicômio. Já atuou em serviços da saúde pública e da assistência social no centro e nas periferias de São Paulo pela garantia de direitos de populações em situação de vulnerabilidade. Como gestora do Mapa do Acolhimento, acredita que a tecnologia pode unir mulheres na luta pelo fim da violência baseada em gênero. Larissa é formada pela PUC/SP e especialista em saúde mental",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/leca.png",
          name: "Leca Cunha",
          role: "Coordenadora de Sustentabilidade",
          about:
            "Formada em Marketing, Leca trouxe sua experiência nas áreas comercial e de relacionamento para ampliar o compartilhamento sustentável da plataforma BONDE com organizações parceiras e fortalecer a rede de micro doadores da organização. Seu trabalho tem ajudado a distribuir a força da plataforma para diversos parceiros, como a All Out, o Pacto pela Democracia e o Coletivo Papo Reto",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/leticia-castro.png",
          name: "Leticia Castro",
          role: "Mobilizadora",
          about:
            "Letícia sempre foi movida pelos direitos dos migrantes e refugiados e por formas de integração à cidade. No NOSSAS, ela trabalha na frente de Treinamento, na execução dos editais e do Programa de Mobilizadores. Antes, foi Assistente de Cooperação Internacional no Centro de Relações Internacionais em Saúde (Cris) da Fiocruz. Letícia é mestre em Gestão e Análises de Políticas Internacionais pela PUC-Rio e graduada em Relações Internacionais pela UFF",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/livia-merlin.png",
          name: "Livia Merlin",
          role: "Coordenadora de Mobilização",
          about:
            "Campaigner no Nossas, Lívia atuou previamente em projetos nas áreas de gênero, sustentabilidade e direitos humanos em organizações como a Actionaid e a Anistia Internacional. Ela possui graduação em Relações Internacionais pela Universidade Federal do Rio de Janeiro e especialização em Ecoliteracia pela Universidade de Coimbra e UNESCO",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/luciana-travassos.png",
          name: "Luciana Travassos",
          role: "Mobilizadora",
          about:
            "Manauara, Luciana atua com projetos sociais relacionados à educação e humanização na cidade de Manaus há alguns anos. Em paralelo ao seu trabalho no NOSSAS, ela coordena um projeto voluntário que orienta jovens e adultos de comunidades carentes que têm interesse em realizar o Enem. Ela é formada em Relações Públicas pela UFAM e tem especialização em Comunicação Empresarial e Mídias Digitais",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/maira-baracho.png",
          name: "Maira Baracho",
          role: "Gestora de Treinamento",
          about:
            "Maira é pernambucana, interessada nas pautas de Direitos Humanos, gênero, Direitos Sexuais e Direitos Reprodutivos e Política de Drogas. Militante feminista antiproibicionista, ela integra a Rede Nacional de Feministas Antiproibicionistas (RENFA) e a Articulação de Mulheres Brasileiras (AMB). Antes do NOSSAS, trabalhou como repórter do Diario de Pernambuco e na Fiocruz. Maira é formada em Comunicação Social",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/sany-cristina.png",
          name: "Sany Cristina",
          role: "Coordenadora de Comunicação",
          about:
            "Sany atua na área de comunicação desde 2013, com experiência em produção de conteúdo para mídias digitais, design, produção audiovisual, consultoria e educação. Nas horas vagas, gosta de praticar atividades circenses, tocar percussão e mergulhar cada vez mais na literatura produzida por mulheres negras. Ela é graduada em Publicidade e Propaganda e especialista em Produção e Criação de Conteúdos Digitais pela ESPM",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/tayna-araujo.png",
          name: "Tayná Araújo",
          role: "Analista de Sustentabilidade",
          about:
            "Antes de integrar a frente de Sustentabilidade, Tayná tinha experiência com atendimento ao público e relacionamento com cliente, suporte técnico/funcional, cobrança ativa e vendas, além de atuação na área da educação, como auxiliar de classe no ensino fundamental e médio. Tayná é graduanda em Licenciatura em Ciências Humanas e tem interesse de especialização em Comunicação Social",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/thalita-queiroz.png",
          name: "Thalita Queiroz dos Santos",
          role: "Articuladora do Mapa do Acolhimento",
          about:
            "Baiana, feminista e anti-racista, Thalita é uma defensora dos Direitos Humanos com especial interesse por temáticas na interseccionalidade entre raça e gênero que colaborem na luta por justiça e reparação das desigualdades. Ela é formada em Serviço Social pela UFBA, onde descobriu as áreas de assessoria em assistência social e sociojurídica, conhecimentos que desenvolve em seu trabalho no Mapa do Acolhimento",
          team: "Equipe",
        },
        {
          avatar: "/static/media/team/gomes-barbosa.png",
          name: "Gomes Barbosa",
          role: "Articuladora do Mapa do Acolhimento",
          about:
            "Nascida e criada em Recife, Vanessa possui experiências docentes do ensino superior em Serviço Social e em formação política de lideranças. É ativista do movimento progressista evangélico brasileiro e facilita a criação de espaços formativos para a incidência pública nas áreas de cidadania, justiça racial e de gênero. Vanessa é bacharel em Serviço Social (UFPE), pós-graduada em Gestão da Política de Assistência Social (UNICAP) e Mestra em Educação, Culturas e Identidades (UFRPE)",
          team: "Equipe",
        },
      ]}
    />
  );
};

export default TeamMembers;
