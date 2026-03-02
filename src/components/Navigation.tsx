import React from 'react';
import { UserRound } from 'lucide-react';
interface NavigationProps {
  onNavigate: (id: string) => void;
}
export function Navigation({ onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#1a1a1a]/90 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex flex-wrap justify-between items-center gap-4 sm:gap-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded flex items-center justify-center shadow-lg">
            <UserRound size={16} className="text-gray-300" />
          </div>
          <span className="font-bold text-gray-100">John Lucaccioni</span>
        </div>
        <div className="flex items-center gap-8">
          <button
            onClick={() => onNavigate('about')}
            className="text-xs sm:text-sm text-gray-400 hover:text-gray-100 transition-colors">

            About Me
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="text-xs sm:text-sm text-gray-400 hover:text-gray-100 transition-colors">

            Projects
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="text-xs sm:text-sm text-gray-400 hover:text-gray-100 transition-colors">

            Contact
          </button>
          <a
            href="/John Lucaccioni Resume.pdf"
            download="John Lucaccioni Resume.pdf"
            className="px-3 sm:px-4 py-2 w-full sm:w-auto bg-gradient-to-r from-gray-700 to-gray-800 text-gray-100 text-xs sm:text-sm font-medium rounded border border-gray-600 hover:from-gray-600 hover:to-gray-700 transition-all shadow-lg">

            Download Resume
          </a>
        </div>
      </div>
    </nav>);

}