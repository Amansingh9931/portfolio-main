import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, tools, description, githubUrl, liveUrl, color }: any) => (
  <div className={`bg-white border-4 border-black rounded-3xl  p-6 shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all relative overflow-hidden`}>
    
    <div className={`absolute top-0 left-0 right-0 h-4 ${color} border-b-4 border-black`}></div>
    
    <div className="mt-4 flex justify-between items-start mb-4">
        <div>
            <h3 className="text-2xl font-shrikhand">{title}</h3>
            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 border border-black rounded-md ml-1 animate-pulse">
                LIVE PROJECT
            </span>
        </div>
    </div>

    <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((t: string) => (
            <span key={t} className="bg-gray-100 border border-black px-2 py-1 text-xs font-bold font-mono rounded-md">
                {t}
            </span>
        ))}
    </div>

    <ul className="list-disc list-inside space-y-2 text-sm font-medium border-t-2 border-black pt-4">
        {description.map((point: string, i: number) => (
            <li key={i}>{point}</li>
        ))}
    </ul>

    <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-lg font-bold text-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none shadow-neo-sm transition-all"
        >
          <FaGithub /> GitHub
        </a>
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-black text-white border-2 border-black px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors"
        >
          <FaExternalLinkAlt /> Live Demo
        </a>
    </div>
  </div>
);

const Projects = () => {
    const projects = [ 
      { 
        title: "College Discovery Platform", 
        color: "bg-custom-blue", 
        tools: [ "React.js", "Node.js", "Express.js", "MongoDB", "Redis", "JWT", "Tailwind CSS", "REST APIs", "Docker" ], 
        githubUrl: "https://github.com/Amansingh9931",
        liveUrl: "#",
        description: [ "Built a full-stack college discovery platform that helps students search, compare, and explore engineering colleges.", "Implemented secure JWT-based authentication, wishlist management, advanced filtering, and RESTful APIs.", "Optimized backend performance using Redis caching and efficient MongoDB queries.", "Designed a responsive interface using React.js and Tailwind CSS following a scalable MERN architecture."] 
      }, 
      { 
        title: "GroceCart",
        color: "bg-custom-purple", 
        tools: [ "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Redux Toolkit", "Tailwind CSS", "REST APIs" ], 
        githubUrl: "https://github.com/Amansingh9931",
        liveUrl: "#",
        description: [ "Developed a full-stack grocery delivery platform with user authentication, product browsing, cart management, and order placement.", "Built secure REST APIs with JWT authentication and role-based access control.", "Integrated Socket.io for real-time order and delivery status tracking between customers and delivery personnel.", "Designed a responsive frontend using React.js, Redux Toolkit, and Tailwind CSS." ] 
      }, 
      { 
        title: "Self-Healing DevOps / SRE System", 
        color: "bg-custom-red", 
        tools: [ "Jenkins", "Docker", "Linux", "Shell Scripting", "Prometheus", "Grafana", "Health Checks", "Monitoring", "Automation", "Git", "GitHub" ],
        githubUrl: "https://github.com/Amansingh9931/SelfHealing.git",
        liveUrl: "#", 
        description: [ "Built a self-healing system that detects service failures through automated health checks and triggers recovery workflows.", "Implemented restart policies and recovery scripts to reduce manual intervention during service failures.", "Simulated service failures and validated automated recovery workflows to improve service availability and resilience.", "Integrated monitoring and alerting mechanisms to improve troubleshooting and operational visibility." ] 
      }, 
      { 
        title: "Three-Tier AWS Infrastructure", 
        color: "bg-custom-yellow", 
        tools: [ "AWS EC2", "VPC", "RDS", "S3", "IAM", "Application Load Balancer", "GitHub Actions", "Linux", "Networking" ], 
        githubUrl: "https://github.com/Amansingh9931",
        liveUrl: "#", 
        description: [ "Designed and deployed a highly available three-tier AWS architecture using VPC, EC2, RDS, S3, IAM, and Application Load Balancer.", "Configured secure networking with subnets, route tables, security groups, and controlled traffic flow.", "Implemented GitHub Actions for automated application deployment to Linux-based application servers.", "Configured database backups, health checks, and monitoring to improve infrastructure reliability." ] 
      }, 
      { 
        title: "AWS Infrastructure Automation", 
        color: "bg-custom-blue", 
        tools: [ "Ansible", "AWS EC2", "Linux", "YAML", "SSH", "Apache HTTP Server", "Git" ], 
        githubUrl: "https://github.com/Amansingh9931",
        liveUrl: "#", 
        description: [ "Automated server provisioning and application deployment across multiple AWS EC2 instances using Ansible playbooks.", "Configured inventory management, package installation, server configuration, and service orchestration.", "Automated repetitive infrastructure tasks to improve deployment consistency and operational efficiency.", "Managed Linux-based servers using SSH and infrastructure configuration through YAML-based Ansible playbooks." ] 
      },
      { 
        title: "GroceCart – DevOps, CI/CD & SRE", 
        color: "bg-custom-green", 
        tools: [ "AWS", "Terraform", "Ansible", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Helm", "Argo CD", "Prometheus", "Grafana", "SonarQube", "Nexus", "Linux", "Shell" ], 
        githubUrl: "https://github.com/Amansingh9931",
        liveUrl: "#",
        description: [ "Containerized and deployed a full-stack grocery delivery platform with automated CI/CD pipelines using Jenkins and GitHub Actions.", "Provisioned AWS infrastructure using Terraform and automated server configuration and deployment using Ansible.", "Deployed containerized workloads on Kubernetes with health checks, rolling updates, and Helm-based application management.", "Implemented GitOps-based deployment workflows using Argo CD for automated and reliable Kubernetes deployments.", "Integrated Prometheus and Grafana for application and infrastructure monitoring, dashboards, service health, and resource utilization.", "Added SonarQube code-quality analysis, Nexus artifact management, logging, and deployment validation to improve release reliability." ] 
      },
    
    ];;

  return (
    <section id="projects" className="py-10 px-4 mx-auto max-w-7xl  bg-custom-yellow border-2 border-b-4 border-r-4 border-black rounded-3xl shadow-neo">
      <div className="flex items-center gap-4 mb-10">
        <div className="bg-custom-green px-8 py-3 rounded-full border-4 border-black shadow-neo">
            <h2 className="text-3xl font-shrikhand text-white">PROJECTS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
