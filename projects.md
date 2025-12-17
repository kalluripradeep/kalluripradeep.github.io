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
- **Orchestration:** Apache Airflow DAGs managing dependencies and scheduling
- **Analytics:** Tableau dashboards connecting to Snowflake for business intelligence

**Key Features:**
- Real-time data ingestion handling peak loads of 10K+ events/second
- Multi-stage transformation pipeline (Raw → Cleaned → Business layers)
- Data quality framework with automated validation and alerting
- Incremental processing patterns for efficient compute usage
- Monitoring and observability with SLA tracking

**Technologies:** Apache Kafka, PySpark, Amazon S3, Snowflake, Apache Airflow, Tableau, Python, SQL

**Impact:**
- Enables real-time analytics for business decision-making
- Supports regulatory reporting with audit trails and data lineage
- Reduced data processing latency from hours to minutes
- Improved data quality through automated validation

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

- **Apache Airflow** - Documentation improvements ([merged PR](https://github.com/apache/airflow/pull/58587))
- **dbt-core** - Feature additions ([active PRs](https://github.com/dbt-labs/dbt-core/pulls?q=is%3Apr+author%3Akalluripradeep))

[View all open source contributions →](/opensource/)

---

## Technical Writing

I document lessons learned from these projects through technical writing:

- **71,000+ views** across Medium and Dev.to
- **5 published articles** on data pipeline architecture and debugging
- **Featured discussions** on Reddit r/dataengineering

[Read my technical articles →](/articles/)

---

[← Back to Home](/) | [View Experience →](/experience/)
