/**
 * Contient toutes les informations relatives au skills.
 */

import dockerImg from "../public/img/skills/docker.svg";
import gitImg from "../public/img/skills/git.svg";
import cImg from "../public/img/skills/c.svg";
import cppImg from "../public/img/skills/cpp.svg";
import pythonImg from "../public/img/skills/python.svg";

// Nouveaux imports téléchargés
import awsImg from "../public/img/skills/aws.svg";
import gcpImg from "../public/img/skills/gcp.svg";
import kafkaImg from "../public/img/skills/kafka.svg";
import hadoopImg from "../public/img/skills/hadoop.svg";
import mysqlImg from "../public/img/skills/mysql.svg";
import postgresImg from "../public/img/skills/postgres.svg";
import rImg from "../public/img/skills/r.svg";
import sparkImg from "../public/img/skills/spark.svg";
import sqlImg from "../public/img/skills/sql.svg";


const skills = [
  {
    id: 1,
    title: "Cloud & Architecture",
    subSkills: [
      {
        name: "AWS",
        image: awsImg,
        url: "https://aws.amazon.com/"
      },
      {
        name: "GCP",
        image: gcpImg,
        url: "https://cloud.google.com/"
      },
      {
        name: "Docker",
        image: dockerImg,
        url: "https://www.docker.com/"
      },
    ],
  },
  {
    id: 2,
    title: "Data Engineering",
    subSkills: [
      {
        name: "Apache Spark",
        image: sparkImg,
        url: "https://spark.apache.org/"
      },
      {
        name: "Hadoop",
        image: hadoopImg,
        url: "https://hadoop.apache.org/"
      },
      {
        name: "Kafka",
        image: kafkaImg,
        url: "https://kafka.apache.org/"
      },
    ],
  },
  {
    id: 3,
    title: "Databases",
    subSkills: [
      {
        name: "MySQL",
        image: mysqlImg,
        url: "https://www.mysql.com/"
      },
      {
        name: "PostgreSQL",
        image: postgresImg,
        url: "https://www.postgresql.org/"
      },
      {
        name: "SQL",
        image: sqlImg,
        url: "https://en.wikipedia.org/wiki/SQL"
      },
    ],
  },
  {
    id: 4,
    title: "Programming",
    subSkills: [
      {
        name: "Python",
        image: pythonImg,
        url: "https://www.python.org/"
      },
      {
        name: "R",
        image: rImg,
        url: "https://www.r-project.org/"
      },
      {
        name: "C / C++",
        image: cppImg,
        url: "https://en.cppreference.com/w/cpp"
      },
    ],
  },
  {
    id: 5,
    title: "Tools & Versioning",
    subSkills: [
      {
        name: "Git",
        image: gitImg,
        url: "https://git-scm.com/"
      },
    ],
  },
];

export default skills;
