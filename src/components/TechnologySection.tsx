import React from 'react';

const pillars = [
  {
    title: 'Biology',
    description:
      'Unlock the secrets of life to improve health, biodiversity, and innovative solutions.',
    image:
      'images/biology.jpg',
  },
  {
    title: 'Chemistry',
    description:
      'Transform materials and processes through precise molecular design for breakthroughs in medicine, technology, and sustainability.',
    image:
      'images/chemistry.jpg'
  },
  {
    title: 'Artificial Intelligence',
    description:
      'AI speeds up discoveries by analyzing data and finding patterns to drive innovation across all fields.',
    image:
      'images/ai.jpg'
  },
];

export const TechnologySection: React.FC = () => (
  <section
    id='technology'
    className='min-h-screen flex items-center justify-center bg-white'
  >
    <div className='w-full max-w-5xl mx-auto px-2 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold mb-3 font-inter text-[#1464B9]'>
        AI-Powered Drug Discovery
      </h2>
      <p className='text-lg text-[#6B7280] mb-6 font-poppins'>
        We bridge molecular innovation and real-world impact through:
      </p>
      <br />
      <br />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full'>
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className='bg-white rounded-lg border-2 border-[#E5E7EB] flex flex-col items-center shadow-none transition-all duration-300 mx-auto h-full min-h-[320px] p-0 hover:scale-105 hover:shadow-[0_8px_32px_0_rgba(20,100,185,0.25)]'
          >
            <img
              src={pillar.image}
              alt={`${pillar.title} Illustration`}
              className='w-full h-40 object-cover rounded-t-lg transition-transform duration-300'
            />
            <div className='p-6 flex flex-col items-center flex-1 w-full'>
              <h3 className='text-xl font-bold text-[#1464B9] mb-2 font-inter text-center'>
                {pillar.title}
              </h3>
              <p className='text-[#6B7280] text-base font-poppins text-center'>
                {pillar.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);