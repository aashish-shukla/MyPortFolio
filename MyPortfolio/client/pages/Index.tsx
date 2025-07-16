import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Monitor,
  Calendar,
  Award,
  GraduationCap,
  Send,
  ChevronRight,
  Star,
  Briefcase,
  Users,
  Terminal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});
  const { scrollYProgress } = useScroll();

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = {
    languages: ["Python", "C++", "Java", "JavaScript", "Swift", "SQL"],
    webDev: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "Django",
    ],
    iosDev: ["Swift", "UIKit", "Xcode", "iOS MVC", "Storyboards"],
    tools: ["Git", "GitHub", "Postman", "Figma", "Firebase", "CRON"],
    concepts: ["DSA", "OOP", "MVC", "Responsive Design", "API Development"],
  };

  const projects = [
    {
      title: "Stock Market Analysis and Visualization App",
      tech: "Python FullStack",
      period: "Jun 2025 – July 2025",
      description:
        "Built a full stack web application for real-time stock market analysis, allowing users to monitor stock prices, visualize trends, and manage investment insights.",
      features: [
        "Interactive charts using JavaScript libraries",
        "Django Framework integration",
        "Python backend for data fetching and processing",
        "Customizable watchlists and historical data visualization",
      ],
      icon: <Monitor className="w-6 h-6" />,
    },
    {
      title: "Local Artisan Marketplace Website",
      tech: "MERN Stack",
      period: "Aug 2024 – Dec 2024",
      description:
        "Addresses the issue of limited digital exposure for local artisans by providing a centralized platform to showcase and sell handmade products.",
      features: [
        "Admin control and inventory management",
        "Domain-integrated deployment",
        "MongoDB, Express.js, React.js, and Node.js",
        "Enhanced visibility for local artisans",
      ],
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Notes Making Website (NOTESME)",
      tech: "MERN Stack",
      period: "Jun 2024 – Aug 2024",
      description:
        "Facilitated collaborative note-taking for students and professionals with real-time syncing and user authentication.",
      features: [
        "Real-time syncing across devices",
        "Markdown support and autosave",
        "Custom domain deployment",
        "30% increase in user efficiency",
      ],
      icon: <Code2 className="w-6 h-6" />,
    },
  ];

  const certifications = [
    {
      title: "Generative AI with Large Language Models",
      issuer: "DeepLearning.AI",
      date: "Apr 2024",
      icon: <Star className="w-5 h-5" />,
    },
    {
      title: "HTML, CSS, and JavaScript for Web Developers",
      issuer: "Johns Hopkins University (Coursera)",
      date: "May 2024",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "Server-Side JavaScript with Node.js",
      issuer: "NIIT",
      date: "May 2024",
      icon: <Database className="w-5 h-5" />,
    },
    {
      title: "Introduction to Front-End Development",
      issuer: "Meta (Coursera)",
      date: "May 2024",
      icon: <Monitor className="w-5 h-5" />,
    },
  ];

  const education = [
    {
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "Aug 2022 – Present",
      grade: "CGPA: 7.76",
      location: "Punjab, India",
    },
    {
      institution: "Primus Public School",
      degree: "Intermediate (XII)",
      period: "June 2019 – May 2021",
      grade: "Percentage: 76.8%",
      location: "Muzaffarpur, Bihar",
    },
    {
      institution: "Cambridge Prep. Public School",
      degree: "Matriculation (X)",
      period: "Apr 2018 – May 2019",
      grade: "Percentage: 82%",
      location: "Muzaffarpur, Bihar",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tech-gray-50 via-white to-tech-blue-50">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-tech-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-tech-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-tech-blue-100 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </motion.div>

        {/* Mouse follower */}
        <motion.div
          className="absolute w-6 h-6 bg-tech-blue-500 rounded-full opacity-20 pointer-events-none"
          animate={{
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="relative z-50 bg-white/80 backdrop-blur-sm border-b border-tech-gray-200 sticky top-0"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl lg:text-3xl font-bold text-tech-gray-900">
                Aashish Kumar Shukla
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-tech-gray-600 mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Muzaffarpur, Bihar, India</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>+91 9693466028</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>shuklaaashish90@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a
                  href="https://linkedin.com/in/aashish-kumar-shukla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a
                  href="https://github.com/aashishshukla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a
                  href="https://leetcode.com/u/Aashishshukla"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Terminal className="w-4 h-4" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-tech-gray-50 via-white to-tech-blue-50">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Gradient Orbs */}
          <motion.div
            className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-tech-blue-400 to-tech-blue-600 rounded-full opacity-20 blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-tech-blue-300 to-tech-blue-500 rounded-full opacity-15 blur-2xl"
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 5,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-tech-blue-200 to-tech-blue-400 rounded-full opacity-25 blur-xl"
            animate={{
              x: [0, 120, 0],
              y: [0, -80, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
          />

          {/* Geometric Patterns */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 w-2 h-2 bg-tech-blue-600 rounded-full animate-ping" />
            <div className="absolute top-40 right-32 w-1 h-1 bg-tech-blue-500 rounded-full animate-pulse" />
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-tech-blue-700 rounded-full animate-bounce" />
            <div
              className="absolute top-1/3 right-1/4 w-2 h-2 bg-tech-blue-400 rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            />
            <div
              className="absolute bottom-1/4 right-20 w-1 h-1 bg-tech-blue-600 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          {/* Floating Code Symbols */}
          <motion.div
            className="absolute top-1/4 left-1/3 text-tech-blue-400 opacity-20 font-mono text-6xl select-none pointer-events-none"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {`{}`}
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/3 text-tech-blue-500 opacity-15 font-mono text-4xl select-none pointer-events-none"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            {`</>`}
          </motion.div>
          <motion.div
            className="absolute top-1/2 left-20 text-tech-blue-300 opacity-25 font-mono text-5xl select-none pointer-events-none"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          >
            {`()`}
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{ y: textY }}
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-8"
            >
              <Badge
                variant="outline"
                className="px-6 py-2 text-tech-blue-700 border-tech-blue-300 bg-white/80 backdrop-blur-sm hover:bg-tech-blue-50 transition-all duration-300 shadow-lg"
              >
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Available for opportunities
                </motion.span>
              </Badge>
            </motion.div>

            {/* Enhanced Title with Letter Animation */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-gray-900 mb-6 leading-tight"
              initial="hidden"
              animate="visible"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="block"
              >
                Hi, I'm{" "}
                <motion.span
                  className="inline-block bg-gradient-to-r from-tech-blue-600 via-tech-blue-700 to-tech-blue-800 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Aashish
                </motion.span>
                {" ��"}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block bg-gradient-to-r from-tech-blue-600 via-tech-blue-700 to-tech-blue-800 bg-clip-text text-transparent"
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "300% 300%",
                  }}
                  className="bg-gradient-to-r from-tech-blue-500 via-tech-blue-600 via-tech-blue-700 to-tech-blue-800 bg-clip-text text-transparent"
                >
                  Full Stack Web &amp; iOS Developer
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Simplified Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-tech-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              <p>
                Passionate about crafting{" "}
                <span className="font-semibold text-tech-blue-700">
                  scalable web and mobile applications
                </span>{" "}
                using{" "}
                <span className="font-semibold text-tech-blue-600">
                  React, Node.js, Django, Swift
                </span>
                . I love solving problems with clean code and real-time data.
              </p>
            </motion.div>

            {/* Enhanced Buttons with Glow Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-tech-blue-600 to-tech-blue-700 hover:from-tech-blue-700 hover:to-tech-blue-800 text-white gap-2 shadow-lg hover:shadow-xl relative overflow-hidden group transition-all duration-300"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Mail className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Get In Touch</span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-tech-blue-300 text-tech-blue-700 hover:bg-tech-blue-50 hover:border-tech-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-tech-blue-50/0 via-tech-blue-100/50 to-tech-blue-50/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Briefcase className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">View Projects</span>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats or Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 mb-20 flex flex-wrap justify-center gap-6 text-center"
            >
              {[
                {
                  label: "Projects Built",
                  value: "10+",
                  icon: <Code2 className="w-4 h-4" />,
                },
                {
                  label: "Technologies",
                  value: "15+",
                  icon: <Database className="w-4 h-4" />,
                },
                {
                  label: "Experience",
                  value: "2+ Years",
                  icon: <Calendar className="w-4 h-4" />,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-3 shadow-md border border-tech-blue-200 hover:border-tech-blue-300 transition-all duration-300"
                >
                  <div className="flex items-center justify-center gap-2 text-tech-blue-600 mb-1">
                    {stat.icon}
                    <span className="font-bold text-base">{stat.value}</span>
                  </div>
                  <div className="text-xs text-tech-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Code Animation Background */}
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <motion.div
            className="absolute inset-0 text-tech-blue-600 font-mono text-sm leading-relaxed"
            animate={{ y: [-20, -150] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <pre className="whitespace-pre-wrap p-8">
              {`const developer = {
  name: "Aashish Kumar Shukla",
  skills: ["React", "Node.js", "Python", "Swift", "MongoDB"],
  passion: "Building innovative solutions",
  currentFocus: "Full Stack Development",
  experience: "2+ years",
  education: "B.Tech Computer Science",
  location: "Muzaffarpur, Bihar, India"
};

class FullStackDeveloper {
  constructor(name, skills) {
    this.name = name;
    this.skills = skills;
    this.projects = [];
  }

  async buildAmazingProject(idea) {
    const technologies = this.selectBestTech(idea);
    const solution = await this.code(technologies);
    return this.deploy(solution);
  }

  code(technologies) {
    return technologies.map(tech => 
      tech + " + creativity + dedication + coffee"
    ).join(" → ");
  }
}

const aashish = new FullStackDeveloper(
  "Aashish Kumar Shukla",
  ["React", "Node.js", "Python", "Swift"]
);

export default aashish;`}
            </pre>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-1 text-tech-gray-400 hover:text-tech-blue-600 transition-colors cursor-pointer"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <div className="w-4 h-6 border-2 border-current rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-0.5 h-1.5 bg-current rounded-full mt-1"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <section className="py-32 px-6 bg-white/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-tech-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-tech-gray-600 max-w-3xl mx-auto">
              B.Tech in Computer Science from Lovely Professional University.
              Enthusiastic about Web Development, Data Structures, iOS Apps, and
              building solutions with impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 bg-gradient-to-br from-tech-blue-50 to-white border-tech-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-tech-gray-900 flex items-center gap-3">
                    <GraduationCap className="w-8 h-8 text-tech-blue-600" />
                    Current Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-tech-gray-900">
                        B.Tech in Computer Science and Engineering
                      </h3>
                      <p className="text-tech-gray-600">
                        Lovely Professional University (2022–Present)
                      </p>
                      <p className="text-tech-gray-600">CGPA: 7.76</p>
                    </div>
                    <div className="pt-4 border-t border-tech-gray-200">
                      <p className="text-tech-gray-700">
                        Currently pursuing my degree with a focus on modern web
                        technologies, data structures, and mobile app
                        development. Actively building projects that solve
                        real-world problems.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue-100 p-3 rounded-lg">
                    <Code2 className="w-6 h-6 text-tech-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tech-gray-900 mb-2">
                      Web Development
                    </h3>
                    <p className="text-tech-gray-600">
                      Expert in React.js, Node.js, Express, and MongoDB for
                      building scalable full-stack applications.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue-100 p-3 rounded-lg">
                    <Smartphone className="w-6 h-6 text-tech-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tech-gray-900 mb-2">
                      iOS Development
                    </h3>
                    <p className="text-tech-gray-600">
                      Proficient in Swift, UIKit, and iOS MVC architecture for
                      creating intuitive mobile experiences.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-tech-blue-100 p-3 rounded-lg">
                    <Database className="w-6 h-6 text-tech-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-tech-gray-900 mb-2">
                      Backend & Data
                    </h3>
                    <p className="text-tech-gray-600">
                      Strong foundation in Python, Django, RESTful APIs, and
                      database optimization.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-tech-gray-50 to-tech-blue-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-gray-900 mb-4 sm:mb-6">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl text-tech-gray-600">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <Card className="p-4 sm:p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-tech-gray-900 text-lg sm:text-xl">
                    <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-tech-blue-600" />
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-tech-blue-100 text-tech-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-4 sm:p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-tech-gray-900 text-lg sm:text-xl">
                    <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-tech-blue-600" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.webDev.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-tech-blue-100 text-tech-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Card className="p-4 sm:p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-tech-gray-900 text-lg sm:text-xl">
                    <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-tech-blue-600" />
                    iOS Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.iosDev.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-tech-blue-100 text-tech-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="p-4 sm:p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-tech-gray-900 text-lg sm:text-xl">
                    <Database className="w-5 h-5 sm:w-6 sm:h-6 text-tech-blue-600" />
                    Tools & Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-tech-blue-100 text-tech-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Card className="p-4 sm:p-6 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-tech-gray-900 text-lg sm:text-xl">
                    <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-tech-blue-600" />
                    Core Concepts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skills.concepts.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-tech-blue-100 text-tech-blue-800"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-gray-900 mb-4 sm:mb-6">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-tech-gray-600">
              Building solutions that make a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-4 sm:p-6 h-full bg-gradient-to-br from-white to-tech-blue-50 hover:shadow-xl transition-all duration-300 border-tech-blue-200">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="bg-tech-blue-100 p-2 sm:p-3 rounded-lg group-hover:bg-tech-blue-200 transition-colors">
                        {project.icon}
                      </div>
                      <Badge
                        variant="outline"
                        className="border-tech-blue-300 text-tech-blue-700"
                      >
                        {project.tech}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-tech-gray-900 group-hover:text-tech-blue-800 transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-tech-gray-600">
                      {project.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-tech-gray-700 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-tech-gray-600"
                        >
                          <ChevronRight className="w-4 h-4 text-tech-blue-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Card className="p-6 sm:p-8 bg-gradient-to-r from-tech-blue-50 to-tech-blue-100 border-tech-blue-200">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl text-tech-gray-900 mb-4">
                  Training Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/80 rounded-lg p-4 sm:p-6 shadow-sm">
                    <h3 className="font-semibold text-tech-gray-900 mb-2">
                      Full Stack Development using MERN Stack
                    </h3>
                    <p className="text-tech-blue-700 font-medium mb-3">
                      Cipher Schools (Edtech Company) • May 2024
                    </p>
                    <div className="text-tech-gray-700 space-y-2">
                      <p>
                        • Completed comprehensive training covering MongoDB,
                        Express.js, React.js, Node.js, RESTful APIs, and
                        responsive web design
                      </p>
                      <p>
                        • Developed "Notes Me" application resulting in 30%
                        increase in user efficiency
                      </p>
                      <p>
                        • Optimized database queries and application structure
                        for improved scalability and performance
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-tech-gray-50 to-tech-blue-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-gray-900 mb-4 sm:mb-6">
              Certifications
            </h2>
            <p className="text-lg sm:text-xl text-tech-gray-600">
              Continuous learning and professional development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-tech-blue-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-tech-gray-900 mb-2 leading-tight text-sm sm:text-base">
                        {cert.title}
                      </h3>
                      <p className="text-tech-blue-700 font-medium mb-1">
                        {cert.issuer}
                      </p>
                      <p className="text-tech-gray-600 text-sm">{cert.date}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-tech-gray-900 mb-4 sm:mb-6">
              Education
            </h2>
            <p className="text-lg sm:text-xl text-tech-gray-600">
              Academic journey and achievements
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-tech-blue-200"></div>

              <div className="space-y-12">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="relative flex items-start gap-8"
                  >
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-tech-blue-600 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <Card className="flex-1 p-6 bg-gradient-to-r from-white to-tech-blue-50 border-tech-blue-200">
                      <CardHeader>
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-tech-gray-900">
                              {edu.institution}
                            </CardTitle>
                            <CardDescription className="text-tech-blue-700 font-medium">
                              {edu.degree}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant="outline"
                              className="border-tech-blue-300 text-tech-blue-700 mb-1"
                            >
                              {edu.period}
                            </Badge>
                            <p className="text-sm text-tech-gray-600">
                              {edu.location}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-tech-gray-700 font-medium">
                          {edu.grade}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-tech-gray-50 via-white to-tech-blue-50 opacity-80"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-tech-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-tech-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-1000"></div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-tech-gray-900 mb-6">
              Let's Build Something Together!
            </h2>
            <p className="text-xl text-tech-gray-600 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-8 bg-white/90 backdrop-blur-lg border-tech-blue-200 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-tech-gray-800 mb-3">
                        Name
                      </label>
                      <Input
                        placeholder="Your name"
                        className="bg-tech-gray-50 border-tech-gray-300 text-tech-gray-900 placeholder:text-tech-gray-500 focus:border-tech-blue-500 focus:ring-tech-blue-500 transition-colors h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-tech-gray-800 mb-3">
                        Email
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-tech-gray-50 border-tech-gray-300 text-tech-gray-900 placeholder:text-tech-gray-500 focus:border-tech-blue-500 focus:ring-tech-blue-500 transition-colors h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-tech-gray-800 mb-3">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="bg-tech-gray-50 border-tech-gray-300 text-tech-gray-900 placeholder:text-tech-gray-500 focus:border-tech-blue-500 focus:ring-tech-blue-500 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-tech-blue-600 to-tech-blue-700 hover:from-tech-blue-700 hover:to-tech-blue-800 text-white gap-2 h-12 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Additional Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 text-center"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-tech-blue-200 hover:bg-white/90 transition-all duration-300">
                  <Mail className="w-8 h-8 text-tech-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-tech-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-tech-gray-600 text-sm break-words">
                    shuklaaashish90@gmail.com
                  </p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-tech-blue-200 hover:bg-white/90 transition-all duration-300">
                  <Phone className="w-8 h-8 text-tech-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-tech-gray-900 mb-2">
                    Phone
                  </h3>
                  <p className="text-tech-gray-600 text-sm">+91 9693466028</p>
                </div>
                <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-tech-blue-200 hover:bg-white/90 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-tech-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-tech-gray-900 mb-2">
                    Location
                  </h3>
                  <p className="text-tech-gray-600 text-sm">
                    Muzaffarpur, Bihar, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-tech-gray-900 text-tech-gray-300">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p>&copy; 2024 Aashish Kumar Shukla. All rights reserved.</p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/aashish-kumar-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tech-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/aashishshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tech-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://leetcode.com/u/Aashishshukla"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tech-blue-400 transition-colors"
              >
                <Terminal className="w-5 h-5" />
              </a>
              <a
                href="mailto:shuklaaashish90@gmail.com"
                className="hover:text-tech-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
