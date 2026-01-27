import React from 'react';
import { motion } from 'framer-motion';
import { MetalPanel } from './ui/MetalPanel';
const projects = [
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
  id: '6',
  title: 'IU Poster Map',
  photo: 'Photos/IUSEPosterMap.jpg',
  description: 'Static, print-ready geospatial visualization of IU engagement data designed for clarity at poster scale.',
  tags: ['Python', 'Folium/Leaflet', 'Print Design', 'Data Visualization'],
  link: 'https://github.com/JLuca11/IU-South-East-Community-Partner-Map',
  status: 'Deployed'
},
{
  id: '3',
  title: 'EHR Data Quality Assessment',
  photo: undefined,
  description:
  'Data quality scoring for EHR datasets (completeness/plausibility/conformance) with anomaly detection and synthetic error testing.',
  tags: ['Python', 'Unsupervised Learning', 'SQL', 'Validation', 'Healthcare'],
  link: '#',
  status: 'Active · In Progress'
},
{
  id: '5',
  title: 'Indiana University Engagement Map',
  photo: undefined,
  description:
  'Layered maps for programs and partnerships using county/campus overlays and configurable tags for fast exploration',
  tags: ['Python', 'Folium/Leaflet', 'Geo Data', 'Data Visualization'],
  link: '#',
  status: 'Active · In Progress'
},

];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            SELECTED WORK
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl">
            A curated set of data science and analytics projects, from raw ingestion to real-world insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) =>
          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}>

              {(() => {
                const hasLink = project.link && project.link !== '#';

                const container = (
                  <MetalPanel className={`relative rounded-sm overflow-hidden h-full flex flex-col bg-black/20 border border-white/5 transition-colors ${hasLink ? 'group-hover:border-green-500/50' : 'group-hover:border-gray-500/50'}`}>
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500/50" />
                  <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-b border-gray-700 overflow-hidden">
                  {project.photo ? (
                    <img
                      src={project.photo}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-4xl font-bold text-gray-600">
                      {project.title.substring(0, 2)}
                    </span>
                  )}
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
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
              })()}
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}