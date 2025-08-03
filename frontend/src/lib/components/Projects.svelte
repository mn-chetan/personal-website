<script lang="ts">
  interface Experience {
    title: string;
    category: string;
    description: string;
    technologies: string[];
    highlights: string[];
    type: 'backend' | 'ai' | 'fullstack';
    demoUrl?: string;
    codeUrl?: string;
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
      type: 'backend',
      codeUrl: "https://github.com/mn-chetan"
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
      type: 'ai',
      codeUrl: "https://github.com/mn-chetan"
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
      type: 'ai',
      codeUrl: "https://github.com/mn-chetan"
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
      type: 'backend',
      codeUrl: "https://github.com/mn-chetan"
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
      type: 'fullstack',
      demoUrl: "https://demo.example.com",
      codeUrl: "https://github.com/mn-chetan"
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
      type: 'ai',
      codeUrl: "https://github.com/mn-chetan"
    }
  ];

  let selectedFilter: 'all' | 'backend' | 'ai' | 'fullstack' = 'all';
  let filteredExperiences = experiences;
  let selectedProject: Experience | null = null;
  
  $: {
    if (selectedFilter === 'all') {
      filteredExperiences = experiences;
    } else {
      filteredExperiences = experiences.filter(exp => exp.type === selectedFilter);
    }
  }

  const getTypeColor = (type: string) => {
    const colors = {
      backend: { bg: 'bg-teal-900', border: 'border-teal-500', text: 'text-teal-400', hover: 'hover:bg-teal-800' },
      ai: { bg: 'bg-blue-900', border: 'border-blue-500', text: 'text-blue-400', hover: 'hover:bg-blue-800' },
      fullstack: { bg: 'bg-purple-900', border: 'border-purple-500', text: 'text-purple-400', hover: 'hover:bg-purple-800' }
    };
    return colors[type] || colors.backend;
  };
  
  const getFilterColor = (type: string) => {
    const colors = {
      all: 'bg-gray-600 hover:bg-gray-500 text-white',
      backend: 'bg-teal-600 hover:bg-teal-500 text-white',
      ai: 'bg-blue-600 hover:bg-blue-500 text-white',
      fullstack: 'bg-purple-600 hover:bg-purple-500 text-white'
    };
    return colors[type] || colors.all;
  };

  function openProjectModal(project: Experience) {
    selectedProject = project;
  }

  function closeProjectModal() {
    selectedProject = null;
  }
</script>

