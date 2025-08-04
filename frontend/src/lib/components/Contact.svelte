<script lang="ts">
  let formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  let isSubmitting = false;
  let submitStatus: 'idle' | 'success' | 'error' = 'idle';
  let statusMessage = '';

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      statusMessage = 'Please fill in all required fields.';
      submitStatus = 'error';
      return;
    }
    
    isSubmitting = true;
    submitStatus = 'idle';
    
    try {
      // Use different API endpoints for development and production
      const apiEndpoint = import.meta.env.DEV 
        ? '/api/contact' 
        : 'https://formspree.io/f/mldlpddj'; // Your Formspree endpoint
      
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        submitStatus = 'success';
        statusMessage = result.message || 'Thank you for your message! I\'ll get back to you soon.';
        // Reset form
        formData = { name: '', email: '', subject: '', message: '' };
      } else {
        submitStatus = 'error';
        statusMessage = result.message || 'Something went wrong. Please try again.';
      }
    } catch (error) {
      // In production, fall back to mailto link
      if (!import.meta.env.DEV) {
        const subject = encodeURIComponent(formData.subject || 'Message from Portfolio Website');
        const body = encodeURIComponent(`Hi Chetan,\n\n${formData.message}\n\nBest regards,\n${formData.name}\n${formData.email}`);
        window.location.href = `mailto:chetan@chetanmn.me?subject=${subject}&body=${body}`;
        submitStatus = 'success';
        statusMessage = 'Opening your email client...';
        formData = { name: '', email: '', subject: '', message: '' };
      } else {
        submitStatus = 'error';
        statusMessage = 'Network error. Please check your connection and try again.';
      }
    } finally {
      isSubmitting = false;
      // Clear status after 5 seconds
      setTimeout(() => {
        submitStatus = 'idle';
        statusMessage = '';
      }, 5000);
    }
  }
</script>

<section id="contact" class="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-gray-900">
  <div class="max-w-6xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl font-bold mb-4">Let's Build Something Amazing Together</h2>
      <p class="text-lg text-gray-400 max-w-3xl mx-auto">
        Ready to discuss your next project? Whether it's building scalable backend systems, 
        implementing AI solutions, or creating data-driven applications, I'm here to help 
        turn your ideas into reality.
      </p>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Contact Form -->
      <div class="bg-gray-800 p-8 rounded-lg border border-gray-700">
        <h3 class="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
        
        <form on:submit={handleSubmit} class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                bind:value={formData.name}
                required
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                required
                class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div>
            <label for="subject" class="block text-sm font-medium text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              bind:value={formData.subject}
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200"
              placeholder="What's this about?"
            />
          </div>
          
          <div>
            <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              rows="5"
              bind:value={formData.message}
              required
              class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-200 resize-vertical"
              placeholder="Tell me about your project, ideas, or how I can help..."
            ></textarea>
          </div>
          
          <!-- Status Message -->
          {#if statusMessage}
            <div class="p-4 rounded-lg {submitStatus === 'success' ? 'bg-green-900 border border-green-600 text-green-200' : 'bg-red-900 border border-red-600 text-red-200'}">
              {statusMessage}
            </div>
          {/if}
          
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:transform-none"
          >
            {#if isSubmitting}
              <span class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            {:else}
              Send Message
            {/if}
          </button>
        </form>
      </div>

      <!-- Contact Information & Expertise -->
      <div class="space-y-8">
        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-teal-500">
          <h3 class="text-xl font-semibold text-teal-400 mb-4">Get In Touch</h3>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-teal-400">📧</span>
              <a href="mailto:chetan@chetanmn.me" class="text-white hover:text-teal-400 transition duration-300">
                chetan@chetanmn.me
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-teal-400">📱</span>
              <a href="tel:+919972426155" class="text-white hover:text-teal-400 transition duration-300">
                +91 9972426155
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <span class="text-teal-400">🌍</span>
              <span class="text-gray-300">Bangalore, India</span>
            </div>
          </div>
        </div>

        <div class="bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
          <h3 class="text-xl font-semibold text-blue-400 mb-4">Professional Links</h3>
          <div class="space-y-3">
            <a href="https://github.com/mn-chetan" target="_blank" rel="noopener noreferrer" 
               class="flex items-center space-x-3 text-white hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-gray-700 group">
              <span class="text-blue-400 text-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">⚡</span>
              <span class="flex-1">GitHub - Code Portfolio</span>
              <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
            <a href="https://linkedin.com/in/chetan-mn" target="_blank" rel="noopener noreferrer" 
               class="flex items-center space-x-3 text-white hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-gray-700 group">
              <span class="text-blue-400 text-xl transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">💼</span>
              <span class="flex-1">LinkedIn - Professional Network</span>
              <svg class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Expertise Areas -->
        <div class="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg">
          <h3 class="text-xl font-semibold text-white mb-4">What I Can Help You With</h3>
          <div class="space-y-3">
            <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
              <span class="text-teal-400 mt-1 text-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">🚀</span>
              <div>
                <h4 class="font-semibold text-white text-sm group-hover:text-teal-400 transition-colors duration-300">Backend Development</h4>
                <p class="text-gray-400 text-xs">Scalable APIs, microservices, real-time applications</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
              <span class="text-blue-400 mt-1 text-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-pulse">🤖</span>
              <div>
                <h4 class="font-semibold text-white text-sm group-hover:text-blue-400 transition-colors duration-300">AI & Machine Learning</h4>
                <p class="text-gray-400 text-xs">LLM integration, data analysis, predictive models</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
              <span class="text-purple-400 mt-1 text-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">💻</span>
              <div>
                <h4 class="font-semibold text-white text-sm group-hover:text-purple-400 transition-colors duration-300">Full-Stack Solutions</h4>
                <p class="text-gray-400 text-xs">End-to-end development, system architecture</p>
              </div>
            </div>
            <div class="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-all duration-300 group">
              <span class="text-green-400 mt-1 text-lg transform transition-transform duration-300 group-hover:scale-110 group-hover:animate-bounce">📊</span>
              <div>
                <h4 class="font-semibold text-white text-sm group-hover:text-green-400 transition-colors duration-300">Data Engineering</h4>
                <p class="text-gray-400 text-xs">ETL pipelines, analytics, visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <div class="bg-gradient-to-r from-teal-500 to-blue-500 p-8 rounded-lg">
        <h3 class="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
        <p class="text-teal-100 mb-6">Let's discuss how we can bring your vision to life with cutting-edge technology.</p>
        <a href="mailto:chetan@chetanmn.me" 
           class="inline-block bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
          Start a Conversation
        </a>
      </div>
    </div>
  </div>
</section>
