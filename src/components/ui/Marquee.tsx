import React from 'react';

const Marquee = () => {
  return (
    <div className="bg-custom-yellow border-y-4 border-black py-3 overflow-hidden whitespace-nowrap relative rotate-[-2deg] scale-105 z-20 my-10">
      <div className="animate-marquee inline-block font-sans font-bold text-xl uppercase tracking-wide">
        <span className="mx-4">I am a final-year B.Tech student in Computer Science and Engineering at Sarala Birla University, Ranchi. • </span>
        <span className="mx-4">Having studied at several places throughout my school years, I have learned to adapt quickly to new environments, work with diverse groups of people, and make the most of new opportunities. • </span>
        <span className="mx-4">I'm always excited to connect with people building interesting products, infrastructure, AI systems, or conducting impactful research. • </span>
        <span className="mx-4">Open to Software Engineering and Research opportunities. • </span>
        <span className="mx-4">📩 Contact: amansingh12073@gmail.com</span>
      </div>

      <div className="animate-marquee inline-block font-sans font-bold text-xl uppercase tracking-wide absolute top-3 left-0" aria-hidden="true">
        <span className="mx-4">I am a final-year B.Tech student in Computer Science and Engineering at Sarala Birla University, Ranchi. • </span>
        <span className="mx-4">Having studied at several places throughout my school years, I have learned to adapt quickly to new environments, work with diverse groups of people, and make the most of new opportunities. • </span>
        <span className="mx-4">I'm always excited to connect with people building interesting products, infrastructure, AI systems, or conducting impactful research. • </span>
        <span className="mx-4">Open to Software Engineering and Research opportunities. • </span>
        <span className="mx-4">📩 Contact: amansingh12073@gmail.com</span>
      </div>
    </div>
  );
};

export default Marquee;