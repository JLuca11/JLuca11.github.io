import React from 'react';
function Rivet({ className = '' }: {className?: string;}) {
  return (
    <div
      className={`absolute w-3 h-3 rounded-full bg-gradient-radial from-gray-400 via-gray-600 to-gray-800 shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3),1px_1px_3px_rgba(0,0,0,0.8)] ${className}`} />);


}
interface MetalPanelProps {
  children: React.ReactNode;
  className?: string;
}
export function MetalPanel({ children, className = '' }: MetalPanelProps) {
  return (
    <div
      className={`relative bg-gradient-to-br from-[#2d2d2d] via-[#1a1a1a] to-[#2d2d2d] border border-gray-700 shadow-2xl ${className}`}>

      <Rivet className="top-3 left-3" />
      <Rivet className="top-3 right-3" />
      <Rivet className="bottom-3 left-3" />
      <Rivet className="bottom-3 right-3" />
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
          'repeating-linear-gradient(90deg, transparent 0, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)'
        }} />

      {children}
    </div>);

}