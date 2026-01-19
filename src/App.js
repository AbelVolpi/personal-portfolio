import React, { useState } from 'react';
import { Briefcase, GraduationCap, Code, User, BookOpen, ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [hasAnimated, setHasAnimated] = useState(false);

  React.useEffect(() => {
    setHasAnimated(true);
  }, []);

  const workExperience = [
    {
      title: "Android Software Engineer",
      company: "PicPay",
      period: "Mar 2025 - Present",
      description: "Working in the Cards business unit impacting over 60 million users.",
      bullets: [
        "Develop the new Cards Home Screen with Server-Driven UI",
        "Contribute to the evolution of the company design-system using XML and Jetpack Compose",
        "Analyze and improve product health using Firebase Crashlytics and Databricks"
      ]
    },
    {
      title: "Android Software Engineer",
      company: "Idwall",
      period: "Apr 2022 - Aug 2024",
      description: "Worked on SDK Capture Suite product, a library with 1.3M monthly users intended for third parties to validate identities with document capture and liveness.",
      bullets: [
        "Develop and maintain native Android applications",
        "Check app security with Frida and Jadx tools",
        "Develop emulator and root detection for the SDK",
        "Improve app security and optimization with R8/Proguard and OWASP recommendations",
        "Maintain project scalability and quality through multi-module development with MVVM and clean architecture",
        "Cover the project with unit tests and automate CI/CD process with Bitrise",
        "Improve app accessibility with Android best practices",
        "Track features usability and errors with DataDog"
      ]
    },
    {
      title: "Android Developer",
      company: "PremierSoft",
      period: "Jun 2021 - Apr 2022",
      description: "IT consulting company developing solutions for customer applications using the following technologies:",
      bullets: [
        "Jetpack Compose and XML for UI creations",
        "MVVM as architecture pattern",
        "Kotlin language",
        "Retrofit for network calls",
        "Room and SharedPreferences for local storage",
        "Google Maps API"
      ]
    }
  ];

  const education = [
    {
      degree: "Analysis and Systems Development",
      institution: "Instituto Federal de Santa Catarina",
      period: "2022 - 2025",
      description: "Improved knowledge in databases, systems architecture and distribution, software engineering, and constantly stimulated creativity and learning new technologies."
    },
    {
      degree: "Interchange - Artificial Intelligence & CyberSecurity",
      institution: "Instituto Superior de Engenharia do Porto",
      period: "Sep 2024 - Dec 2024",
      description: "Worked as a researcher detecting phishing-based ransomware attacks using AI. Analyzed state of the art in combating attacks through machine learning, compared datasets, performed tests with classification algorithms, and compared model metrics."
    },
    {
      degree: "Information Technology Technical Course",
      institution: "Instituto Federal de Santa Catarina",
      period: "2019 - 2022",
      description: "Technical foundation in information technology and software development."
    }
  ];

  const technologies = [
    { name: "Kotlin", category: "Language" },
    { name: "Java", category: "Language" },
    { name: "Jetpack Compose", category: "UI Framework" },
    { name: "XML", category: "UI Framework" },
    { name: "MVVM", category: "Architecture" },
    { name: "Clean Architecture", category: "Architecture" },
    { name: "Retrofit", category: "Network" },
    { name: "Ktor", category: "Network" },
    { name: "Coroutines", category: "Concurrency" },
    { name: "RxJava", category: "Concurrency" },
    { name: "Room", category: "Database" },
    { name: "Firebase", category: "Tools" },
    { name: "Proguard/R8", category: "Security" },
    { name: "Frida & Jadx", category: "Security" },
    { name: "Git & GitFlow", category: "Version Control" },
    { name: "CI/CD", category: "DevOps" }
  ];

  const blogPosts = [
    {
      title: "Why I also recommend reading “Grokking Algorithms”",
      excerpt: "Recently, I saw a lot of developers and software engineers recommending this book on the internet, so I decided to read it too, to understand...",
      date: "Jul, 2024",
      url: "https://medium.com/@abelvolpi/why-i-also-recommend-reading-grokking-algorithms-45c660f72df2"
    },
    {
      title: "Como utilizar “startFragmentForResult” no seu projeto",
      excerpt: "Desenvolvedores Android, em grande parte, se encontram no cenário de criar “telas” que retornem informações para sua anterior...",
      date: "Sep, 2023",
      url: "https://medium.com/@abelvolpi/como-utilizar-startfragmentforresult-no-seu-projeto-8a656bf892fe"
    },
    {
      title: "Utilizando Kotlin Generics & abstract classes para reduzir a redundância de Fragments com ViewBinding",
      excerpt: "Um dos principais problemas que nós desenvolvedores sempre tentamos (mas nem sempre conseguimos) evitar em nossos projetos, é o chamado ‘boilerplate code’...",
      date: "Jun, 2023",
      url: "https://medium.com/@abelvolpi/utilizando-kotlin-generics-abstract-classes-para-reduzir-a-redund%C3%A2ncia-de-fragments-com-260fa5afb582"
    },
    {
      title: "Automatizando processos através de GitHooks",
      excerpt: "Já parou pra pensar o que grandes projetos têm em comum? Certamente uma das semelhanças é a grande quantidade de processos necessários...",
      date: "Jan, 2023",
      url: "https://medium.com/engineering-idwall/automatizando-processos-atrav%C3%A9s-de-githooks-e8529cd12b40"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      {/* Header/Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <h1 className={`text-2xl font-bold text-blue-400 transition-all duration-1000 ${hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                }`}>
                Abel Volpi
              </h1>
              <div className="flex gap-3">
                <a
                  href="https://github.com/AbelVolpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/abelvolpi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:abelvolpi@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => setActiveSection('about')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeSection === 'about'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
              >
                <User size={18} />
                About Me
              </button>
              <button
                onClick={() => setActiveSection('blog')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${activeSection === 'blog'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
              >
                <BookOpen size={18} />
                Blog
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {activeSection === 'about' ? (
            <div className="space-y-12">
              {/* Summary */}
              <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <User className="text-blue-400" size={28} />
                  <h2 className="text-3xl font-bold">Summary</h2>
                </div>
                <div className="flex gap-8 items-start">
                  {/* Photo */}
                  <div className="flex-shrink-0">
                    <img
                      src="https://github.com/AbelVolpi.png"
                      alt="Abel Volpi"
                      className="w-40 h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg"
                    />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    I'm a <b>Mobile Software Engineer</b> with over 4 years developing robust and
                    high-quality applications that reach over 60 million users. My primary expertise is the
                    <b> Android native</b> ecosystem, but I also have experience in cross-platform with <b>React Native</b> and <b>KMP</b>.
                    <br/><br/>
                     I'm passionate about technology and software engineering. Here you can find more about my
                    professional journey, personal projects, and some of my technical articles.
                  </p>
                </div>
              </section>

              {/* Work Experience */}
              <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="text-purple-400" size={28} />
                  <h2 className="text-3xl font-bold">Work Experience</h2>
                </div>
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-6 py-2">
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <p className="text-blue-400 font-medium">{job.company}</p>
                      <p className="text-gray-400 text-sm mb-2">{job.period}</p>
                      <p className="text-gray-300 mb-3">{job.description}</p>
                      {job.bullets && (
                        <ul className="space-y-2">
                          {job.bullets.map((bullet, idx) => (
                            <li key={idx} className="text-gray-300 flex items-start">
                              <span className="text-blue-400 mr-2 mt-1">•</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-green-400" size={28} />
                  <h2 className="text-3xl font-bold">Education</h2>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-6 py-2">
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-green-400 font-medium">{edu.institution}</p>
                      <p className="text-gray-400 text-sm mb-2">{edu.period}</p>
                      <p className="text-gray-300">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technologies and Tools */}
              <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-yellow-400" size={28} />
                  <h2 className="text-3xl font-bold">Technologies and Tools</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gray-700/50 rounded-lg p-4 border border-gray-600 hover:border-blue-500 transition-all hover:transform hover:scale-105"
                    >
                      <p className="font-semibold text-white">{tech.name}</p>
                      <p className="text-sm text-gray-400">{tech.category}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="space-y-8">
              <section className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-blue-400" size={28} />
                  <h2 className="text-3xl font-bold">Blog Posts</h2>
                </div>
                <p className="text-gray-400 mb-8">
                  My technical articles and insights about software engineering.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <a
                      key={index}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700/50 rounded-xl p-6 border border-gray-600 hover:border-blue-500 transition-all hover:transform hover:scale-105 group"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <span className="text-sm text-gray-400">{post.date}</span>
                        <ExternalLink size={18} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                    </a>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;