---
layout: page
title: Projects
permalink: /projects/
---

# Data Engineering Projects

## Production Data Platforms

### Real-Time Data Pipeline Platform — NatWest Bank
**Duration:** September 2025 - Present  
**Role:** Data Engineer

Building and maintaining production-grade data pipelines that process millions of transactions daily, supporting analytics, reporting, and regulatory requirements across the organization.

**Architecture:**
- **Ingestion Layer:** Real-time streaming via Apache Kafka from transaction systems
- **Storage Layer:** Raw data landing in Amazon S3 with partitioning strategies
- **Processing Layer:** PySpark distributed processing for transformation and validation
- **Warehouse Layer:** Curated datasets in Snowflake with optimized data models
- **Orchestration:** Apache Airflow DAGs managing 40+ interdependent pipelines
- **Analytics:** Tableau dashboards connecting to Snowflake for business intelligence

**Key Features:**
- Real-time data ingestion handling peak loads of 10K+ events/second
- Three-zone architecture (Raw → Curated → Refined) for data reliability
- Data quality framework with automated validation and alerting
- Incremental processing patterns for efficient compute usage
- Monitoring and observability with SLA tracking

**Technologies:** Apache Kafka, PySpark, Amazon S3, Snowflake, Apache Airflow, Tableau, Python, SQL

**Impact:**
- Enables real-time analytics for business decision-making
- Supports regulatory reporting with audit trails and data lineage
- Reduced data processing latency from hours to minutes
- Improved data quality through automated validation
- **Recovery time reduced from 6 hours to 30 minutes** through three-zone architecture

---

### Enterprise Cloud Data Platform — Accenture
**Duration:** July 2023 - August 2025  
**Role:** Data Engineer

Delivered large-scale cloud data engineering solutions for Fortune 500 clients across multiple industries, building scalable platforms on Azure and AWS.

**Solutions Delivered:**

**Azure Databricks Data Lakehouse:**
- Unified analytics platform combining data lake and warehouse capabilities
- Delta Lake for ACID transactions and time travel
- Unity Catalog for data governance and access control
- AutoLoader for incremental ingestion from cloud storage

**Snowflake Data Warehouse:**
- Multi-tenant architecture supporting multiple business units
- Zero-copy cloning for dev/test environments
- Time Travel and Fail-safe for data recovery
- Secure data sharing with external partners

**Microsoft Fabric Unified Analytics:**
- Lakehouse architecture with OneLake storage
- Data pipelines for orchestration
- Power BI integration for self-service analytics
- Real-time analytics with KQL databases

**Key Achievements:**
- Built end-to-end data platforms serving 1000+ users
- Migrated legacy ETL to cloud-native ELT patterns
- Implemented CI/CD pipelines reducing deployment time by 70%
- Designed data mesh architecture with domain-oriented ownership

**Technologies:** Azure Databricks, Snowflake, Azure Data Factory, Azure Data Lake, Microsoft Fabric, PySpark, dbt, Terraform, GitHub Actions, Python, SQL

**Impact:**
- Enabled data-driven decision making for enterprise clients
- Reduced infrastructure costs through cloud-native optimization
- Improved time-to-insight with self-service analytics
- Established data governance and security frameworks

---

### Business Intelligence Platform — Dpoint Group
**Duration:** May 2022 - June 2023  
**Location:** Barcelona, Spain  
**Role:** Data Engineer

Developed BI and analytics solutions supporting operational reporting and executive dashboards for manufacturing and logistics operations.

**Solutions Built:**

**ETL Pipeline Architecture:**
- SSIS packages extracting data from SAP BW
- Transformation layer cleaning and standardizing data
- Azure SQL Database as centralized data warehouse
- Incremental loading strategies for efficiency

**Power BI Dashboards:**
- Executive KPI dashboards with drill-down capabilities
- Operational reports for supply chain visibility
- Financial analytics with budget vs. actuals tracking
- Mobile-optimized dashboards for field teams

**Automation Initiatives:**
- Python scripts for recurring report generation
- Excel VBA macros for data preparation
- Scheduled workflows in Azure Data Factory
- Email distribution of reports to stakeholders

**Technologies:** SSIS, SAP BW, Power BI, Azure Data Factory, Azure SQL Database, Python, Excel VBA, SQL

**Impact:**
- Automated 30+ manual reporting processes
- Reduced report generation time from days to hours
- Improved data accuracy through standardized processes
- Enabled self-service analytics for business users

---

## Personal Projects & Learning

