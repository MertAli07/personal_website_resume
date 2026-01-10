const CV = () => {
  return (
    <section className="mb-16">
      <h2 className="section-title">Curriculum Vitae</h2>
      
      {/* Personal Information */}
      <div className="card mb-8">
        <h1 className="text-[2rem] font-display text-[var(--accent)] mb-2">Mert Ali Yalçın</h1>
        <p className="text-[1.2rem] text-[var(--muted)] mb-4">Data & AI Engineer</p>
        <div className="flex flex-wrap gap-4 text-[var(--muted)] text-sm">
          <span>📍 Ankara, Türkiye</span>
        </div>
      </div>

      {/* Summary */}
      <div className="card mb-8">
        <h3 className="text-[1.3rem] text-[var(--accent)] mb-3">About</h3>
        <p className="text-[var(--muted)] leading-relaxed">
          I have worked in data engineering, AI engineering, and data science in both R&D and consulting settings. 
          My experience spans end-to-end AI/ML workflows and building cloud-based data solutions. 
          I enjoy exploring new technologies and maintaining well-structured technical documentation.
        </p>
      </div>

      {/* Certifications */}
      <div className="card mb-8">
        <h3 className="text-[1.3rem] text-[var(--accent)] mb-4">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <p className="font-semibold">AWS Machine Learning Specialty</p>
            <p className="text-sm text-[var(--muted)]">2025 – 2028</p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <p className="font-semibold">AWS Solutions Architect Associate</p>
            <p className="text-sm text-[var(--muted)]">2024 – 2027</p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <p className="font-semibold">AWS AI Practitioner</p>
            <p className="text-sm text-[var(--muted)]">2025 – 2028</p>
          </div>
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <p className="font-semibold">AWS AI Practitioner Early Adopter</p>
            <p className="text-sm text-[var(--muted)]">2025 – 2028</p>
          </div>
        </div>
      </div>

      {/* Technical Experience */}
      <div className="card mb-8">
        <h3 className="text-[1.3rem] text-[var(--accent)] mb-4">Technical Experience</h3>
        <div className="space-y-6">
          {/* Experience 1 */}
          <div className="border-l-2 border-[var(--accent)] pl-4 pb-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-lg">Data & AI Engineer</h4>
                <p className="text-[var(--accent)]">Howlet (Goaltech)</p>
              </div>
              <div className="text-right text-sm text-[var(--muted)]">
                <p>06/2023 – Present</p>
                <p>Ankara, Türkiye</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-1 text-sm">
              <li>Developed an AI-based stock trading platform that utilizes LLMs for financial news analysis and trade decision-making.</li>
              <li>Analyzed the impact of breaking and historical financial news on stock prices using LLMs.</li>
              <li>Engineered feature extraction methods from news data to assess market signals and optimize buy/sell decisions.</li>
              <li>Developed real-time stock price prediction models by integrating Recurrent Neural Networks (RNNs) with Large Language Models (LLMs).</li>
            </ul>
          </div>

          {/* Experience 2 */}
          <div className="border-l-2 border-[var(--accent)] pl-4 pb-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-lg">Consultant AI Engineer</h4>
                <p className="text-[var(--accent)]">Central Bank of the Republic of Türkiye (Goaltech)</p>
              </div>
              <div className="text-right text-sm text-[var(--muted)]">
                <p>07/2025 – 09/2025</p>
                <p>Ankara, Türkiye</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-1 text-sm">
              <li>Developed a proof-of-concept conversational analytics assistant over the Bank's EVDS statistical datasets: the chatbot turns plain-language questions into EVDS queries, analyzes results, and returns clear summaries, explanations, and auto-generated charts.</li>
              <li>Delivered GenAI enablement: taught generative AI fundamentals and AWS services, with a detailed, hands-on deep dive into Amazon Bedrock.</li>
              <li>Built the project from scratch and guided the team end-to-end through architecture, implementation, and usage—combining theoretical instruction with practical workshops and live walkthroughs.</li>
            </ul>
          </div>

          {/* Experience 3 */}
          <div className="border-l-2 border-[var(--accent)] pl-4 pb-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-lg">Consultant AI Engineer</h4>
                <p className="text-[var(--accent)]">Doping Hafiza (Goaltech)</p>
              </div>
              <div className="text-right text-sm text-[var(--muted)]">
                <p>04/2025 – 07/2025</p>
                <p>Istanbul, Türkiye</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-1 text-sm">
              <li>Built and deployed a technical support chatbot that reduced open support tickets by 60%.</li>
              <li>Developed an AI assistant that guides students during lecture videos by directing them to the relevant topic or timestamp.</li>
              <li>Implemented a system that transcribes lecture videos, including whiteboard drawings, using vision-based models.</li>
              <li>Created an automated pipeline that generates structured lecture materials from video transcripts.</li>
            </ul>
          </div>

          {/* Experience 4 */}
          <div className="border-l-2 border-[var(--accent)] pl-4">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-lg">Consultant Data Engineer</h4>
                <p className="text-[var(--accent)]">Drax BECCS Carbon Negative (Goaltech)</p>
              </div>
              <div className="text-right text-sm text-[var(--muted)]">
                <p>05/2024 – 08/2024</p>
                <p>London, UK</p>
              </div>
            </div>
            <ul className="list-disc list-inside text-[var(--muted)] space-y-1 text-sm">
              <li>Engineered real-time data pipelines to support AI model training, ensuring efficient data extraction, transformation, and storage.</li>
              <li>Optimized Big Data infrastructure, improving storage efficiency by 25% and increasing data flow velocity.</li>
              <li>Ingested geospatial data in multiple formats (CSV, GeoJSON, binary) into AWS S3 and loaded it into Databricks.</li>
              <li>Developed ETL pipelines using AWS Glue and PySpark to transform, cleanse, and validate geospatial data.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="card mb-8">
        <h3 className="text-[1.3rem] text-[var(--accent)] mb-4">Skills</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">AI/ML</h4>
            <p className="text-[var(--muted)] text-sm">
              LangChain, LangGraph, AWS Bedrock, Neo4j, RAG, Knowledge Bases, LLM, ChatGPT, Ollama, Mistral, Gemini, Qwen, Deepseek, 
              Embedding Models, MCP, Tools, Prompt Management, Fine-tuning, Parameter Efficient Fine-Tuning (PEFT), Vector DB, 
              RAG, Multi-Agent Architectures, N8N, PyTorch, Keras, TensorFlow, AWS SageMaker, Python, Reinforcement Learning, DQN
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Data Manipulation</h4>
            <p className="text-[var(--muted)] text-sm">
              Webscraping, Real-time data analysis, ETL, workflows, Spark, Kafka, Airflow, NiFi
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Database</h4>
            <p className="text-[var(--muted)] text-sm">
              ElasticSearch, Kibana, MongoDB, InfluxDB, PostgreSQL
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">App</h4>
            <p className="text-[var(--muted)] text-sm">
              React, React Native, Expo, FastAPI
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Design</h4>
            <p className="text-[var(--muted)] text-sm">
              EfX, MarkDown, Draw.io, Architectural Diagram Design, Agile Methodology and Scrum-based project management
            </p>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="card">
        <h3 className="text-[1.3rem] text-[var(--accent)] mb-4">Education</h3>
        <div className="border-l-2 border-[var(--accent)] pl-4">
          <div className="flex flex-wrap justify-between items-start mb-2">
            <div>
              <h4 className="font-semibold text-lg">Bachelor of Science in Computer Engineering</h4>
              <p className="text-[var(--accent)]">Hacettepe University</p>
            </div>
            <div className="text-right text-sm text-[var(--muted)]">
              <p>2019 - 2024</p>
              <p>GPA: 3.39/4.00</p>
            </div>
          </div>
          <p className="text-[var(--muted)] text-sm">IELTS: 7.5/9</p>
        </div>
      </div>
    </section>
  )
}

export default CV

