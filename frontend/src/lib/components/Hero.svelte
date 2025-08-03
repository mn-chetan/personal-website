<script lang="ts">
  import { onMount } from 'svelte';
  
  let heroVisible = false;
  let titleAnimated = false;
  let backgroundPosition = 50;
  
  onMount(() => {
    // Trigger entrance animations
    setTimeout(() => heroVisible = true, 100);
    setTimeout(() => titleAnimated = true, 800);
    
    // Interactive background effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      backgroundPosition = 50 + (x - 50) * 0.1;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  });
</script>

<section
  id="hero"
  class="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 relative overflow-hidden"
  style="background-position: {backgroundPosition}% center;"
>
  <div class="max-w-4xl mx-auto p-10 relative z-10">
    <!-- Professional name display -->
    <div class="mb-8">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center transform transition-all duration-1000"
          class:translate-y-0={heroVisible} class:opacity-100={heroVisible}
          class:translate-y-8={!heroVisible} class:opacity-0={!heroVisible}>
        <span class="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent whitespace-nowrap">
          Chetan M N
        </span>
      </h1>
      <div class="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto rounded-full transform transition-all duration-1000 delay-300"
           class:scale-x-100={heroVisible} class:scale-x-0={!heroVisible}></div>
    </div>
    
    <div class="text-2xl mb-6 space-y-2">
      <p class="text-white transform transition-all duration-700 delay-500"
         class:animate-slide-up={titleAnimated} class:opacity-100={titleAnimated}
         class:opacity-0={!titleAnimated}>Full-Stack Developer</p>
      <p class="text-teal-300 transform transition-all duration-700 delay-700"
         class:animate-slide-up={titleAnimated} class:opacity-100={titleAnimated}
         class:opacity-0={!titleAnimated}>Data Scientist & AI Engineer</p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-sm">
      <div class="bg-gray-800 bg-opacity-70 p-4 rounded-lg transform transition-all duration-500 delay-1000 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/20"
           class:animate-fade-in={heroVisible} class:opacity-100={heroVisible} class:opacity-0={!heroVisible}>
        <div class="text-teal-400 font-semibold">Backend</div>
        <div class="text-gray-300">Node.js • Express • APIs</div>
      </div>
      <div class="bg-gray-800 bg-opacity-70 p-4 rounded-lg transform transition-all duration-500 delay-1200 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
           class:animate-fade-in={heroVisible} class:opacity-100={heroVisible} class:opacity-0={!heroVisible}>
        <div class="text-teal-400 font-semibold">Data Science</div>
        <div class="text-gray-300">Python • ML • AI</div>
      </div>
      <div class="bg-gray-800 bg-opacity-70 p-4 rounded-lg transform transition-all duration-500 delay-1400 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
           class:animate-fade-in={heroVisible} class:opacity-100={heroVisible} class:opacity-0={!heroVisible}>
        <div class="text-teal-400 font-semibold">Modern Tech</div>
        <div class="text-gray-300">LLMs • RAG • Cloud</div>
      </div>
    </div>
    
    <a
      href="#about"
      class="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl group"
      class:animate-bounce-gentle={heroVisible}
      >Explore My Skills 
      <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </a>
  </div>
</section>
