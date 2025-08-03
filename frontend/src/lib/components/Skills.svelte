<script lang="ts">
  import { onMount } from 'svelte';

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

  // Animation state variables
  let skillsVisible = false;
  let summaryVisible = false;
  let animatedSkills: { [key: string]: boolean } = {};
  let animatedLevels: { [key: string]: number } = {};
  let animatedCounters = { years: 0, projects: 0, technologies: 0 };

  const getColorClasses = (color: string) => {
    const colors = {
      teal: { bg: "bg-teal-500", text: "text-teal-400", border: "border-teal-500" },
      blue: { bg: "bg-blue-500", text: "text-blue-400", border: "border-blue-500" },
      purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500" }
    };
    return colors[color] || colors.teal;
  };

  // Initialize animated levels to 0
  onMount(() => {
    Object.entries(skillCategories).forEach(([category, categoryData]) => {
      categoryData.skills.forEach((skill, index) => {
        const skillKey = `${category}-${index}`;
        animatedSkills[skillKey] = false;
        animatedLevels[skillKey] = 0;
      });
    });

    // Set up intersection observers
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px'
    };

    // Observer for skills
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const categoryIndex = parseInt(entry.target.getAttribute('data-category-index') || '0');
          animateSkillsInCategory(categoryIndex);
        }
      });
    }, observerOptions);

    // Observer for summary
    const summaryObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !summaryVisible) {
          summaryVisible = true;
          animateCounters();
        }
      });
    }, observerOptions);

    // Observe skill categories
    document.querySelectorAll('[data-category-index]').forEach(el => {
      skillsObserver.observe(el);
    });

    // Observe summary section
    const summaryElement = document.querySelector('[data-summary]');
    if (summaryElement) {
      summaryObserver.observe(summaryElement);
    }

    return () => {
      skillsObserver.disconnect();
      summaryObserver.disconnect();
    };
  });

  function animateSkillsInCategory(categoryIndex: number) {
    const categoryEntries = Object.entries(skillCategories);
    if (categoryIndex >= categoryEntries.length) return;

    const [category, categoryData] = categoryEntries[categoryIndex];
    
    categoryData.skills.forEach((skill, skillIndex) => {
      const skillKey = `${category}-${skillIndex}`;
      if (!animatedSkills[skillKey]) {
        animatedSkills[skillKey] = true;
        
        setTimeout(() => {
          animateSkillBar(skillKey, skill.level);
        }, skillIndex * 100); // Stagger animations
      }
    });
  }

  function animateSkillBar(skillKey: string, targetLevel: number) {
    let currentLevel = 0;
    const increment = targetLevel / 50; // Animation over 50 frames
    const duration = 1000; // 1 second
    const frameTime = duration / 50;

    const animate = () => {
      currentLevel += increment;
      if (currentLevel >= targetLevel) {
        currentLevel = targetLevel;
        animatedLevels[skillKey] = currentLevel;
        return;
      }
      animatedLevels[skillKey] = currentLevel;
      setTimeout(animate, frameTime);
    };

    animate();
  }

  function animateCounters() {
    const targets = { years: 5, projects: 10, technologies: 15 };
    const duration = 2000; // 2 seconds
    const frameTime = 50;
    const frames = duration / frameTime;

    let frame = 0;
    const animate = () => {
      frame++;
      const progress = frame / frames;
      const easeOut = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      animatedCounters = {
        years: Math.floor(targets.years * easeOut),
        projects: Math.floor(targets.projects * easeOut),
        technologies: Math.floor(targets.technologies * easeOut)
      };

      if (frame < frames) {
        setTimeout(animate, frameTime);
      } else {
        animatedCounters = targets; // Ensure final values
      }
    };

    animate();
  }
</script>

<style>
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes skillBarGlow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(var(--skill-color), 0.5);
    }
    50% {
      box-shadow: 0 0 20px rgba(var(--skill-color), 0.8);
    }
  }

  .skill-bar-animated {
    animation: skillBarGlow 2s ease-in-out;
  }

  /* Custom glow effects for different skill colors */
  .glow-teal {
    box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
  }
  
  .glow-blue {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
  }
  
  .glow-purple {
    box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
  }