<section id="projects" class="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-800">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Technical Experience & Portfolio</h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        Real-world projects showcasing expertise in backend development, artificial intelligence, and full-stack engineering.
      </p>
    </div>

    <!-- Project Filter Buttons -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button
        class="px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
        class:bg-gray-600={selectedFilter === 'all'}
        class:bg-gray-700={selectedFilter !== 'all'}
        class:hover:bg-gray-500={selectedFilter !== 'all'}
        class:text-white={true}
        on:click={() => selectedFilter = 'all'}
      >
        All Projects ({experiences.length})
      </button>
      <button
        class="px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        class:bg-teal-600={selectedFilter === 'backend'}
        class:bg-gray-700={selectedFilter !== 'backend'}
        class:hover:bg-teal-500={selectedFilter !== 'backend'}
        class:text-white={true}
        on:click={() => selectedFilter = 'backend'}
      >
        Backend ({experiences.filter(e => e.type === 'backend').length})
      </button>
      <button
        class="px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        class:bg-blue-600={selectedFilter === 'ai'}
        class:bg-gray-700={selectedFilter !== 'ai'}
        class:hover:bg-blue-500={selectedFilter !== 'ai'}
        class:text-white={true}
        on:click={() => selectedFilter = 'ai'}
      >
        AI & Data Science ({experiences.filter(e => e.type === 'ai').length})
      </button>
      <button
        class="px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
        class:bg-purple-600={selectedFilter === 'fullstack'}
        class:bg-gray-700={selectedFilter !== 'fullstack'}
        class:hover:bg-purple-500={selectedFilter !== 'fullstack'}
        class:text-white={true}
        on:click={() => selectedFilter = 'fullstack'}
      >
        Full-Stack ({experiences.filter(e => e.type === 'fullstack').length})
      </button>
    </div>

    <!-- Projects Grid with Filtering -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-500">
      {#each filteredExperiences as experience, index}
        {@const typeColors = getTypeColor(experience.type)}
        <div 
          class="bg-gray-900 rounded-xl shadow-lg overflow-hidden border-l-4 {typeColors.border} transform hover:scale-[1.02] transition-all duration-300 animate-fade-in group"
          style="animation-delay: {index * 150}ms"
        >
          <div class="p-8">
            <!-- Header -->
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-xl font-bold text-white mb-2 group-hover:{typeColors.text} transition-colors duration-300">
                  {experience.title}
                </h3>
                <span class="text-sm {typeColors.text} bg-gray-800 px-3 py-1 rounded-full">
                  {experience.category}
                </span>
              </div>
              <div class="w-3 h-3 rounded-full {typeColors.bg} {typeColors.border} border-2 group-hover:animate-pulse"></div>
            </div>
            
            <!-- Description -->
            <p class="text-gray-300 mb-6 leading-relaxed">{experience.description}</p>
            
            <!-- Technologies -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-400 mb-3">TECHNOLOGIES USED</h4>
              <div class="flex flex-wrap gap-2">
                {#each experience.technologies as tech}
                  <span class="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
            
            <!-- Key Highlights -->
            <div class="mb-6">
              <h4 class="text-sm font-semibold text-gray-400 mb-3">KEY ACHIEVEMENTS</h4>
              <ul class="space-y-2">
                {#each experience.highlights.slice(0, 2) as highlight}
                  <li class="flex items-start text-sm text-gray-300">
                    <span class="{typeColors.text} mr-2 mt-1">▸</span>
                    <span>{highlight}</span>
                  </li>
                {/each}
                {#if experience.highlights.length > 2}
                  <li class="text-xs text-gray-500 ml-4">
                    +{experience.highlights.length - 2} more achievements
                  </li>
                {/if}
              </ul>
            </div>

            <!-- Action Buttons -->
            <div class="space-y-3">
              <button
                on:click={() => openProjectModal(experience)}
                class="w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 flex items-center justify-center gap-2"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                View Details
              </button>
              
              <div class="grid grid-cols-{experience.demoUrl ? '2' : '1'} gap-2">
                {#if experience.demoUrl}
                  <a
                    href={experience.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 {typeColors.bg} {typeColors.hover} text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Live Demo
                  </a>
                {/if}
                
                {#if experience.codeUrl}
                  <a
                    href={experience.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    View Code
                  </a>
                {/if}
              </div>
            </div>
          </div>
        </div>
      {/each}
    </div>

    <!-- Technical Philosophy -->
    <div class="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700">
      <h3 class="text-2xl font-bold text-center mb-6 text-white">Development Philosophy</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="space-y-3 transform hover:scale-105 transition-transform duration-300">
          <div class="text-teal-400 text-lg font-semibold">Scalable Architecture</div>
          <p class="text-sm text-gray-400">Building systems that grow with business needs using modern patterns and best practices.</p>
        </div>
        <div class="space-y-3 transform hover:scale-105 transition-transform duration-300">
          <div class="text-blue-400 text-lg font-semibold">Data-Driven Solutions</div>
          <p class="text-sm text-gray-400">Leveraging AI and machine learning to create intelligent, adaptive applications.</p>
        </div>
        <div class="space-y-3 transform hover:scale-105 transition-transform duration-300">
          <div class="text-purple-400 text-lg font-semibold">Continuous Innovation</div>
          <p class="text-sm text-gray-400">Staying current with emerging technologies and implementing cutting-edge solutions.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Project Detail Modal -->
{#if selectedProject}
  {@const typeColors = getTypeColor(selectedProject.type)}
  <div 
    class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 animate-fade-in" 
    on:click={closeProjectModal}
    on:keydown={(e) => e.key === 'Escape' && closeProjectModal()}
    role="dialog"
    aria-modal="true"
    aria-labelledby="modal-title"
  >
    <div 
      class="bg-gray-900 rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto p-8 border-l-4 {typeColors.border}" 
      on:click|stopPropagation
      role="document"
    >
      <div class="flex justify-between items-start mb-6">
        <div>
          <h3 id="modal-title" class="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
          <span class="text-sm {typeColors.text} bg-gray-800 px-3 py-1 rounded-full">
            {selectedProject.category}
          </span>
        </div>
        <button
          on:click={closeProjectModal}
          class="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-lg"
          aria-label="Close modal"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <p class="text-gray-300 mb-8 text-lg leading-relaxed">{selectedProject.description}</p>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Technologies -->
        <div>
          <h4 class="text-xl font-semibold text-white mb-4">Technologies Used</h4>
          <div class="flex flex-wrap gap-3">
            {#each selectedProject.technologies as tech}
              <span class="text-sm bg-gray-800 text-gray-300 px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-700 transition-colors duration-200">
                {tech}
              </span>
            {/each}
          </div>
        </div>
        
        <!-- Achievements -->
        <div>
          <h4 class="text-xl font-semibold text-white mb-4">Key Achievements</h4>
          <ul class="space-y-3">
            {#each selectedProject.highlights as highlight}
              <li class="flex items-start text-gray-300">
                <span class="{typeColors.text} mr-3 mt-1 text-lg">▸</span>
                <span>{highlight}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="mt-8 flex flex-wrap gap-4 justify-center">
        {#if selectedProject.demoUrl}
          <a
            href={selectedProject.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 {typeColors.bg} {typeColors.hover} text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
            View Live Demo
          </a>
        {/if}
        
        {#if selectedProject.codeUrl}
          <a
            href={selectedProject.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2 font-medium"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            View Source Code
          </a>
        {/if}
      </div>
    </div>
  </div>
{/if}
