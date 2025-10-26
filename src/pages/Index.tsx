import { useState } from "react";
import { Briefcase, GraduationCap, Code, Wrench, Heart } from "lucide-react";
import { SectionCard } from "@/components/SectionCard";
import { SectionModal } from "@/components/SectionModal";

type Section = "experience" | "education" | "projects" | "techstack" | "hobbies" | null;

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>(null);

  const sections = [
    {
      id: "experience" as Section,
      title: "Professional Experience",
      metric: "3",
      metricLabel: "Positions",
      icon: <Briefcase className="w-8 h-8" />,
    },
    {
      id: "education" as Section,
      title: "Education",
      metric: "Current",
      metricLabel: "Computer Engineering",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      id: "projects" as Section,
      title: "Projects",
      metric: "12+",
      metricLabel: "Built & Deployed",
      icon: <Code className="w-8 h-8" />,
    },
    {
      id: "techstack" as Section,
      title: "Tech Stack",
      metric: "20+",
      metricLabel: "Technologies",
      icon: <Wrench className="w-8 h-8" />,
    },
    {
      id: "hobbies" as Section,
      title: "Hobbies",
      metric: "Beyond",
      metricLabel: "The Code",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  const renderSectionContent = (section: Section) => {
    switch (section) {
      case "experience":
        return (
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold">Software Engineer Intern</h3>
                    <p className="text-accent font-medium">Tech Company Inc.</p>
                  </div>
                  <span className="text-muted-foreground">2024 - Present</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Developed full-stack applications using React, Node.js, and PostgreSQL. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold">Research Assistant</h3>
                    <p className="text-muted-foreground font-medium">University Lab</p>
                  </div>
                  <span className="text-muted-foreground">2023 - 2024</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Conducted research on machine learning algorithms and their applications 
                  in computer vision. Published findings in academic conferences.
                </p>
              </div>

              <div className="border-l-2 border-muted pl-6 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-serif font-semibold">Teaching Assistant</h3>
                    <p className="text-muted-foreground font-medium">Computer Science Department</p>
                  </div>
                  <span className="text-muted-foreground">2022 - 2023</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Assisted in teaching Data Structures and Algorithms course. 
                  Held office hours and graded assignments for 100+ students.
                </p>
              </div>
            </div>
          </div>
        );

      case "education":
        return (
          <div className="space-y-8">
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-serif font-semibold">B.S. Computer Engineering</h3>
                  <p className="text-accent font-medium">University Name</p>
                </div>
                <span className="text-muted-foreground">2021 - 2025</span>
              </div>
              <p className="text-lg text-muted-foreground">GPA: 3.8/4.0</p>
              <div className="space-y-2 mt-4">
                <p className="font-medium">Relevant Coursework:</p>
                <ul className="grid grid-cols-2 gap-2 text-muted-foreground">
                  <li>• Data Structures & Algorithms</li>
                  <li>• Computer Architecture</li>
                  <li>• Operating Systems</li>
                  <li>• Database Systems</li>
                  <li>• Machine Learning</li>
                  <li>• Software Engineering</li>
                  <li>• Computer Networks</li>
                  <li>• Web Development</li>
                </ul>
              </div>
            </div>

            <div className="border-l-2 border-muted pl-6 space-y-2">
              <h3 className="text-xl font-serif font-semibold">Honors & Awards</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dean's List (All Semesters)</li>
                <li>• Academic Excellence Scholarship</li>
                <li>• Hackathon Winner - University Tech Fest 2023</li>
                <li>• Best Project Award - Software Engineering Course</li>
              </ul>
            </div>
          </div>
        );

      case "projects":
        return (
          <div className="grid gap-6">
            {[
              {
                title: "Full-Stack E-Commerce Platform",
                description: "Built a complete e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and real-time inventory management.",
                tech: ["React", "Node.js", "MongoDB", "Stripe"],
                link: "github.com/username/ecommerce"
              },
              {
                title: "Machine Learning Image Classifier",
                description: "Developed a CNN-based image classification model achieving 95% accuracy on CIFAR-10 dataset. Deployed using Flask and Docker.",
                tech: ["Python", "TensorFlow", "Flask", "Docker"],
                link: "github.com/username/ml-classifier"
              },
              {
                title: "Real-Time Chat Application",
                description: "WebSocket-based chat app with features like group chats, file sharing, and message encryption. Built with React and Socket.io.",
                tech: ["React", "Socket.io", "Express", "PostgreSQL"],
                link: "github.com/username/chat-app"
              },
              {
                title: "Task Management System",
                description: "Collaborative project management tool with drag-and-drop interface, notifications, and team analytics dashboard.",
                tech: ["Vue.js", "Firebase", "Tailwind CSS"],
                link: "github.com/username/task-manager"
              }
            ].map((project, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:border-accent transition-smooth">
                <h3 className="text-2xl font-serif font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-secondary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={`https://${project.link}`} className="text-accent hover:underline text-sm">
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        );

      case "techstack":
        return (
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["JavaScript", "TypeScript", "Python", "Java", "C++", "SQL", "Go"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-secondary border border-border rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-3">
                  {["React", "Vue.js", "Next.js", "Tailwind CSS", "Redux", "HTML5", "CSS3"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-secondary border border-border rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Express", "Django", "Flask", "GraphQL", "REST APIs"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-secondary border border-border rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Database & Cloud</h3>
                <div className="flex flex-wrap gap-3">
                  {["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes", "Firebase"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-secondary border border-border rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Tools & Other</h3>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "VS Code", "Figma", "Postman", "Linux"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-secondary border border-border rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case "hobbies":
        return (
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Open Source Contributions",
                description: "Active contributor to various open-source projects on GitHub. Love giving back to the community that taught me so much."
              },
              {
                title: "Photography",
                description: "Passionate about landscape and street photography. Always carrying a camera to capture interesting moments and perspectives."
              },
              {
                title: "Chess",
                description: "Competitive chess player with a rating of 1800+. Enjoy the strategic thinking and problem-solving aspects of the game."
              },
              {
                title: "Tech Blogging",
                description: "Write technical articles about software development, sharing learnings and insights with the developer community."
              },
              {
                title: "Hiking & Outdoors",
                description: "Love exploring nature trails and going on weekend hiking adventures. It's my way to disconnect and recharge."
              },
              {
                title: "Music Production",
                description: "Dabble in electronic music production during free time. Enjoy experimenting with different sounds and beats."
              }
            ].map((hobby, index) => (
              <div key={index} className="border border-border rounded-lg p-6 hover:border-accent transition-smooth">
                <h3 className="text-xl font-serif font-semibold mb-3">{hobby.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-serif font-bold">Software Engineer</h1>
            <p className="text-muted-foreground">Computer Engineering Student</p>
          </div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <SectionCard
              key={section.id}
              title={section.title}
              metric={section.metric}
              metricLabel={section.metricLabel}
              icon={section.icon}
              onClick={() => setActiveSection(section.id)}
            />
          ))}
        </div>
      </main>

      {/* Modals */}
      {sections.map((section) => (
        <SectionModal
          key={section.id}
          isOpen={activeSection === section.id}
          onClose={() => setActiveSection(null)}
          title={section.title}
        >
          {renderSectionContent(section.id)}
        </SectionModal>
      ))}
    </div>
  );
};

export default Index;
