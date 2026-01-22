---
layout: page
title: Speaking
permalink: /speaking/
---

# Speaking Engagements

I speak about data engineering, production debugging, and building scalable data platforms. My talks focus on real-world experiences and practical lessons from production systems.

---

## ✅ Completed Engagements

### Oxford Microsoft Data Platform Group
**Date:** January 21, 2026  
**Format:** Online Presentation (60 minutes + 30 min Q&A)  
**Location:** Virtual  
**Status:** ✅ **COMPLETED**  
**Slides:** [Download Presentation (5MB PPTX)](../presentations/Oxford_Talk_Jan2026_Production_Data_Pipelines.pptx)  
**Event Link:** [Meetup Page](https://www.meetup.com/oxford-azure-user-group/)

**Title:** From Raw to Refined: Building Production Data Pipelines That Scale

**Abstract:**  
Presented battle-tested architecture patterns from building scalable data pipelines at NatWest Bank. Covered the three-zone architecture (Raw → Curated → Refined) with real production code examples and incident case studies from financial services systems.

**Topics Covered:**
- Three-zone data architecture pattern (Raw → Curated → Refined / Bronze → Silver → Gold)
- Real-time streaming with Kafka and Spark (sub-10ms latency for quality scoring)
- Batch processing with PySpark and Azure Databricks (2TB daily reconciliation)
- ML-powered data quality monitoring with Isolation Forest
- Apache Airflow orchestration for 40+ interdependent pipelines
- Production incidents and recovery strategies (6-hour outage case study)
- Honest assessment of Azure data tools (ADLS Gen2, Databricks, Synapse, Snowflake)
- Customer 360 implementation (12 source systems, 200+ business users)

**Technologies:** Azure Data Lake Gen2, Azure Databricks, Azure Event Hubs, Apache Kafka, Apache Airflow, PySpark, Snowflake, Great Expectations, Delta Lake

**Audience:** 14+ data engineers, cloud architects, and data platform professionals

**Organizer:** Felicity Nyan (Senior Cloud Solution Architect - Data & Analytics, Microsoft)

**Sponsors:** Humand Talent Solutions, Packt Publishing

**Feedback:**
> "Many thanks for your very interesting and informative presentation. We all enjoyed it tremendously and hope that you will be back to present on Airflow one day."  
> — Felicity Nyan, Senior Cloud Solution Architect, Microsoft Customer Success Unit

**Impact:** Invited back for dedicated Apache Airflow session based on strong audience engagement and presentation quality.

---

## 🎤 Upcoming Engagements

### Oxford Microsoft Data Platform Group - Apache Airflow Deep Dive
**Date:** TBD (2026)  
**Format:** Online Presentation  
**Status:** 🟡 **INVITED** (Return engagement)

**Title:** Apache Airflow in Production: Orchestration Patterns That Scale

**Proposed Topics:**
- DAG design patterns for complex dependencies (40+ pipelines)
- Production best practices from running Airflow on Azure Kubernetes Service (AKS)
- Monitoring, alerting, and operational strategies for enterprise deployments
- Retry logic, idempotency, and error handling patterns
- Real-world orchestration challenges from financial services systems
- Airflow vs Azure Data Factory: When to use which
- Contributing to Apache Airflow open source (based on my merged PRs)

**Technologies:** Apache Airflow, Azure Kubernetes Service, PostgreSQL, PySpark, Azure Data Factory

**Background:** This return invitation follows my successful January 2026 presentation where Apache Airflow orchestration patterns generated significant audience interest and discussion.

---

## 📋 Pending Proposals

I've submitted speaking proposals to **13 conferences and meetups** across Europe, including:

### Major Conferences

**SQLBits 2026** - Newport, United Kingdom (April 2026)  
- Europe's largest data platform conference
- Topic: "5 Production Data Pipeline Mistakes That Cost Me Weeks"
- Format: 60-minute session

**PyData Global 2025** - Virtual  
- International Python data science conference
- Topic: "5 Production Data Pipeline Mistakes That Cost Me Weeks"
- Format: 30-minute talk

### Data Engineering Meetups & User Groups

**Submitted to 11 additional meetups** focusing on:
- Data engineering best practices
- Production debugging stories
- Building reliable data platforms
- Cloud data architecture

---

## 🎯 Speaking Topics

### Production Data Pipeline Mistakes
**Duration:** 30-60 minutes

Real production incidents from financial services data engineering. Each story includes the problem, debugging process, root cause, and lessons learned.

**Key Stories:**
- Silent data loss (10% of transactions)
- Weekend-only failures
- Currency format bugs ($100 → 10,000)
- Schema changes creating duplicates
- Retry logic processing same day 47 times
- 6-hour analytics platform outage from single transformation bug

**Audience:** Data engineers, software engineers working with data

---

### Building Scalable Data Pipelines
**Duration:** 45-60 minutes

Architecture patterns for production data platforms, from ingestion to analytics. Includes real-world examples from processing millions of transactions daily at scale.

**Topics:**
- Three-zone architecture (Raw → Curated → Refined)
- Streaming vs batch processing trade-offs
- Data quality frameworks and ML-powered monitoring
- Orchestration patterns with Apache Airflow
- Monitoring and observability strategies
- Azure vs AWS data stack comparison

**Audience:** Data engineers, data architects, platform engineers

---

### Apache Airflow in Production
**Duration:** 45-60 minutes

Production-tested patterns for running Apache Airflow at scale in enterprise environments. Based on experience managing 40+ interdependent pipelines on Azure Kubernetes Service.

**Topics:**
- DAG design patterns for complex workflows
- Deployment on Kubernetes (AKS)
- Monitoring, alerting, and SLA management
- Idempotency and retry strategies
- Integration with Azure services (Databricks, ADLS, Synapse)
- Contributing to Airflow open source

**Audience:** Data engineers, DevOps engineers, platform engineers

---

## 💡 Speaking Philosophy

**Real experiences over theory** - Every talk is based on actual production work at scale

**Practical and actionable** - Attendees leave with patterns they can apply immediately

**Honest about failures** - Sharing what went wrong, how we debugged it, and how we fixed it

**Code and architecture** - Real production code examples, not just slide diagrams

**Interactive and engaging** - Encouraging questions and discussion throughout

---

## 📊 Speaking Experience

**Conference & Community Talks:**
- Oxford Microsoft Data Platform Group (January 2026) - 60+ attendees
- Invited return speaker for Apache Airflow session

**Technical Presentations:**
- Internal technical talks at NatWest Bank and Accenture
- Team knowledge sharing sessions on data engineering best practices
- Client presentations on data platform architecture
- Architecture review presentations for enterprise systems

**Community Engagement:**
- Active participant in data engineering communities (Reddit r/dataengineering, LinkedIn, Slack)
- Technical writing with 71,000+ views across Medium and Dev.to
- Open source contributions with code reviews and technical discussions
- Apache Airflow contributor (merged PRs)

---

## 🎤 Want Me to Speak?

I'm available for:
- Conference talks (virtual or in-person UK/Europe)
- Meetup presentations (online or London-based)
- Corporate tech talks and workshops
- Panel discussions on data engineering
- Internal company training sessions

**Topics I cover:**
- Production data pipeline architecture and design patterns
- Debugging production data issues and incident response
- Data quality, reliability, and monitoring strategies
- Cloud data platforms (AWS, Azure, Microsoft Fabric)
- Apache Airflow and workflow orchestration
- Open source data tools and contributions
- Real-time streaming and batch processing at scale

**Recent talk highlights:**
- Three-zone architecture patterns
- ML-powered data quality monitoring
- Orchestrating 40+ interdependent pipelines
- Recovery from production incidents

**Contact:** [kalluripradeep99@gmail.com](mailto:kalluripradeep99@gmail.com)

**Note:** Based in London, UK. Available for in-person speaking in UK/Europe and virtual events globally.

---

## 🔗 Additional Resources

**Technical Writing:** [View my articles](/articles/) with 71,000+ views

**Open Source:** [See my contributions](/opensource/) to Apache Airflow and dbt-core

**Projects:** [View my work](/projects/) including real-time data quality systems

**Portfolio:** [GitHub](https://github.com/kalluripradeep) • [LinkedIn](https://linkedin.com/in/pradeepkalluri) • [Medium](https://medium.com/@kalluripradeep99)

---

[← Back to Home](/) | [View Technical Writing →](/articles/) | [View Projects →](/projects/)