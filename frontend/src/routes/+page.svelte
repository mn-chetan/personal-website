<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import About from "$lib/components/About.svelte";
  import Skills from "$lib/components/Skills.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Contact from "$lib/components/Contact.svelte";
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
