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

## Personal Projects & Open Source

### Real-Time Data Quality Monitoring System
**GitHub:** [kalluripradeep/realtime-data-quality-monitor](https://github.com/kalluripradeep/realtime-data-quality-monitor)  
**Status:** Production-Ready | **Built:** January 2026

Production-grade streaming data quality monitoring system that detects and classifies data quality issues in real-time. Solves the critical problem of discovering data quality issues days or weeks after they occur.

**Problem Statement:**
Data quality issues in production pipelines often go undetected until they cascade through analytics, ML models, and reports—causing business decisions to be made on bad data. Traditional batch validation runs hours or days after data arrival.

**Solution:**
Event-driven microservices architecture processing streaming data with real-time quality checks across multiple dimensions, providing immediate visibility into data health.

**Architecture:**
- **Message Streaming:** Apache Kafka ingesting 10 orders/second with configurable quality issues
- **Stream Processing:** Python-based quality monitor with multi-dimensional validation
- **Storage Layer:** PostgreSQL storing metrics, issues, and windowed aggregations
- **Visualization:** Streamlit dashboard with live updates and historical trend analysis
- **Deployment:** Docker Compose orchestrating 6 containerized microservices

**Quality Dimensions Monitored:**
- **Completeness (99%):** Missing values, null fields, schema violations
- **Timeliness (94%):** Data latency, delayed arrivals, freshness checks  
- **Accuracy (95%):** Data type validation, range checks, format validation

**Key Features:**
- Real-time quality scoring with weighted dimension analysis
- Severity-based issue classification (critical, high, medium, low)
- 60-second windowed aggregation for statistical analysis
- Configurable thresholds and alerting rules
- Historical trend analysis with interactive charts
- RESTful metrics API for integration with monitoring tools

**Production Metrics (Live System - 3 Hours):**
- 📊 **92,628 orders processed** with sub-100ms latency per record
- 🔍 **26,016 quality issues detected** and classified by severity
- ⭐ **96.58% average quality score** maintained across dimensions
- 🎯 **Issue Breakdown:** 5,618 critical | 15,038 high | 5,624 medium | 2 low
- ⚡ **10 orders/second throughput** with horizontal scalability

**Technologies:** Apache Kafka 7.5, Python 3.11, PostgreSQL 15, Streamlit 1.31, Docker, Pandas, Plotly, psycopg2

**Technical Highlights:**
- Event-driven architecture enabling independent service scaling
- Windowed stream processing for efficient aggregation
- Idempotent processing ensuring exactly-once semantics
- Comprehensive observability with structured logging
- Infrastructure as Code with Docker Compose

**Use Cases:**
- Real-time data pipeline health monitoring
- SLA compliance tracking and reporting
- Proactive anomaly detection before downstream impact
- Data governance and regulatory audit trails
- Root cause analysis with detailed issue logs

**Impact:**
- Reduces mean time to detection (MTTD) from days to seconds
- Enables proactive issue resolution preventing cascade failures
- Provides comprehensive audit trail for compliance
- Supports data quality SLA agreements with stakeholders

---

### E-commerce Data Pipeline
**GitHub:** [kalluripradeep/ecommerce-data-pipeline](https://github.com/kalluripradeep/ecommerce-data-pipeline)

End-to-end data pipeline demonstrating modern data engineering practices. Simulates e-commerce transaction processing with focus on data quality, testing, and best practices.

**Features:**
- PySpark transformations with comprehensive unit tests
- Apache Airflow orchestration with dependency management
- Data quality validation framework with automated checks
- dbt data modeling with documentation and tests
- Docker containerization for reproducible environments
- CI/CD pipeline with automated testing

**Technologies:** PySpark, Apache Airflow, dbt, Docker, Python, SQL, Great Expectations

**Impact:**
- Demonstrates production-ready data engineering patterns
- Reference implementation for data quality frameworks
- Educational resource for aspiring data engineers

---

## Open Source Contributions

Active contributor to major data engineering open-source projects with merged code and documentation improvements:

**Apache Airflow:**
- Documentation improvements ([merged PR #58587](https://github.com/apache/airflow/pull/58587))
- Pool name normalization feature ([approved PR #59938](https://github.com/apache/airflow/pull/59938))

**dbt-core:**
- Feature additions and bug fixes ([active PRs](https://github.com/dbt-labs/dbt-core/pulls?q=is%3Apr+author%3Akalluripradeep))

**Confluent Kafka Python:**
- Client improvements ([submitted PR](https://github.com/confluentinc/confluent-kafka-python/pulls?q=is%3Apr+author%3Akalluripradeep))

[View all open source contributions →](/opensource/)

---

## Technical Writing & Community

Documenting lessons learned and best practices from production data engineering:

**Published Articles:**
- **71,000+ total views** across Medium, Dev.to, and Hashnode
- **6 technical articles** on data pipeline architecture, debugging, and best practices
- **Featured discussions** on Reddit r/dataengineering
- **LinkedIn posts** with 7,000+ impressions reaching data engineering community

**Recent Topics:**
- Real-time data quality monitoring architectures
- Contributing to Apache Airflow open source
- Production data pipeline debugging strategies
- Apache Airflow configuration best practices

[Read my technical articles →](/articles/)

---

## Technical Skills Demonstrated

**Streaming & Real-Time:**
- Apache Kafka (producers, consumers, topics)
- Stream processing architectures
- Event-driven microservices
- Real-time analytics

**Data Processing:**
- PySpark (transformations, optimizations)
- Batch and micro-batch processing
- Data quality frameworks
- ETL/ELT patterns

**Orchestration & Workflow:**
- Apache Airflow (DAGs, operators, sensors)
- Dependency management
- Retry strategies
- Monitoring and alerting

**Storage & Databases:**
- PostgreSQL (ACID, indexing, queries)
- Snowflake (warehousing, optimization)
- Data modeling (star schema, dimensional)
- S3 (partitioning, lifecycle)

**DevOps & Infrastructure:**
- Docker & Docker Compose
- CI/CD pipelines
- Infrastructure as Code
- Monitoring and observability

**Languages & Tools:**
- Python (pandas, numpy, pytest)
- SQL (complex queries, optimization)
- Bash scripting
- Git (version control, collaboration)

---

[← Back to Home](/) | [View Experience →](/experience/) | [View Open Source →](/opensource/)