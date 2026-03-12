/**
 * Metadatas
 */

import type { Metadata } from "next";

const metadataInfos: Metadata = {
  title: "Chhayansh Purohit | Data Engineer Portfolio",
  description:
    "Portfolio of Chhayansh Purohit — Senior Data Engineer specializing in scalable data architectures, AWS cloud solutions, and real-time streaming pipelines. Explore my projects, certifications, publications, and photography.",
  keywords: [
    "Chhayansh Purohit",
    "Data Engineer",
    "Senior Data Engineer",
    "portfolio",
    "AWS",
    "PySpark",
    "Redshift",
    "Terraform",
    "Python",
    "ETL pipelines",
    "cloud computing",
    "data architecture",
    "LPL Financial",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Chhayansh Purohit", url: "https://github.com/chhayanshp11" }],
  creator: "Chhayansh Purohit",
  publisher: "Chhayansh Purohit",
  openGraph: {
    title: "Chhayansh Purohit | Data Engineer Portfolio",
    description:
      "Senior Data Engineer specializing in scalable data architectures, AWS cloud solutions, and real-time streaming pipelines. Explore projects, certifications, and travel photography.",
    url: "https://chhayanshp11.github.io",
    siteName: "Chhayansh Purohit Portfolio",
    images: [
      {
        url: "/preview.png",
        width: 1856,
        height: 928,
        alt: "Preview of Chhayansh Purohit's Data Engineer portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "favicon.png",
  },
  metadataBase: new URL("https://chhayanshp11.github.io"),
};

export default metadataInfos;