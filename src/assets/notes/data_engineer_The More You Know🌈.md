## Define Data Modeling
- ==Conceptual representation== of data structures and 
- their ==relationships== within a system.

This model tells how the gets:
- logically organized, 
- how it is stored,
- how it is accessed.

![[Pasted image 20260104163732.png]]
## What are the Four Vs of Big Data?
The four Vs of Big Data:

- **Volume:** Represents huge amounts of data-generated. 
- **Variety:** Heterogeneous data types and formats. 
- **Velocity:** The pace of data generation and processing. 
- **Veracity:** Concerned with data validity and its trustworthiness.
## What is Star Schema, in brief?
- Central fact table holding ==numerical measures==
- Dimension tables storing ==descriptive attributes==
![[Pasted image 20260104182502.png]]
## What's a Data Lake?
Central repository to store **raw data** in its ==native format==. 
The flexibility of data processing and analysis comes because of the ability to store most types of data structures and types.
![[Pasted image 20260104183809.png]]
## What does Data Profiling mean?
The procedure of systematically analyzing data sets with a view to having more comprehensive knowledge regarding the 
- very structure of the data, 
- the quality it possesses, 
- and the complete content available for return.

This will point to 
- missing data, 
- inconsistent data, 
- incorrect data, 
- and correct patterns or use,
which are necessary for data quality improvement, transformation processes, and integration.
## Why use Data Warehouses?
Data warehousing is the process of collecting, integrating, storing and managing data from multiple sources in a central repository. It enables organizations to organize large volumes of current and historical data for efficient querying, analysis and reporting.
![[Pasted image 20260104184435.png]]
## What is Data Redundancy, and how is it fixed?
The situation in which **duplicate data** is stored in more than one location, and such duplication would lead to ==inconsistencies== and ==inefficiencies==.
To tackle Data Redundancy, *data normalization*, and *data governance* practices are used to organize data in such a way as to eliminate duplication and ensure consistency.
## What is the CAP theorem?
Every distributed system can only have two out of ==Consistency, Availability, and Partition== tolerance at a particular point in time.
![[Pasted image 20260104190200.png]]
## Explain the concept of data serialization and why it is important in data engineering.
Data serialization means converting **complex data structures** ==(objects, records)== into a **standardized format** ==(say bytes, JSON, Avro)== that can be stored, sent, or reconstructed at some other time. This is crucial for:
- **Interoperability:** It allows multiple systems to communicate and exchange. 
- **Storage friendliness:** It compresses data with lossless compression while preserving the schema metadata, such as Parquet and Avro. 
- **Performance:** In binary serialization, there is less overhead exchange across the network in a distributed system such as Protocol Buffers. 
- **Schema evolution:** In Avro, backward compatibility and forward compatibility methods help update the pipelines without a hitch.
## What is ACID?
ACID stands for Atomicity, Consistency, Isolation, and Durability.
These properties are for ==transactions==.
![[Pasted image 20260105113743.png]]
## What are the main differences between SQL and NoSQL databases?
- **Structure**: SQL databases use a structured schema, while NoSQL databases are schema-less or have a flexible schema.
- **Scalability**: NoSQL databases are generally more scalable horizontally, while SQL databases often scale vertically.
- **Data model**: SQL databases use tables and rows, while NoSQL databases can use various models like document, key-value, or graph.
- **ACID compliance**: SQL databases typically provide ACID guarantees, while NoSQL databases may sacrifice some ACID properties for performance and scalability.
## What is normalization in database design? 
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. 
It involves ==breaking down larger tables into smaller,== more focused tables and ==establishing relationships between them.==
## ETL vs ELT
- **ETL (Extract, Transform, Load):** Data is extracted from source systems, transformed to fit operational needs, and then loaded into a target system, such as a ==Data Warehouse==.
	- Example: Using Azure Data Factory to ETL data from on-premises SQL Server to Azure Synapse Analytics.