### Real-Time Data Quality Monitoring with ML
**GitHub:** [kalluripradeep/realtime-data-quality-monitor](https://github.com/kalluripradeep/realtime-data-quality-monitor)
**Status:** ✅ Production-Ready

ML-powered real-time data quality monitoring system that detects anomalies in streaming data with sub-10ms latency, preventing data quality issues before they reach production systems.

**Architecture:**
- **Streaming Ingestion:** Apache Kafka consuming 600+ events per minute
- **Real-Time Processing:** Spark Structured Streaming with micro-batch processing
- **ML Anomaly Detection:** Isolation Forest algorithm detecting quality issues in real-time
- **Data Storage:** PostgreSQL for metrics, checkpointing for exactly-once semantics
- **Quality Scoring:** Multi-dimensional quality assessment (completeness, accuracy, freshness)
- **Monitoring:** Real-time dashboards tracking quality scores and anomaly rates

**Key Features:**
- **Sub-10ms latency** for ML-based quality scoring on streaming data
- **93% quality scores** maintained across all test pipelines
- **332,000+ orders processed** through the monitoring pipeline
- **Automatic anomaly detection** using Isolation Forest trained on historical patterns
- **Multi-dimensional quality checks:** Completeness, uniqueness, validity, consistency, accuracy, timeliness
- **Exactly-once processing** with Kafka checkpointing and idempotent operations
- **Real-time alerting** when quality scores drop below thresholds

**Technical Implementation:**
- Kafka consumer with configurable batch sizes for optimal throughput
- scikit-learn Isolation Forest model trained on 51+ historical quality samples
- PostgreSQL for storing quality metrics with time-series analysis
- Configurable quality thresholds per data source
- Comprehensive logging and error handling

**Technologies:** Apache Kafka, Spark Structured Streaming, Python, scikit-learn, PostgreSQL, Isolation Forest ML, pandas

**Impact:**
- 332K+ orders processed with 93% quality scores maintained
- Sub-10ms latency proves feasibility for high-throughput production systems
- Demonstrates production-ready ML integration with streaming data
- Provides reusable framework for data quality monitoring

---

### Modern ETL / Data Platform
**GitHub:** [kalluripradeep/modern-etl-stack](https://github.com/kalluripradeep/modern-etl-stack)
**Status:** ✅ Open Source

A full modern data engineering platform built from scratch, demonstrating enterprise-grade architecture at zero cost. A cost-effective alternative to commercial enterprise tools, potentially saving companies £100K+ annually.

**Architecture:**
- **Orchestration:** Apache Airflow managing end-to-end pipeline workflows
- **Change Data Capture:** Apache Kafka with Debezium for real-time CDC from source databases
- **Processing:** Apache Spark for distributed transformation at scale
- **Transformation Layer:** dbt with Bronze → Silver → Gold medallion architecture
- **Storage:** PostgreSQL as source system, MinIO as S3-compatible object store
- **Monitoring:** Prometheus + Grafana for pipeline observability and alerting

**Key Features:**
- **1,000+ orders** processed with real-time CDC and sub-second latency
- **Medallion architecture** (Bronze/Silver/Gold) for reliable, layered data quality
- **Real-time CDC** via Debezium — captures every insert, update, and delete
- **Full observability** with Prometheus metrics and Grafana dashboards
- **Fully containerised** — runs locally with Docker Compose
- **Cost-effective** — replicates £100K+ enterprise tooling with open source components

**Technologies:** Apache Airflow, Apache Kafka, Debezium, Apache Spark, dbt, PostgreSQL, MinIO, Prometheus, Grafana, Docker

**Impact:**
- Demonstrates a complete modern data stack that any team can self-host
- Open sourced to help data engineers learn and adopt best practices
- Shows end-to-end CDC pipeline patterns rarely documented in full

---

### E-commerce Data Pipeline
**GitHub:** [kalluripradeep/ecommerce-data-pipeline](https://github.com/kalluripradeep/ecommerce-data-pipeline)

End-to-end data pipeline demonstrating modern data engineering practices. Simulates e-commerce transaction processing with focus on data quality and testing.

**Features:**
- PySpark transformations with unit tests
- Apache Airflow orchestration
- Data quality validation framework
- dbt data modeling
- Docker containerization

**Technologies:** PySpark, Apache Airflow, dbt, Docker, Python, SQL

---

## Open Source Contributions

Beyond client and personal projects, I actively contribute to open-source data engineering tools:

- **Apache Airflow** - 3 merged PRs: documentation, bug fixes, and community reviews ([#58587](https://github.com/apache/airflow/pull/58587), [#59938](https://github.com/apache/airflow/pull/59938), [#61005](https://github.com/apache/airflow/pull/61005))
- **dbt-core** - 1 merged PR + 2 active contributions ([PRs](https://github.com/dbt-labs/dbt-core/pulls?q=is%3Apr+author%3Akalluripradeep))

[View all open source contributions →](/opensource/)

---

## Technical Writing

I document lessons learned from these projects through technical writing:

- **71,000+ views** across Medium and Dev.to
- **5 published articles** on data pipeline architecture and debugging
- **Featured discussions** on Reddit r/dataengineering

[Read my technical articles →](/articles/)

---

## Speaking Engagements

I share production lessons through conference talks and meetups:

- **Oxford Microsoft Data Platform Group** (January 2026) - Completed
- Topic: "From Raw to Refined: Building Production Data Pipelines That Scale"
- Invited back for dedicated Apache Airflow session

[View all speaking engagements →](/speaking/)

---

[← Back to Home](/) | [View Experience →](/experience/)