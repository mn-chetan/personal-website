<script lang="ts">
  interface Experience {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    highlights: string[];
    type: 'backend' | 'ai' | 'fullstack';
  }

  const experiences: Experience[] = [
    {
      title: "Scalable REST API Architecture",
      category: "Backend Development",
      description: "Designed and implemented robust RESTful APIs with advanced middleware, authentication, and error handling patterns.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT", "Docker"],
      highlights: [
        "Implemented secure authentication with JWT and session management",
        "Built middleware for rate limiting and request validation",
        "Optimized database queries with Mongoose aggregation pipelines"
      ],
      type: 'backend'
    },
    {
      title: "Real-time Data Processing Pipeline",
      category: "Data Science & AI",
      description: "Developed machine learning models for real-time data analysis with automated feature engineering and model deployment.",
      technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow", "Apache Kafka"],
      highlights: [
        "Built ETL pipelines processing 1M+ records daily",
        "Implemented ensemble models achieving 94% accuracy",
        "Created automated model retraining workflows"
      ],
      type: 'ai'
    },
    {
      title: "Intelligent RAG System",
      category: "AI & LLM Integration",
      description: "Built a Retrieval-Augmented Generation system using vector databases and large language models for intelligent document analysis.",
      technologies: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI"],
      highlights: [
        "Implemented semantic search with embeddings",
        "Built custom prompt engineering workflows",
        "Achieved 85% improvement in response relevance"
      ],
      type: 'ai'
    },
    {
      title: "GraphQL API with Microservices",
      category: "Advanced Backend",
      description: "Architected a distributed system using GraphQL federation and microservices for high-performance data aggregation.",
      technologies: ["Node.js", "GraphQL", "Redis", "PostgreSQL", "Kubernetes"],
      highlights: [
        "Reduced API response times by 60%",
        "Implemented distributed caching strategies",
        "Built automated service discovery and load balancing"
      ],
      type: 'backend'
    },
    {
      title: "Full-Stack Analytics Dashboard",
      category: "End-to-End Development",
      description: "Complete application with real-time analytics, featuring interactive data visualizations and automated reporting.",
      technologies: ["Svelte", "D3.js", "Node.js", "MongoDB", "WebSockets"],
      highlights: [
        "Real-time data visualization with custom D3.js components",
        "Implemented WebSocket connections for live updates",
        "Built responsive design supporting mobile and desktop"
      ],
      type: 'fullstack'
    },
    {
      title: "Deep Learning Model Deployment",
      category: "MLOps & Production AI",
      description: "End-to-end machine learning pipeline from model training to production deployment with monitoring and auto-scaling.",
      technologies: ["PyTorch", "Docker", "AWS", "MLflow", "Prometheus"],
      highlights: [
        "Deployed models serving 10K+ predictions per minute",
        "Implemented A/B testing for model performance",
        "Built comprehensive monitoring and alerting systems"
      ],
      type: 'ai'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      backend: { bg: 'bg-teal-900', border: 'border-teal-500', text: 'text-teal-400' },
      ai: { bg: 'bg-blue-900', border: 'border-blue-500', text: 'text-blue-400' },
      fullstack: { bg: 'bg-purple-900', border: 'border-purple-500', text: 'text-purple-400' }
    };
    return colors[type] || colors.backend;
  };
</script>

<section id="projects" class="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Technical Experience & Portfolio</h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        Showcase of professional projects demonstrating expertise across backend development, 
        data science, AI implementation, and full-stack solutions.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {#each experiences as experience}
        {@const typeColors = getTypeColor(experience.type)}
        <div class="bg-gray-900 rounded-xl shadow-lg overflow-hidden border-l-4 {typeColors.border} transform hover:scale-[1.02] transition duration-300">
          <div class="p-8">
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-2">{experience.title}</h3>
                <span class="text-sm {typeColors.text} bg-gray-800 px-3 py-1 rounded-full">
                  {experience.category}
                </span>
              </div>
              <div class="w-3 h-3 rounded-full {typeColors.bg} {typeColors.border} border-2"></div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
            
            <!-- Technologies -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES USED</h4>
              <div class="flex flex-wrap gap-2">
                {#each experience.technologies as tech}
                  <span class="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
            
            <!-- Key Highlights -->
            <div>
              <h4 class="text-sm font-semibold text-gray-400 mb-3">KEY ACHIEVEMENTS</h4>
              <ul class="space-y-2">
                {#each experience.highlights as highlight}
                  <li class="flex items-start text-sm text-gray-300">
                    <span class="{typeColors.text} mr-2 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                {/each}
              </ul>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Technical Philosophy -->
    <div class="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
      <h3 class="text-2xl font-bold text-center mb-6 text-white">Development Philosophy</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="space-y-3">
          <div class="text-teal-400 text-lg font-semibold">Scalable Architecture</div>
          <p class="text-sm text-gray-400">Building systems that grow with business needs using modern patterns and best practices.</p>
        </div>
        <div class="space-y-3">
          <div class="text-blue-400 text-lg font-semibold">Data-Driven Solutions</div>
          <p class="text-sm text-gray-400">Leveraging AI and machine learning to create intelligent, adaptive applications.</p>
        </div>
        <div class="space-y-3">
          <div class="text-purple-400 text-lg font-semibold">Continuous Innovation</div>
          <p class="text-sm text-gray-400">Staying current with emerging technologies and implementing cutting-edge solutions.</p>
        </div>
      </div>
    </div>
  </div>
</section>
