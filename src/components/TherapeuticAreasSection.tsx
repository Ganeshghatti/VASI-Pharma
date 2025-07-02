import React from 'react';

export const TherapeuticAreasSection: React.FC = () => {
  const therapeuticAreas = [
    {
      title: "Oncology – Triple Negative Breast & Prostate Cancer",
      description: "Pursuing next-generation therapies to tackle aggressive and treatment-resistant cancers through precision medicine and molecular targeting."
    },
    {
      title: "Neurodegeneration – Alzheimer's and Dementia",
      description: "Advancing novel diagnostics and disease-modifying treatments to slow progression and improve outcomes in aging-related cognitive disorders."
    },
    {
      title: "Autoimmune Diseases – Multiple Sclerosis & More",
      description: "Innovating immune-modulating therapies to restore balance and reduce disease burden in complex, chronic autoimmune conditions."
    },
    {
      title: "Rare Genetic Disorders – Innovative Solutions",
      description: "Leveraging cutting-edge genetic technologies to diagnose, understand, and treat rare conditions with high unmet medical need."
    }
  ];

  return (
    <section id="therapeutic-areas" className="min-h-screen py-24 bg-soft-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Top Title */}
          <div className="self-start">
            <h3 className="text-lg font-medium text-[#2563EB] mb-4 font-poppins tracking-wider uppercase">
              THERAPEUTIC AREAS
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[#2563EB] leading-tight font-inter">
              Transforming Lives Across Critical Health Areas
            </h2>
            <br /><br /> <p className="text-xl md:text-2xl lg:text-[18px] text-[#6B7280] max-w-2xl leading-relaxed font-poppins"> We are pioneering treatments for diseases with the<br /> greatest unmet needs, focusing on improving patient<br /> outcomes through innovative and targeted therapies. <br />By addressing some of the most complex and challenging health conditions, we aim to transform lives and deliver meaningful advances in care. </p>
          </div>
          {/* Right - Cards Grid */}
          <div className="grid grid-cols-1 gap-14 lg:gap-x-14 lg:gap-y-4 lg:grid-cols-2 lg:grid-rows-2 lg:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:grid-flow-col">
            {[0, 2, 1, 3].map((i) => (
              <div
                key={i}
                className="relative transition-shadow duration-300 p-5 sm:p-7 flex flex-col gap-4 justify-center h-full bg-white border-2 border-[#E5E7EB] w-[300px] max-w-2xl mx-auto overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(37,99,235,0.25)] cursor-pointer"
              >


                {/* Top-right blue border (top) */}
                <span className="pointer-events-none absolute top-0 right-0 w-1/2 h-1 bg-[#2563EB] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Top-right blue border (right, top half) */}
                <span className="pointer-events-none absolute top-0 right-0 w-1 h-1/2 bg-[#2563EB] rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Icon Accent */}
                <span className="mb-2 z-10">
                  {i === 0 && (
                    <img src="/images/Cancer.png" alt="Oncology Icon" className="w-10 h-10 object-contain" />
                  )}
                  {i === 1 && (
                    <img src="/images/Neurodegeneration.png" alt="Neurodegeneration Icon" className="w-10 h-10 object-contain" />
                  )}
                  {i === 2 && (
                    <img src="/images/Autoimmune.png" alt="Autoimmune Icon" className="w-10 h-10 object-contain" />
                  )}
                  {i === 3 && (
                    <img src="/images/Genetic.png" alt="Genetic Disorders Icon" className="w-10 h-10 object-contain" />
                  )}
                </span>
                <h3 className="text-lg font-semibold font-inter text-[#1464B9] z-10">
                  {therapeuticAreas[i].title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed font-poppins z-10">
                  {therapeuticAreas[i].description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};