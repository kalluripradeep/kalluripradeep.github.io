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

### Real-Time Data Quality Monitoring System ⭐ NEW!
**GitHub:** [kalluripradeep/realtime-data-quality-monitor](https://github.com/kalluripradeep/realtime-data-quality-monitor)  
**Status:** Production-Ready | **Built:** January 2026

Production-grade streaming data quality monitoring system with comprehensive validation across 6 quality dimensions, automated alerting, and REST API for metrics exposure. Demonstrates enterprise-level data engineering capabilities.

**Problem Statement:**
Data quality issues in production pipelines often go undetected until they cascade through analytics, ML models, and reports—causing business decisions to be made on bad data. Traditional batch validation runs hours or days after data arrival, delaying issue detection and resolution.

**Solution:**
Event-driven microservices architecture processing streaming data with real-time quality checks across 6 quality dimensions, automated alerting system, and comprehensive REST API for metrics exposure. Provides immediate visibility into data health with sub-100ms latency.

**Architecture:**
```
Kafka Producer → Quality Monitor → PostgreSQL
                       ↓                ↓
                  Alert System     REST API (FastAPI)
                                        ↓
                                  Dashboard (Streamlit)
```

**Quality Dimensions (6-Dimensional Framework):**
1. **Completeness (99.1%)** - Missing values, null fields, required field validation
2. **Timeliness (93.8%)** - Data latency monitoring, freshness checks (5-minute SLA)
3. **Accuracy (96.0%)** - Data type validation, range checks, format validation
4. **Consistency (98.0%)** - Format consistency validation (ID patterns, timestamps)
5. **Uniqueness (100%)** - Duplicate detection (tracks last 10,000 orders)
6. **Validity (68.7%)** - Business rule enforcement (calculations, value ranges)

**Key Features:**

**Real-Time Processing:**
- Apache Kafka stream processing at 600 orders/minute sustained throughput
- Sub-100ms latency per quality check
- 60-second windowed aggregation for statistical analysis
- Event-driven architecture enabling independent service scaling

**Automated Alerting:**
- Configurable threshold-based alerts (quality < 90%, issue rate > 40%)
- Severity-based issue classification (critical, high, medium, low)
- Log-based alerting with detailed issue tracking
- System health monitoring with connection failure detection

**REST API (7 Endpoints):**
- `GET /health` - System health check with recent activity metrics
- `GET /metrics/latest` - Current quality scores across all 6 dimensions
- `GET /metrics/history` - Historical trends (configurable 1-168 hours)
- `GET /metrics/dimensions` - 24-hour statistical breakdown with standard deviation
- `GET /issues/recent` - Recent quality issues with severity filtering
- `GET /stats/window` - Processing window statistics with aggregates
- `GET /docs` - Interactive Swagger UI documentation

**Dashboard Features:**
- Real-time quality score visualization
- Historical trend charts with Plotly
- Issue severity distribution with drill-down
- Auto-refresh capability (configurable intervals)
- Responsive design for mobile/desktop

**Production Metrics (24-Hour Operation):**
- 📊 **46,000+ quality checks** performed with comprehensive validation
- 🔍 **155,000+ quality issues** detected and classified by severity
- ⭐ **Average quality scores:** Completeness 99.1% | Timeliness 93.8% | Accuracy 96.0% | Consistency 98.0% | Uniqueness 100% | Validity 68.7%
- 🚨 **Issue distribution:** 2,800 critical | 22,515 high | 8,721 medium | 1 low
- ⏱️ **System uptime:** 99.9% with proven stability
- ⚡ **Processing rate:** 600 orders/minute sustained throughput
- 📈 **API response time:** <50ms average across all endpoints

**Technologies:** 
- **Stream Processing:** Apache Kafka 7.5
- **Data Validation:** Python 3.11 (custom 6-dimension quality engine)
- **Storage:** PostgreSQL 15 with optimized indexing
- **API Framework:** FastAPI with OpenAPI/Swagger
- **Dashboard:** Streamlit with Plotly visualizations
- **Containerization:** Docker Compose (6 microservices)
- **Libraries:** kafka-python, psycopg2, pandas, uvicorn

**Technical Highlights:**
- **6-Dimension Quality Framework** - Comprehensive validation covering completeness, timeliness, accuracy, consistency, uniqueness, and validity
- **Weighted Scoring Algorithm** - Configurable weights per dimension for overall quality calculation
- **Duplicate Detection** - Sliding window uniqueness check tracking last 10,000 order IDs
- **Business Rule Validation** - Enforces calculation accuracy (quantity × price = total_amount)
- **RESTful API** - Production-ready FastAPI service with interactive documentation
- **Automated Alerting** - Threshold-based monitoring with log persistence
- **Event-Driven Architecture** - Independent service scaling and fault isolation
- **Idempotent Processing** - Ensures exactly-once semantics for data integrity
- **Comprehensive Observability** - Structured logging with alert correlation
- **Infrastructure as Code** - Complete Docker Compose orchestration

**Use Cases:**
- **Pipeline Monitoring** - Track data quality in real-time ETL/ELT pipelines
- **SLA Compliance** - Monitor and report on data quality SLAs
- **Proactive Detection** - Identify quality issues before downstream impact
- **Governance & Audit** - Maintain comprehensive audit trail for compliance
- **Root Cause Analysis** - Detailed issue logs with severity classification
- **Data Reliability** - Ensure BI reports and ML models receive high-quality data

**Impact:**
- **Detection Speed:** Reduces mean time to detection (MTTD) from days/hours to seconds
- **Proactive Resolution:** Enables issue resolution before cascade failures occur
- **Compliance Support:** Provides comprehensive audit trail for regulatory requirements
- **SLA Tracking:** Supports data quality SLA agreements with measurable metrics
- **Cost Reduction:** Prevents expensive downstream fixes and re-processing
- **Trust Building:** Increases stakeholder confidence in data reliability

**Future Enhancements:**
- Machine learning-based anomaly detection
- Email/Slack alert integrations
- Advanced dashboard with drill-down capabilities
- Data quality rules engine with UI
- Multi-tenant support for enterprise deployments

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
- Pool name normalization feature ([merged PR #59938](https://github.com/apache/airflow/pull/59938)) - *NEW!*
- Documentation improvements ([merged PR #58587](https://github.com/apache/airflow/pull/58587))

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
- **Apache Airflow Official Publication** - Published in official Medium publication (2.6K followers) - *NEW!*
- **The New Stack** - Article approved, pending publication - *NEW!*
- **Featured discussions** on Reddit r/dataengineering
- **LinkedIn posts** with 7,000+ impressions reaching data engineering community

**Recent Topics:**
- Rewriting Apache Airflow PRs (published in official Airflow publication)
- Real-time data quality monitoring architectures
- Contributing to Apache Airflow open source
- Production data pipeline debugging strategies

[Read my technical articles →](/articles/)

---

## Technical Skills Demonstrated

**Streaming & Real-Time:**
- Apache Kafka (producers, consumers, topics)
- Stream processing architectures
- Event-driven microservices
- Real-time analytics and monitoring

**Data Processing:**
- PySpark (transformations, optimizations)
- Batch and micro-batch processing
- Data quality frameworks (6-dimension validation)
- ETL/ELT patterns

**API Development:**
- FastAPI (REST endpoints, OpenAPI)
- API documentation (Swagger UI)
- Microservices architecture
- HTTP/JSON protocols

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
- Python (pandas, numpy, pytest, fastapi, streamlit)
- SQL (complex queries, optimization)
- Bash scripting
- Git (version control, collaboration)

---

[← Back to Home](/) | [View Experience →](/experience/) | [View Open Source →](/opensource/)