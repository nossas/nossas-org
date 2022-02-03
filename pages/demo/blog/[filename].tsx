// THIS FILE HAS BEEN GENERATED WITH THE TINA CLI.
// This is a demo file once you have tina setup feel free to delete this file

import { staticRequest, gql } from "tinacms";
// import Head from "next/head";
import { useTina } from "tinacms/dist/edit-state";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { WithUserAgentProps } from "next-useragent";
import { Body, Section } from "../../../components/Page";
import Hero from "../../../components/Hero";
import { Header } from "../../../content";
import { Text, Link, Stack } from "@chakra-ui/react";
import SocialMedia from "../../press/SocialMedia";
import { useTranslation } from "next-i18next";

const Press: React.FC<WithUserAgentProps> = (props: any) => {
  const { t } = useTranslation("press");

  const nossasEmail = (
    <Link href="mailto:imprensa@nossas.org">imprensa@nossas.org</Link>
  );
  const { data } = useTina({
    query,
    variables: props.variables,
    data: props.data,
  });
  console.log(data);
  return (
    <Body>
      <Hero
        bgImage="/static/media/covers/header-press.png"
        title={t("cover")}
        titleColor="white"
        titleAlign="center"
      />

      <Section>
        <h1>{data.getPostsDocument.data.title}</h1>
        <p>{data.getPostsDocument.data.body}</p>

        <Header
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("journalist.title", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={
            <Stack spacing={7} maxW={725}>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p1", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p2", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p3", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p4", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />
              </Text>
              <Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("journalist.p5", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                />{" "}
                {nossasEmail}
              </Text>
            </Stack>
          }
        />
      </Section>

      <Section bgColor="gray.light">
        <Header
          titleColor="pink.main"
          title={
            <div
              dangerouslySetInnerHTML={{
                __html: t("journalist.about", {
                  interpolation: { escapeValue: false },
                }),
              }}
            />
          }
          description={
            <>
              <Stack spacing={7}>
                <Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t("journalist.description", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  />
                </Text>
                <Text>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t("journalist.description2", {
                        interpolation: { escapeValue: false },
                      }),
                    }}
                  />
                </Text>
                <SocialMedia />
              </Stack>
            </>
          }
        ></Header>
      </Section>
    </Body>
  );
};

const query = gql`
  query BlogPostQuery($relativePath: String!) {
    getPostsDocument(relativePath: $relativePath) {
      data {
        title
        body
      }
    }
  }
`;

// const defaultMarked = (markdown) => markdown;
// Use the props returned by get static props (this can be deleted when the edit provider and tina-wrapper are moved to _app.js)
// const BlogPage = (props) => {
//   const { data } = useTina({
//     query,
//     variables: props.variables,
//     data: props.data,
//   });

//   return (
//     <>
//       <Head>
//         {/* Tailwind CDN */}
//         <link
//           rel="stylesheet"
//           href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
//           integrity="sha512-y6ZMKFUQrn+UUEVoqYe8ApScqbjuhjqzTuwUMEGMDuhS2niI8KA3vhH2LenreqJXQS+iIXVTRL2iaNfJbDNA1Q=="
//           crossOrigin="anonymous"
//           referrerPolicy="no-referrer"
//         />
//         {/* Marked CDN */}
//         <script
//           type="text/javascript"
//           crossOrigin="anonymous"
//           src="https://cdnjs.cloudflare.com/ajax/libs/marked/4.0.0/marked.min.js"
//         />
//       </Head>
//       <div>
//         <div
//           style={{
//             textAlign: "center",
//           }}
//         >
//           <h1 className="text-3xl m-8 text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             {data.getPostsDocument.data.title}
//           </h1>
//           {/* Convert markdown to html in the browser only */}
//           {typeof window !== "undefined" && (
//             <ContentSection
//               content={window.marked.parse(data.getPostsDocument.data.body)}
//             ></ContentSection>
//           )}
//         </div>
//         <div className="bg-green-100 text-center">
//           Lost and looking for a place to start?
//           <a
//             href="https://tina.io/guides/tina-cloud/getting-started/overview/"
//             className="text-blue-500 underline"
//           >
//             {" "}
//             Check out this guide
//           </a>{" "}
//           to see how add TinaCMS to an existing Next.js site.
//         </div>
//       </div>
//     </>
//   );
// };

export const getStaticProps = async ({ params, locale }) => {
  const variables = { relativePath: `${params.filename}.md` };
  let data = {};
  try {
    data = await staticRequest({
      query,
      variables,
    });
  } catch {
    // swallow errors related to document creation
  }
  // export const getStaticProps = async ({ locale }) => {
  //   return {
  //     props: {
  //       ...(await serverSideTranslations(locale, ["common", "press"])),
  //     },
  //   };
  // };

  return {
    props: {
      variables,
      data,
      ...(await serverSideTranslations(locale, ["common", "press"])),
    },
  };
};

export const getStaticPaths = async () => {
  const postsListData: any = await staticRequest({
    query: gql`
      query GetPostsList {
        getPostsList {
          edges {
            node {
              sys {
                filename
              }
            }
          }
        }
      }
    `,
  });

  return {
    paths: postsListData.getPostsList.edges.map((post) => ({
      params: { filename: post.node.sys.filename },
    })),
    fallback: false,
  };
};

export default Press;
