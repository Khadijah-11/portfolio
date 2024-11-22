import React from 'react';
import { Github, ExternalLink, Code, Database, Palette } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  type: 'dev' | 'design' | 'data';
}

const projects: Project[] = [
  {
    title: "E-Commerce Analytics Dashboard",
    description: "Interactive dashboard built with React and D3.js, analyzing customer behavior and sales patterns.",
    tags: ["React", "D3.js", "Python", "Data Analysis"],
    link: "https://github.com",
    type: "data"
  },
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management system with ML-based priority suggestions.",
    tags: ["Next.js", "TensorFlow", "Node.js"],
    link: "https://github.com",
    type: "dev"
  },
  {
    title: "Brand Identity System",
    description: "Complete design system and brand guidelines for a tech startup.",
    tags: ["UI/UX", "Branding", "Design Systems"],
    link: "https://github.com",
    type: "design"
  },
  {
    title: "Predictive Market Analysis",
    description: "Machine learning model for stock market prediction using sentiment analysis.",
    tags: ["Python", "Scikit-learn", "NLP"],
    link: "https://github.com",
    type: "data"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Header Section */}
      <header className="container mx-auto px-4 py-20 max-w-4xl">
        <h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 leading-tight">
          Khadija Tagui
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          Full-stack developer and data scientist with a passion for creating beautiful, 
          functional applications. Specializing in React, Python, and machine learning, 
          I bring ideas to life through code and data.
        </p>
      </header>

      {/* Projects Section */}
      <main className="container mx-auto px-4 pb-20 max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-70 transition-all duration-300 border border-gray-700 hover:border-purple-500">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      {project.type === 'dev' && <Code className="text-blue-400" size={20} />}
                      {project.type === 'design' && <Palette className="text-pink-400" size={20} />}
                      {project.type === 'data' && <Database className="text-green-400" size={20} />}
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-sm bg-gray-700 rounded-full text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 John Doe. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;