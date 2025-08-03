<script lang="ts">
  import { onMount } from "svelte";
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Contact from "$lib/components/Contact.svelte";

  let showBackToTop = false;

  onMount(() => {
    const handleScroll = () => {
      showBackToTop = window.scrollY > 300;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<svelte:head>
  <title>Chetan MN - Full-Stack Developer & Data Scientist</title>
  <meta
    name="description"
    content="Professional portfolio of Chetan MN, a full-stack developer and data scientist specializing in Node.js, Python, AI/ML, and modern web technologies."
  />
</svelte:head>

<div class="bg-gray-900 text-white">
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Contact />
</div>

<!-- Back to Top Button -->
{#if showBackToTop}
  <button
    on:click={scrollToTop}
    class="fixed bottom-8 right-8 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-fade-in"
    aria-label="Back to top"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
    </svg>
  </button>
{/if}
