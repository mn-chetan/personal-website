const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const projects = [
    {
        name: "AI-Powered Analytics Platform",
        description: "Full-stack application combining Node.js backend with Python ML models for real-time data analysis and intelligent insights.",
        technologies: ["Node.js", "Express.js", "Python", "TensorFlow", "MongoDB", "React"],
        category: "Full-Stack AI",
        link: "#"
    },
    {
        name: "Scalable Microservices Architecture",
        description: "Distributed system built with Node.js microservices, featuring GraphQL federation, Redis caching, and automated deployment.",
        technologies: ["Node.js", "GraphQL", "Redis", "Docker", "Kubernetes", "PostgreSQL"],
        category: "Backend Architecture",
        link: "#"
    },
    {
        name: "LLM-Enhanced Document Processing",
        description: "RAG system using vector databases and large language models for intelligent document analysis and automated summarization.",
        technologies: ["Python", "LangChain", "ChromaDB", "OpenAI API", "FastAPI", "Streamlit"],
        category: "AI/ML",
        link: "#"
    }
];

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please provide a valid email address' });
    }
    
    // Log the contact form submission
    console.log('Contact form submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
    });
    
    // In a real application, you would send emails here
    res.json({ message: 'Thank you for your message! I\'ll get back to you soon.' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
