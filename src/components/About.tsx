import React from 'react';
import {
  MapPin,
  Mail,
  FileText,
  Award,
  Briefcase,
  GraduationCap } from
'lucide-react';
// SVG Icons for LinkedIn and GitHub
function LinkedInIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path fill="currentColor" d="M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683
        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z
        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615
        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915
        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"/>
    </svg>
  );
}

function GitHubIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d='M12 .297C5.373.297 0 5.67 0 12.297c0 5.292 3.438 9.775 8.205 11.366.6.111.82-.261.82-.579 
      0-.286-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 
      1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.108-.775.418-1.304.76-1.604-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.468-2.381 
      1.235-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.004 2.045.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.655 
      1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.803 5.623-5.475 5.92.43.372.823 1.102.823 2.222 0 1.604-.015 2.897-.015 3.293 0 .32.216.694.825.576C20.565 
      22.07 24 17.587 24 12.297 24 5.67 18.627.297 12 .297z' />
    </svg>
  );
}
import { MetalPanel } from './ui/MetalPanel';
const projects = [
{
  id: '1',
  title: 'EHR Data Quality Assessment',
  description: 'Data Science Capstone Project: Data quality scoring for EHR datasets (completeness/plausibility/conformance) with anomaly detection and synthetic error testing.',
  tags: ['Python', 'Unsupervised Learning', 'SQL'],
  status: 'Active · In Progress'
},
{
  id: '2',
  title: 'Indiana University Engagement Map',
  description:
  'Layered maps for programs and partnerships using county/campus overlays and configurable tags for fast exploration',
  tags: ['Python', 'Folium/Leaflet', 'Data Visualization'],
  status: 'Active · In Progress'
},
// {
//   id: '3',
//   title: 'IU Poster Map',
//   description:
//   'Static, print-ready geospatial visualization of IU engagement data designed for clarity at poster scale.',
//   tags: ['Python', 'Geospatial', 'Data Visualization'],
//   status: 'Active · In Progress'
// },
{
  id: '4',
  title: 'AWS Solutions Architect Prep',
  description: `Structured preparation for the AWS Solutions Architect Associate exam using Adrian Cantrill’s 
  course. Emphasizes AWS fundamentals and architecture best practices, culminating in a capstone-style cloud project.`,
  tags: ['AWS', 'Cloud Architecture', 'Infrastructure as Code', 'Security', 'Networking', 'Hand-on Labs'],
  status: 'Active · In Progress'
}];

export function About() {
  return (
    <section id="about" className="py-24 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            ABOUT ME
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            Outside of data work, I enjoy snowboarding, anime, history, and building side projects. 
            I tend to learn best through hands-on experimentation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile */}
          <div className="h-full">
            <MetalPanel className="p-8 rounded-sm h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded flex items-center justify-center text-2xl font-bold text-gray-200 shadow-lg">
                  JL
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white tracking-wide">
                    John Lucaccioni
                  </h2>
                  <p className="text-blue-400 font-medium text-sm">
                    Data Science & Analytics
                  </p>
                </div>
              </div>
              <div className="space-y-4 mb-8 text-sm">
                <div className="flex items-start gap-3 text-gray-300">
                  <GraduationCap size={16} className="mt-1 text-gray-500" />
                  <div className="leading-snug">
                    <p>B.S. Data Science, Indiana University</p>
                    <p className="text-sm text-gray-300">Luddy School of Informatics, Computing, and Engineering</p>
                    <p className="text-sm text-gray-400">Minor: in Computer Science</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 text-gray-300">
                  <MapPin size={16} className="mt-1 text-gray-500" />
                  <div className="leading-snug">
                    <p>Chicago, IL</p>
                    <p className="text-sm text-gray-400">Open to Remote</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Award size={16} className="text-gray-500" />
                  <span>AWS Cloud Practitioner</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm">
                I enjoy working on problems where the data is messy and the answers aren’t obvious. I build data pipelines, analytical models, 
                and visual tools to help turn raw information into insights that people can actually use and trust.
              </p>

              <div className="flex gap-3 mb-4">
                <a
                  href="mailto:jluca98@hotmail.com"
                  className="p-2 bg-black/20 border border-white/5 hover:border-blue-500/50 rounded transition-colors">

                  <Mail size={18} className="text-gray-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/john-lucaccioni-95b159259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-black/20 border border-white/5 hover:border-blue-500/50 rounded transition-colors">

                  <LinkedInIcon size={18} className="text-gray-400" />
                </a>
                <a
                  href="https://github.com/JLuca11"
                  target="_blank"
                  rel="noopener noreferrer"

                  className="p-2 bg-black/20 border border-white/5 hover:border-blue-500/50 rounded transition-colors">

                  <GitHubIcon size={18} className="text-gray-400" />
                </a>
              </div>
              

              <div className="mt-auto">
                <a
                  href="/John Lucaccioni Resume.pdf"
                  download="John Lucaccioni Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 rounded border border-gray-600 font-medium hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg w-full">

                  <FileText size={18} />
                  <span>Download CV</span>
                </a>
              </div>
            </MetalPanel>
          </div>

          {/* Active Projects */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-green-400" />
                <h3 className="text-2xl font-bold text-white tracking-widest">
                  ACTIVE PROJECTS
                </h3>
              </div>
              <p className="text-gray-400">
                Currently in development or maintenance.
              </p>
            </div>

              <div className="grid sm:grid-cols-2 gap-6">
              {projects.map((project) =>
              <a
                key={project.id}
                href="#projects"
                className="group relative bg-black/20 border border-white/5 hover:border-green-500/50 transition-colors p-6 rounded-sm h-full flex flex-col">

                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500/50" />
                  <div className="mb-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h4>
                    <span
                    className={`text-xs px-2 py-0.5 rounded mt-2 inline-block ${project.status === 'Active · In Progress' ? 'bg-green-900/50 text-green-400' : project.status === 'Deployed' ? 'bg-blue-900/50 text-blue-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag) =>
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-black/30 text-gray-400 border border-white/10 rounded-sm">

                        {tag}
                      </span>
                  )}
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}