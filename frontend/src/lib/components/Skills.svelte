<script lang="ts">
  const skillCategories = {
    "Backend & API Development": {
      color: "teal",
      skills: [
        { name: "Node.js & Core Concepts", level: 95, description: "Event loop, modules, async programming" },
        { name: "Express.js", level: 90, description: "Routing, middleware, error handling" },
        { name: "RESTful APIs", level: 95, description: "Design, build, and consume REST APIs" },
        { name: "GraphQL", level: 85, description: "Schemas, queries, mutations" },
        { name: "MongoDB & Mongoose", level: 90, description: "NoSQL, flexible data modeling" },
        { name: "MySQL & Sequelize", level: 85, description: "SQL, ORM, relational databases" },
        { name: "WebSockets & Socket.IO", level: 80, description: "Real-time applications" },
        { name: "Authentication & Security", level: 90, description: "JWT, sessions, route protection" },
        { name: "Templating Engines", level: 75, description: "EJS, Pug, server-side rendering" }
      ]
    },
    "Data Science & AI": {
      color: "blue",
      skills: [
        { name: "Python Programming", level: 95, description: "NumPy, Pandas, Scikit-learn" },
        { name: "Mathematics & Statistics", level: 90, description: "Linear algebra, calculus, probability" },
        { name: "Data Analysis & Visualization", level: 90, description: "Matplotlib, Seaborn, EDA" },
        { name: "Machine Learning", level: 85, description: "Supervised & unsupervised learning" },
        { name: "Deep Learning", level: 80, description: "Neural networks, TensorFlow, PyTorch" },
        { name: "AI & LLMs", level: 85, description: "Embeddings, vector databases, RAG" },
        { name: "Prompt Engineering", level: 80, description: "Effective LLM interaction design" }
      ]
    },
    "Tools & Deployment": {
      color: "purple",
      skills: [
        { name: "Git & GitHub", level: 95, description: "Version control, collaboration" },
        { name: "Testing", level: 85, description: "Unit and integration tests" },
        { name: "Cloud Deployment", level: 80, description: "Platform deployment knowledge" },
        { name: "Command Line", level: 90, description: "Development environment mastery" }
      ]
    }
  };

  const getColorClasses = (color: string) => {
    const colors = {
      teal: { bg: "bg-teal-500", text: "text-teal-400", border: "border-teal-500" },
      blue: { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500" },
      purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500" }
    };
    return colors[color] || colors.teal;
  };
</script>

<section id="skills" class="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-900">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Professional Skill Set</h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        This collection of skills reflects a deep understanding of modern web development, 
        data analysis, and artificial intelligence, combining backend engineering with data-driven insights.
      </p>
    </div>
    
    <div class="space-y-16">
      {#each Object.entries(skillCategories) as [category, categoryData]}
        {@const colorClasses = getColorClasses(categoryData.color)}
        <div class="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 {colorClasses.border}">
          <h3 class="text-2xl font-bold mb-8 {colorClasses.text}">{category}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each categoryData.skills as skill}
              <div class="bg-gray-900 p-6 rounded-lg hover:bg-gray-750 transition duration-300">
                <div class="flex justify-between items-start mb-3">
                  <h4 class="font-semibold text-white text-sm leading-tight">{skill.name}</h4>
                  <span class="text-xs font-medium {colorClasses.text} bg-gray-800 px-2 py-1 rounded">
                    {skill.level}%
                  </span>
                </div>
                
                <div class="w-full bg-gray-700 rounded-full h-2 mb-3">
                  <div
                    class="h-2 rounded-full {colorClasses.bg} transition-all duration-500"
                    style="width: {skill.level}%"
                  ></div>
                </div>
                
                <p class="text-xs text-gray-400 leading-relaxed">{skill.description}</p>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <!-- Professional Summary -->
    <div class="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl">
      <h3 class="text-xl font-bold text-center mb-6 text-white">Core Competencies Summary</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div class="space-y-2">
          <div class="text-3xl font-bold text-teal-400">5+</div>
          <div class="text-sm text-gray-400">Years Backend Development</div>
        </div>
        <div class="space-y-2">
          <div class="text-3xl font-bold text-blue-400">10+</div>
          <div class="text-sm text-gray-400">ML/AI Projects</div>
        </div>
        <div class="space-y-2">
          <div class="text-3xl font-bold text-purple-400">15+</div>
          <div class="text-sm text-gray-400">Technologies Mastered</div>
        </div>
        <div class="space-y-2">
          <div class="text-3xl font-bold text-green-400">∞</div>
          <div class="text-sm text-gray-400">Learning & Growing</div>
        </div>
      </div>
    </div>
  </div>
</section>