</style>

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
      {#each Object.entries(skillCategories) as [category, categoryData], categoryIndex}
        {@const colorClasses = getColorClasses(categoryData.color)}
        <div 
          class="bg-gray-800 p-8 rounded-xl shadow-lg border-l-4 {colorClasses.border} transform transition-all duration-700 opacity-0 translate-y-8"
          class:opacity-100={animatedSkills[`${category}-0`] !== undefined}
          class:translate-y-0={animatedSkills[`${category}-0`] !== undefined}
          data-category-index={categoryIndex}
        >
          <h3 class="text-2xl font-bold mb-8 {colorClasses.text}">{category}</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each categoryData.skills as skill, skillIndex}
              {@const skillKey = `${category}-${skillIndex}`}
              {@const currentLevel = animatedLevels[skillKey] || 0}
              <div 
                class="bg-gray-900 p-6 rounded-lg hover:bg-gray-750 transition-all duration-500 transform"
                class:animate-pulse={animatedSkills[skillKey] && currentLevel < skill.level}
                style="transition-delay: {skillIndex * 50}ms;"
              >
                <div class="flex justify-between items-start mb-3">
                  <h4 class="font-semibold text-white text-sm leading-tight">{skill.name}</h4>
                  <span 
                    class="text-xs font-medium {colorClasses.text} bg-gray-800 px-2 py-1 rounded transition-all duration-300"
                    class:scale-110={animatedSkills[skillKey] && currentLevel >= skill.level}
                  >
                    {Math.round(currentLevel)}%
                  </span>
                </div>
                
                <div class="w-full bg-gray-700 rounded-full h-2 mb-3 overflow-hidden">
                  <div
                    class="h-2 rounded-full {colorClasses.bg} transition-all duration-1000 ease-out"
                    class:glow-teal={categoryData.color === 'teal' && currentLevel > 0}
                    class:glow-blue={categoryData.color === 'blue' && currentLevel > 0}
                    class:glow-purple={categoryData.color === 'purple' && currentLevel > 0}
                    class:skill-bar-animated={animatedSkills[skillKey] && currentLevel >= skill.level}
                    style="width: {currentLevel}%;"
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
    <div 
      class="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-xl transform transition-all duration-700 opacity-0 translate-y-8"
      class:opacity-100={summaryVisible}
      class:translate-y-0={summaryVisible}
      data-summary
    >
      <h3 class="text-xl font-bold text-center mb-6 text-white">Core Competencies Summary</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div class="space-y-2 transform transition-all duration-500" class:scale-105={summaryVisible}>
          <div class="text-3xl font-bold text-teal-400 transition-all duration-1000">
            {animatedCounters.years}+
          </div>
          <div class="text-sm text-gray-400">Years Backend Development</div>
        </div>
        <div class="space-y-2 transform transition-all duration-500" class:scale-105={summaryVisible} style="transition-delay: 200ms;">
          <div class="text-3xl font-bold text-blue-400 transition-all duration-1000">
            {animatedCounters.projects}+
          </div>
          <div class="text-sm text-gray-400">ML/AI Projects</div>
        </div>
        <div class="space-y-2 transform transition-all duration-500" class:scale-105={summaryVisible} style="transition-delay: 400ms;">
          <div class="text-3xl font-bold text-purple-400 transition-all duration-1000">
            {animatedCounters.technologies}+
          </div>
          <div class="text-sm text-gray-400">Technologies Mastered</div>
        </div>
        <div class="space-y-2 transform transition-all duration-500" class:scale-105={summaryVisible} style="transition-delay: 600ms;">
          <div class="text-3xl font-bold text-green-400 animate-pulse">∞</div>
          <div class="text-sm text-gray-400">Learning & Growing</div>
        </div>
      </div>
    </div>
  </div>
</section>
