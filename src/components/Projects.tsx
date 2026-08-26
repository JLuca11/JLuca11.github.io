import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MetalPanel } from './ui/MetalPanel';
const projects = [
{
  id: '8',
  title: 'Statswatch — Overwatch Gameplay Analytics',
  photo: 'Photos/StatswatchIcon.png',
  imageFit: 'contain' as const,
  description: 'Gameplay analytics platform combining match telemetry and computer vision to capture objective data and segment matches into team fights, enabling granular performance analysis.',
  tags: ['Python', 'Machine Learning', 'Computer Vision', 'OpenCV', 'Data Engineering', 'UX/UI'],
  link: 'https://github.com/JLuca11/Statswatch-Overwatch-Gameplay-Analytics',
  status: 'Active · In Progress'
},
{
  id: '3',
  title: 'Clinical EHR Data Quality Analysis & Reliability Assessment',
  photo: 'Photos/EHRCapstoneImg.jpg',
  description:
  'Data Science Capstone Project: Evaluated EHR documentation completeness through peer-relative anomaly detection, statistical validation, and clinical benchmarking.',
  tags: ['Python', 'Unsupervised Learning', 'SQL', 'Validation', 'Healthcare'],
  link: 'https://github.com/joluca-iu/EHR-DQ-Capstone',
  status: 'Deployed'
},
{
  id: '7',
  title: 'IU News Community Engagement Classifier',
  photo: 'Photos/IUNews.jpg',
  description: 'AI-driven pipeline that identifies community engagement activities in IU News articles and streamlines data entry and tracking.',
  tags: ['Python', 'Claude API', 'BeautifulSoup', 'Agentic AI', "NLP"],
  link: 'https://github.com/joluca-iu/IU-News-Weekly',
  status: 'Deployed'
},
{
  id: '5',
  title: 'Indiana University Engagement Map',
  photo: 'Photos/IUInteractiveMap.jpg',
  description:
  'Interactive map for programs and partnerships to explore IU partners',
  tags: ['Python', 'Folium/Leaflet', 'Geo Data', 'Data Visualization'],
  link: 'https://schoolpartnerships.iu.edu/impact/statewide-snapshot.html',
  status: 'Deployed'
},
{
  id: '6',
  title: 'IU Poster Map',
  photo: 'Photos/IUSEPosterMap.jpg',
  description: 'Static, print-ready geospatial visualization of IU engagement data designed for clarity at poster scale.',
  tags: ['Python', 'Folium/Leaflet', 'Print Design', 'Data Visualization'],
  link: 'https://github.com/JLuca11/IU-South-East-Community-Partner-Map',
  status: 'Deployed'
},
{
  id: '2',
  title: 'Referee Schedule Builder',
  photo: 'Photos/RefereeSchedulerImg.jpeg',
  description:
  'Tool that aggregates games across assignors, ranks options by time/distance, and helps build an optimal weekly schedule',
  tags: ['Python', 'APIs', 'Data Wrangling', 'Optimization', 'Map/Distances'],
  link: 'https://github.com/JLuca11/Referee-Personal-Schedule-Builder',
  status: 'Deployed'
},
{
  id: '4',
  title: 'NHL Outcome Predictor',
  photo: 'Photos/NHLPredictorImg.jpeg',
  description:
  'End-to-end sports analytics project: ingest API data, engineer features, train models, and evaluate predictions.',
  tags: ['Python', 'ML', 'Feature Engineering', 'APIs', 'Model Evaluation'],
  link: 'https://github.com/JLuca11/NHL-Outcome-Predictor',
  status: 'Deployed'
},
{
  id: '1',
  title: 'Tranquility App',
  photo: undefined,
  description:
  'iOS ambient sound mixer with customizable soundscapes and polished UI for studying and relaxation.',
  tags: ['Swift', 'iOS', 'UI/UX', 'Audio', 'Xcode'],
  link: 'https://github.com/JLuca11/Tranquility-App',
  status: 'Deployed'
},

];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const hasLink = project.link && project.link !== '#';

  const container = (
    <MetalPanel className={`relative rounded-sm overflow-hidden h-full flex flex-col bg-black/20 border border-white/5 transition-colors ${hasLink ? 'group-hover:border-green-500/50' : 'group-hover:border-gray-500/50'}`}>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500/50" />
      <div className="relative h-32 sm:h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700 overflow-hidden">
        {project.photo ? (
          <img
            src={project.photo}
            alt={project.title}
            className={`w-full h-full ${project.imageFit === 'contain' ? 'object-contain p-4' : 'object-cover'}`}
          />
        ) : (
          <span className="text-4xl font-bold text-gray-600">
            {project.title.substring(0, 2)}
          </span>
        )}
      </div>

      <div className="p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg sm:text-xl font-bold text-white">
            {project.title}
          </h3>
          <span
            className={`text-xs px-2 py-0.5 rounded flex-shrink-0 ml-2 ${project.status === 'Active · In Progress' ? 'bg-green-900/50 text-green-400' : project.status === 'Deployed' ? 'bg-blue-900/50 text-blue-400' : project.status === 'Classified' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'}`}>
            {project.status}
          </span>
        </div>

        <p className="text-sm text-gray-400 mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag) =>
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-black/30 text-gray-400 border border-white/10 rounded-sm">
              {tag}
            </span>
          )}
        </div>
      </div>
    </MetalPanel>
  );

  if (hasLink) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
        aria-label={project.title}
      >
        {container}
      </a>
    );
  }

  return (
    <div className="group block h-full cursor-default" aria-label={project.title} aria-disabled="true">
      {container}
    </div>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const visibleProjects = projects.slice(0, 6);
  const hiddenProjects = projects.slice(6);

  return (
    <section id="projects" className="py-24 px-4 sm:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            SELECTED WORK
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated set of data science and analytics projects showcasing skills in data wrangling, modeling, and visualization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) =>
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>
              <ProjectCard project={project} />
            </motion.div>
          )}

          <AnimatePresence>
            {expanded && hiddenProjects.map((project, index) =>
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}>
                <ProjectCard project={project} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-10">
          <button
            onClick={() => setExpanded(prev => !prev)}
            className="flex items-center gap-2 text-gray-400 hover:text-white border border-white/10 hover:border-green-500/50 px-6 py-3 rounded-sm transition-colors text-sm"
          >
            {expanded ? 'Show less' : 'Explore more projects'}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'inline-block' }}
            >
              ↓
            </motion.span>
          </button>
        </div>
      </div>
    </section>
  );
}
