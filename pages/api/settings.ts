import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      res.status(200).json({
        incubations: {
          "pt-BR": parseInt(process.env.INCUBATIONS_WIDGET_ID),
          en: parseInt(process.env.INCUBATIONS_EN_WIDGET_ID),
        },
        materials: {
          "pt-BR": parseInt(process.env.MATERIALS_WIDGET_ID),
          en: parseInt(process.env.MATERIALS_EN_WIDGET_ID),
        },
        donation: {
          "pt-BR": parseInt(process.env.DONATION_WIDGET_ID),
          en: parseInt(process.env.DONATION_EN_WIDGET_ID),
        },
        newsletter: {
          "pt-BR": parseInt(process.env.NEWSLETTER_WIDGET_ID),
          en: parseInt(process.env.NEWSLETTER_EN_WIDGET_ID),
        },
      });
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: err.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
