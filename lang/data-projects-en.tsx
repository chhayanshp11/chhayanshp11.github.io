/**
 * Contient toutes les informations relatives au projets.
 */

import wallpaperGeneratorImg from "../public/img/projects/WallpaperGenerator.png";
import neuralNetworkFromScratchImg from "../public/img/projects/NeuralNetwork.png";
import rayTracingImg from "../public/img/projects/RayTracing.png";

const projects = [
  {
    id: 1,
    title: "End to End Data Engineering on AWS",
 description:
    "Spearheaded a YouTube video analysis project, leveraging Python and AWS services (S3, Glue, Lambda) to extract, transform and load the data in Redshift warehouse empowering real-time analytics with 50% quicker responses using Athena.",
    image_path: wallpaperGeneratorImg,
    link: "https://github.com/chhayanshp11",
    color: "#c2410c",
  },
  {
    id: 2,
    title: "Truck Fleet Risk Analysis",
  description:
    "Ingested 10000 records to HDFS with Sqoop and analyzed using Hive and Pig to find top 5 risky drivers and over-used trucks. Integrated HDFS with Tableau for forecasting vehicle maintenance and driver safety with 92% accuracy.",
 
    image_path: neuralNetworkFromScratchImg,
    link: "https://github.com/chhayanshp11",
    color: "#0f766e",
  },
  {
    id: 3,
    title: "Healthcare Rules Engine",
  description:
    "Developed and implemented a Rules Engine for a leading healthcare company, resulting in 60% increase in efficiency for their Registry Quality Control Management System by capturing changed data and conducting logic rule checks using SQL.",
 
    image_path: rayTracingImg,
    link: "https://github.com/chhayanshp11",
    color: "#6d28d9",
  },
];

export default projects;
