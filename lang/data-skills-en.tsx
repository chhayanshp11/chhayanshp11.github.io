import pythonImg from "../public/img/skills/python.svg";
import cppImg from "../public/img/skills/cpp.svg";
import sqlImg from "../public/img/skills/sql.svg";
import sparkImg from "../public/img/skills/spark.svg";
import kafkaImg from "../public/img/skills/kafka.svg";
import hadoopImg from "../public/img/skills/hadoop.svg";
import airflowImg from "../public/img/skills/airflow.svg";
import confluentImg from "../public/img/skills/confluent.svg";
import postmanImg from "../public/img/skills/postman.svg";
import postgresImg from "../public/img/skills/postgres.svg";
import mysqlImg from "../public/img/skills/mysql.svg";
import dynamodbImg from "../public/img/skills/dynamodb.svg";
import opensearchImg from "../public/img/skills/opensearch.svg";
import snowflakeImg from "../public/img/skills/snowflake.svg";
import awsImg from "../public/img/skills/aws.svg";
import gcpImg from "../public/img/skills/gcp.svg";
import dockerImg from "../public/img/skills/docker.svg";
import terraformImg from "../public/img/skills/terraform.svg";
import huggingfaceImg from "../public/img/skills/huggingface.svg";
import langchainImg from "../public/img/skills/langchain.svg";
import langgraphImg from "../public/img/skills/langgraph.svg";
import openaiImg from "../public/img/skills/openai.svg";
import chatgptImg from "../public/img/skills/chatgpt.svg";
import claudeImg from "../public/img/skills/claude.svg";
import geminiImg from "../public/img/skills/gemini.svg";
import ragImg from "../public/img/skills/rag.svg";
import vectordbImg from "../public/img/skills/vectordb.svg";
import promptEngImg from "../public/img/skills/prompt-eng.svg";
import finetuningImg from "../public/img/skills/finetuning.svg";
import tableauImg from "../public/img/skills/tableau.svg";
import matplotlibImg from "../public/img/skills/matplotlib.svg";
import pandasImg from "../public/img/skills/pandas.svg";
import pysparkImg from "../public/img/skills/pyspark.svg";
import deltalakeImg from "../public/img/skills/deltalake.svg";
import icebergImg from "../public/img/skills/iceberg.svg";
import parquetImg from "../public/img/skills/parquet.svg";
import avroImg from "../public/img/skills/avro.svg";
import gitImg from "../public/img/skills/git.svg";
import githubImg from "../public/img/skills/github.svg";
import cicdImg from "../public/img/skills/cicd.svg";
import linuxImg from "../public/img/skills/linux.svg";
import bashImg from "../public/img/skills/bash.svg";
import datalineageImg from "../public/img/skills/datalineage.svg";
import datazoneImg from "../public/img/skills/datazone.svg";

const skills = [
  {
    id: 1,
    title: "Programming & API",
    subSkills: [
      { name: "Python", image: pythonImg, url: "https://www.python.org/" },
      { name: "C / C++", image: cppImg, url: "https://en.cppreference.com/" },
      { name: "SQL", image: sqlImg, url: "https://en.wikipedia.org/wiki/SQL" },
      { name: "API", image: postmanImg, url: "https://www.postman.com/" },
    ],
  },
  {
    id: 2,
    title: "Data Engineering",
    subSkills: [
      { name: "Spark", image: sparkImg, url: "https://spark.apache.org/" },
      { name: "Kafka", image: kafkaImg, url: "https://kafka.apache.org/" },
      { name: "Hadoop", image: hadoopImg, url: "https://hadoop.apache.org/" },
      { name: "Airflow", image: airflowImg, url: "https://airflow.apache.org/" },
      { name: "Confluent", image: confluentImg, url: "https://www.confluent.io/" },
    ],
  },
  {
    id: 3,
    title: "Databases",
    subSkills: [
      { name: "PostgreSQL", image: postgresImg, url: "https://www.postgresql.org/" },
      { name: "MySQL", image: mysqlImg, url: "https://www.mysql.com/" },
      { name: "DynamoDB", image: dynamodbImg, url: "https://aws.amazon.com/dynamodb/" },
      { name: "OpenSearch", image: opensearchImg, url: "https://opensearch.org/" },
      { name: "Snowflake", image: snowflakeImg, url: "https://www.snowflake.com/" },
    ],
  },
  {
    id: 4,
    title: "Cloud & Infra",
    subSkills: [
      { name: "AWS", image: awsImg, url: "https://aws.amazon.com/" },
      { name: "GCP", image: gcpImg, url: "https://cloud.google.com/" },
      { name: "Docker", image: dockerImg, url: "https://www.docker.com/" },
      { name: "Terraform", image: terraformImg, url: "https://www.terraform.io/" },
    ],
  },
  {
    id: 5,
    title: "AI & GenAI",
    subSkills: [
      { name: "Hugging Face", image: huggingfaceImg, url: "https://huggingface.co/" },
      { name: "LangChain", image: langchainImg, url: "https://www.langchain.com/" },
      { name: "LangGraph", image: langgraphImg, url: "https://langchain-ai.github.io/langgraph/" },
      { name: "OpenAI", image: openaiImg, url: "https://openai.com/" },
      { name: "ChatGPT", image: chatgptImg, url: "https://chat.openai.com/" },
      { name: "Claude", image: claudeImg, url: "https://claude.ai/" },
      { name: "Gemini", image: geminiImg, url: "https://gemini.google.com/" },
      { name: "RAG", image: ragImg, url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation" },
      { name: "Vector DB", image: vectordbImg, url: "https://www.pinecone.io/" },
      { name: "Prompt Eng.", image: promptEngImg, url: "https://en.wikipedia.org/wiki/Prompt_engineering" },
      { name: "Fine-tuning", image: finetuningImg, url: "https://platform.openai.com/docs/guides/fine-tuning" },
    ],
  },
  {
    id: 6,
    title: "Data Viz",
    subSkills: [
      { name: "Tableau", image: tableauImg, url: "https://www.tableau.com/" },
      { name: "Matplotlib", image: matplotlibImg, url: "https://matplotlib.org/" },
    ],
  },
  {
    id: 7,
    title: "Data Formats",
    subSkills: [
      { name: "Pandas", image: pandasImg, url: "https://pandas.pydata.org/" },
      { name: "PySpark", image: pysparkImg, url: "https://spark.apache.org/docs/latest/api/python/" },
      { name: "Delta Lake", image: deltalakeImg, url: "https://delta.io/" },
      { name: "Iceberg", image: icebergImg, url: "https://iceberg.apache.org/" },
      { name: "Parquet", image: parquetImg, url: "https://parquet.apache.org/" },
      { name: "Avro", image: avroImg, url: "https://avro.apache.org/" },
    ],
  },
  {
    id: 8,
    title: "DevOps & Tools",
    subSkills: [
      { name: "Git", image: gitImg, url: "https://git-scm.com/" },
      { name: "GitHub", image: githubImg, url: "https://github.com/" },
      { name: "CI/CD", image: cicdImg, url: "https://en.wikipedia.org/wiki/CI/CD" },
      { name: "Linux", image: linuxImg, url: "https://www.linux.org/" },
      { name: "Bash", image: bashImg, url: "https://www.gnu.org/software/bash/" },
    ],
  },
  {
    id: 9,
    title: "Data Governance",
    subSkills: [
      { name: "Data Lineage", image: datalineageImg, url: "https://en.wikipedia.org/wiki/Data_lineage" },
      { name: "AWS DataZone", image: datazoneImg, url: "https://aws.amazon.com/datazone/" },
    ],
  },
];

export default skills;