- **ELT (Extract, Load, Transform):** Data is extracted and loaded into the target system first, where transformations occur. This is common when the target system can handle heavy processing, like a ==Data Lake==.
	- Example: ELT is often used with big data tools like Apache Spark for scalability.
## What is schema evolution, and how can it be handled?
Schema evolution refers to the ability to adapt to changes in the structure of data sources. 
For instance, adding a new column to a table without breaking existing pipelines.
**Example Handling:** In Apache Spark, schema evolution can handle new columns dynamically by enabling schema inference or writing robust Spark jobs.
## How do data sharding and partitioning differ? Provide examples.
- **Data Sharding:** Breaks down datasets horizontally across multiple databases to improve scalability.
- **Data Partitioning:** Splits datasets into smaller parts for improved query performance within a single database or system.
**Example:** Sharding user data across PostgreSQL instances.
**Example:** Partitioning S3 bucket files by year, month, and day for better query performance using AWS Athena.

**Key Difference:** Sharding improves scalability across multiple databases, while partitioning enhances performance within a single system.
## What is Change Data Capture (CDC), and why is it important?
CDC captures and tracks ==changes in source data== for real-time updates.
**Importance:** CDC ensures data freshness and supports near real-time analytics.
## What is Data Anonymization, and Why is it Critical?
Data anonymization is the process of ==removing or obfuscating personally identifiable information (PII) from datasets== to ensure privacy and security while retaining the data’s utility for analysis.
## What is the Difference Between OLAP and OLTP Systems?
**OLAP (Online Analytical Processing):**  
OLAP systems are designed to support ==complex analytical queries== on large historical datasets, enabling insights and decision-making.
- **Use Case Example:**  
    A retail company uses an OLAP system to analyze sales performance over the past five years, identifying trends, seasonality, and best-selling products.
- **Key Features:**
- Read-optimized for aggregation and reporting.
- Handles multidimensional data for slicing and dicing.
- Stores historical data in data warehouses.

**OLTP (Online Transaction Processing):**  
OLTP systems manage ==real-time transactional workloads==, focusing on fast and reliable data entry and retrieval for day-to-day operations.
- **Use Case Example:**  
    An e-commerce website processes customer orders, inventory updates, and payment transactions using an OLTP system.
- **Key Features:**
- Write-optimized for high-frequency transactions.
- Ensures data consistency with ACID properties.
- Primarily stores current operational data.

**Key Differences:**
- OLAP supports decision-making by querying and analyzing **historical data**, 
- while OLTP supports operational activities by processing **real-time transactions**.

- OLAP uses **data warehouses**, 
- whereas OLTP uses **relational databases**.
## What Is Data Governance, and Why Is It Important?
Data governance involves creating and enforcing ==policies, procedures, and standards== for managing 
- data access, 
- usage, and 
- quality 
across an organization.
## What is the slowly changing dimension (SCD)?
Slowly changing dimension (SCD) is a concept in data warehousing that describes how to handle changes to dimension data over time. There are different types of SCDs, with the most common being:

- **Type 1**: Overwrite the old value
- **Type 2**: Create a new row with the changed data
- **Type 3**: Add a new column to track changes
## What is data mart?
A data mart is a subset of a data warehouse that focuses on a ==specific business line== or ==department==. 
It contains summarized and relevant data for ==a particular group of users== or a specific area of the business.
## Explain the concept of data lineage and why it's important.
Data lineage refers to the ==lifecycle of data==, including 
- its origins, 
- movements, 
- transformations, and 
- impacts. 
It's important because it:
- Helps in understanding data provenance and quality
- Facilitates impact analysis for proposed changes
- Aids in regulatory compliance and auditing
- Supports troubleshooting and debugging of data issues
- Enhances data governance and metadata management

## Source
- https://www.netcomlearning.com/blog/data-engineer-interview-questions
- https://skphd.medium.com/data-engineering-interview-questions-and-answers-0261f7763ff8
- https://www.geeksforgeeks.org/data-engineering/data-engineer-interview-questions/