import React from 'react';

const slides = [
  { id: 1, text: "React Developer", color: "bg-purple-200" },
  { id: 2, text: "UI Designer", color: "bg-purple-300" },
  { id: 3, text: "Full Stack Learner", color: "bg-purple-400" }
];

const Slider = () => {
  return (
    <div className="overflow-x-auto flex snap-x snap-mandatory">
      {slides.map(slide => (
        <div key={slide.id} className={`min-w-full h-64 flex items-center justify-center text-3xl font-bold text-purple-800 snap-center ${slide.color}`}>
          {slide.text}
        </div>
      ))}
    </div>
  );
};

export default Slider;
