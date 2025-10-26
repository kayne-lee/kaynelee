import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap, Code, Wrench, Heart, X, Calendar, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionCard } from "@/components/SectionCard";

type Section = "experience" | "education" | "projects" | "techstack" | "hobbies" | "current" | "extracurriculars" | null;
type ConcreteSection = Exclude<Section, null>;
type SectionDefinition = {
  id: ConcreteSection;
  title: string;
  metric: string;
  metricLabel: string;
  icon: LucideIcon;
  itemCount: number;
};

type OverlayRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const CONTAINER_RADIUS = 24;
const ANIMATION_DURATION_MS = 450;

const Index = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const closeTimeoutRef = useRef<number>();
  const cardRefs = useRef<Record<ConcreteSection, HTMLDivElement | null>>({
    experience: null,
    education: null,
    projects: null,
    techstack: null,
    hobbies: null,
    current: null,
    extracurriculars: null,
  });

  const [visibleSection, setVisibleSection] = useState<Section>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState<OverlayRect | null>(null);
  const [overlayRadius, setOverlayRadius] = useState(CONTAINER_RADIUS);
  const [showContent, setShowContent] = useState(false);
  const [cachedCardRect, setCachedCardRect] = useState<OverlayRect | null>(null);

  const sections: SectionDefinition[] = [
    {
      id: "experience",
      title: "Professional Experience",
      metric: "3",
      metricLabel: "Positions",
      icon: Briefcase,
      itemCount: 3,
    },
    {
      id: "education",
      title: "Education",
      metric: "Current",
      metricLabel: "Computer Engineering",
      icon: GraduationCap,
      itemCount: 1,
    },
    {
      id: "projects",
      title: "Projects",
      metric: "12+",
      metricLabel: "Built & Deployed",
      icon: Code,
      itemCount: 4,
    },
    {
      id: "techstack",
      title: "Tech Stack",
      metric: "20+",
      metricLabel: "Technologies",
      icon: Wrench,
      itemCount: 5,
    },
    {
      id: "hobbies",
      title: "Hobbies",
      metric: "Beyond",
      metricLabel: "The Code",
      icon: Heart,
      itemCount: 6,
    },
    {
      id: "current",
      title: "Current Focus",
      metric: "Active",
      metricLabel: "Today",
      icon: Calendar,
      itemCount: 3,
    },
    {
      id: "extracurriculars",
      title: "Extracurriculars",
      metric: "5+",
      metricLabel: "Activities",
      icon: Users,
      itemCount: 5,
    },
  ];

  const currentSection = visibleSection
    ? sections.find((section) => section.id === visibleSection) ?? null
    : null;
  const SectionIcon = currentSection?.icon;

  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const renderSectionContent = (section: Section) => {
    switch (section) {
      case "experience":
        return (
          <div className="space-y-6">
              <div className="border-l-2 border-accent pl-6 space-y-2">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/40">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl text-accent font-bold">1</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
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
                </div>
              </div>

              <div className="border-l-2 border-muted pl-6 space-y-2">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl text-muted-foreground font-bold">2</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
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
                </div>
              </div>

              <div className="border-l-2 border-muted pl-6 space-y-2">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-2xl text-muted-foreground font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
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
        const projects = [
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
        ];

        return (
          <div className="grid gap-6">
            {projects.map((project, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-accent transition-smooth">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/40">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-3xl text-accent font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
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
                  </div>
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
        const hobbies = [
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
        ];

        return (
          <div className="grid md:grid-cols-2 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="border border-border rounded-lg p-6 hover:border-accent transition-smooth">
                  <div className="flex gap-3 items-start">
                    <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/40">
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-2xl text-accent font-bold">{index + 1}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-3">{hobby.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        );

      case "current":
        return (
          <div className="space-y-6">
            {/* Active Projects */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Active Projects</h3>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4 space-y-2">
                  <h4 className="text-xl font-medium">Portfolio Website</h4>
                  <p className="text-muted-foreground">Building a modern portfolio showcasing my projects and skills using React and TypeScript.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-secondary text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded">TypeScript</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded">Vite</span>
                  </div>
                </div>
                <div className="border-l-2 border-muted pl-4 space-y-2">
                  <h4 className="text-xl font-medium">Fitness Tracker App</h4>
                  <p className="text-muted-foreground">Developing a personal workout tracking application with progress analytics.</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-secondary text-xs rounded">Next.js</span>
                    <span className="px-2 py-1 bg-secondary text-xs rounded">Prisma</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gym Progress */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Gym Progress</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Bench Press</p>
                  <p className="text-2xl font-bold text-accent">185 lbs</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Squat</p>
                  <p className="text-2xl font-bold text-accent">275 lbs</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Deadlift</p>
                  <p className="text-2xl font-bold text-accent">315 lbs</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-1">Workout Streak</p>
                  <p className="text-2xl font-bold text-accent">21 days</p>
                </div>
              </div>
            </div>

            {/* Books I'm Reading */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Currently Reading</h3>
              <div className="space-y-3">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-16 h-24 bg-gradient-to-br from-accent/20 to-accent/40 rounded"></div>
                  <div>
                    <h4 className="text-lg font-medium">"Clean Code" by Robert C. Martin</h4>
                    <p className="text-sm text-muted-foreground">Learning best practices for writing maintainable code.</p>
                    <p className="text-xs text-muted-foreground mt-2">Progress: 60%</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-16 h-24 bg-gradient-to-br from-muted/20 to-muted/40 rounded"></div>
                  <div>
                    <h4 className="text-lg font-medium">"The Pragmatic Programmer" by Hunt & Thomas</h4>
                    <p className="text-sm text-muted-foreground">Deep dive into software engineering craftsmanship.</p>
                    <p className="text-xs text-muted-foreground mt-2">Progress: 30%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Music */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Recently Enjoyed</h3>
              <div className="grid grid-cols-3 gap-3">
                {["Indie Rock", "Electronic", "Jazz", "Classical", "Lofi", "Ambient"].map((genre, i) => (
                  <div key={i} className="border border-border rounded-lg p-3 text-center hover:border-accent transition-smooth">
                    <p className="text-sm font-medium">{genre}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Interests */}
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Other Focus Areas</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Learning advanced TypeScript patterns</li>
                <li>• Contributing to open-source projects</li>
                <li>• Improving Spanish language skills</li>
                <li>• Experimenting with AI/ML tools</li>
                <li>• Attending local tech meetups</li>
              </ul>
            </div>
          </div>
        );

      case "extracurriculars":
        return (
          <div className="space-y-6">
            <div className="border-l-2 border-accent pl-6 space-y-2">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-accent/20 to-accent/40">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl text-accent font-bold">1</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold">Student Council President</h3>
                      <p className="text-accent font-medium">Queen's University</p>
                    </div>
                    <span className="text-muted-foreground">2023 - 2024</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Organized campus events and represented student interests. Led initiatives for mental health awareness 
                    and organized tech workshops for fellow engineering students.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-muted pl-6 space-y-2">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl text-muted-foreground font-bold">2</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold">Hackathon Organizer</h3>
                      <p className="text-muted-foreground font-medium">University Tech Fest</p>
                    </div>
                    <span className="text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Co-organized annual hackathon with 200+ participants. Managed logistics, secured sponsorships, 
                    and mentored student teams during 48-hour coding competitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-muted pl-6 space-y-2">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl text-muted-foreground font-bold">3</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold">Peer Tutor</h3>
                      <p className="text-muted-foreground font-medium">Computer Science Department</p>
                    </div>
                    <span className="text-muted-foreground">2022 - 2023</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Tutored first-year students in programming fundamentals and data structures. 
                    Helped over 50 students improve their coding skills and problem-solving abilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-muted pl-6 space-y-2">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl text-muted-foreground font-bold">4</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold">Coding Club Co-Founder</h3>
                      <p className="text-muted-foreground font-medium">Student Led Initiative</p>
                    </div>
                    <span className="text-muted-foreground">2022 - Present</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Founded a coding club providing weekly workshops on web development, algorithms, and modern frameworks. 
                    Grew community to 100+ active members organizing tech talks and collaborative projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-muted pl-6 space-y-2">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-gradient-to-br from-muted/20 to-muted/40">
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-2xl text-muted-foreground font-bold">5</span>
                  </div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-serif font-semibold">Mentorship Program Volunteer</h3>
                      <p className="text-muted-foreground font-medium">Tech Career Center</p>
                    </div>
                    <span className="text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Mentor first-year CS students providing guidance on academics, career paths, and internship preparation. 
                    Help bridge the gap between university learning and industry expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const openSection = (section: ConcreteSection) => {
    const container = gridRef.current;
    const card = cardRefs.current[section];

    if (!container || !card) {
      setVisibleSection(section);
      setOverlayStyle(null);
      setOverlayRadius(CONTAINER_RADIUS);
      setIsClosing(false);
      setShowContent(true);
      setCachedCardRect(null);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    
    // Start position - card position relative to container
    const startRect: OverlayRect = {
      top: cardRect.top - containerRect.top,
      left: cardRect.left - containerRect.left,
      width: cardRect.width,
      height: cardRect.height,
    };
    
    const cardRadius = parseFloat(window.getComputedStyle(card).borderRadius) || CONTAINER_RADIUS;

    // Cache the card position for smooth closing
    setCachedCardRect(startRect);

    // Set initial state - overlay starts at card size with no content
    setIsClosing(false);
    setShowContent(false);
    setOverlayStyle(startRect);
    setOverlayRadius(cardRadius);
    setVisibleSection(section);

    // Animate to full container size
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      // Animate to cover entire container
      setOverlayStyle({
        top: 0,
        left: 0,
        width: containerRect.width,
        height: containerRect.height,
      });
      setOverlayRadius(CONTAINER_RADIUS);
    });

    // Show content after expansion animation completes
    window.setTimeout(() => {
      setShowContent(true);
    }, ANIMATION_DURATION_MS + 50);
  };

  const closeSection = (section: ConcreteSection, onClosed?: () => void) => {
    const container = gridRef.current;
    
    if (!container || !cachedCardRect) {
      setVisibleSection(null);
      setOverlayStyle(null);
      setOverlayRadius(CONTAINER_RADIUS);
      setIsClosing(false);
      setShowContent(false);
      setCachedCardRect(null);
      onClosed?.();
      return;
    }

    const card = cardRefs.current[section];
    const cardRadius = card ? parseFloat(window.getComputedStyle(card).borderRadius) || CONTAINER_RADIUS : CONTAINER_RADIUS;

    // Hide content first
    setShowContent(false);
    setIsClosing(true);

    // Wait briefly for content to fade, then animate back to card position
    // The grid transition is happening at the same time
    window.setTimeout(() => {
      setOverlayStyle(cachedCardRect);
      setOverlayRadius(cardRadius);
    }, 100);

    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    // Clean up after animation completes
    closeTimeoutRef.current = window.setTimeout(() => {
      setVisibleSection(null);
      setOverlayStyle(null);
      setOverlayRadius(CONTAINER_RADIUS);
      setIsClosing(false);
      setShowContent(false);
      setCachedCardRect(null);
      onClosed?.();
    }, ANIMATION_DURATION_MS + 100);
  };

  const handleCardClick = (section: Section) => {
    if (!section || isClosing) return;

    if (visibleSection === section) {
      closeSection(section);
      return;
    }

    if (visibleSection && visibleSection !== section) {
      closeSection(visibleSection as ConcreteSection, () => openSection(section as ConcreteSection));
      return;
    }

    openSection(section as ConcreteSection);
  };

  const handleClose = () => {
    if (!visibleSection || isClosing) return;
    closeSection(visibleSection as ConcreteSection);
  };

  return (
    <div className="h-screen overflow-hidden bg-background flex flex-col">
      <header className="border-b border-border bg-card/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="relative h-16 w-16 overflow-hidden rounded-full border border-border shadow-md">
                <img
                  src="/headshot.jpg"
                  alt="Kayne Lee headshot"
                  className="object-cover transition-all duration-700 ease-out scale-100 hover:scale-105"
                  sizes="64px"
                />
              </div>
              <div className="space-y-1">
                <h1 className="text-3xl font-serif font-bold text-foreground">Kayne Lee</h1>
                <p className="text-muted-foreground max-w-xl">
                  Software Developer Intern @ IBM <br />
                  Computer Engineering @ Queen's University
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
              <a
                href="mailto:kayne.lee2@outlook.com"
                className="rounded-full border border-border px-4 py-2 transition-all duration-300 ease-out hover:border-accent hover:text-foreground"
              >
                kayne.lee2@outlook.com
              </a>
              <a
                href="https://www.linkedin.com/in/kaynelee"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 transition-all duration-300 ease-out hover:border-accent hover:text-foreground"
              >
                linkedin.com/in/kaynelee
              </a>
              <a
                href="https://github.com/kayne-lee"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-4 py-2 transition-all duration-300 ease-out hover:border-accent hover:text-foreground"
              >
                github.com/kayne-lee
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto h-full px-6 md:px-8 py-10">
          <div
            ref={gridRef}
            className="relative h-full overflow-hidden rounded-3xl border border-border bg-card/60 p-6 shadow-lg"
          >
            <div
              className={`grid h-full gap-3 md:gap-4 lg:gap-5 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr transition-all duration-500 ease-out ${
                visibleSection && !isClosing
                  ? "pointer-events-none scale-95 opacity-0"
                  : "pointer-events-auto scale-100 opacity-100"
              }`}
            >
              {sections.map((section) => (
                <div
                  key={section.id}
                  ref={(node) => {
                    cardRefs.current[section.id] = node;
                  }}
                  className={`transition-all duration-500 ease-out rounded-[24px] ${
                    section.id === "experience" || section.id === "extracurriculars" ? "md:col-span-2 lg:col-span-2" : ""
                  }`}
                >
                  <SectionCard
                    title={section.title}
                    metric={section.metric}
                    metricLabel={section.metricLabel}
                    icon={section.icon}
                    itemCount={section.itemCount}
                    onClick={() => handleCardClick(section.id)}
                  />
                </div>
              ))}
            </div>

            {visibleSection && overlayStyle && (
              <div
                className={`absolute z-20 flex flex-col ${
                  showContent ? 'bg-card backdrop-blur-sm shadow-2xl' : ''
                } ${isClosing ? "pointer-events-none" : "pointer-events-auto"}`}
                style={{
                  top: overlayStyle.top,
                  left: overlayStyle.left,
                  width: overlayStyle.width,
                  height: overlayStyle.height,
                  borderRadius: overlayRadius,
                  backgroundColor: showContent ? 'hsl(var(--card))' : 'transparent',
                  border: showContent ? '1px solid hsl(var(--border))' : 'none',
                  padding: showContent ? '2rem' : '0',
                  transition: `top ${ANIMATION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), left ${ANIMATION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), width ${ANIMATION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), height ${ANIMATION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), border-radius ${ANIMATION_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), background-color 200ms, border 200ms, padding 200ms`,
                }}
              >
                {/* Only show content when expanded (not at card size) */}
                {showContent && (
                  <>
                    <div className="flex items-start justify-between gap-6 mb-6">
                      <div className="flex items-start gap-4">
                        {SectionIcon && (
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-sm">
                            <SectionIcon className="h-7 w-7 md:h-8 md:w-8" />
                          </div>
                        )}
                        <div className="space-y-2">
                          <p className="text-sm uppercase tracking-wide text-muted-foreground">
                            {currentSection?.metricLabel}
                          </p>
                          <h2 className="text-3xl font-serif font-semibold text-foreground">
                            {currentSection?.title}
                          </h2>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleClose}
                        className="rounded-full border border-border p-2 text-muted-foreground transition-all duration-300 ease-out hover:border-accent hover:text-foreground"
                        aria-label="Close section"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="overflow-y-auto pr-2 text-foreground flex-1">
                      {renderSectionContent(visibleSection)}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
