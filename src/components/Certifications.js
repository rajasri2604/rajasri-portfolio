import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = [
  {
    title: "AWS Academy Cloud Foundations",
    img: "/images/aws.jpg",
    
  },
  {
    title: "NPTEL Programming in Java",
    img: "/images/nptel.png",
    
  },
  {
    title: "IBM DigiLab Certifications",
    img: [
      "/images/ibm1.jpg",
      "/images/ibm2.jpg",
      "/images/ibm3.jpg",
      "/images/ibm4.jpg",
      "/images/ibm5.jpg"
    ],
    
    isCarousel: true,
  },
  {
    title: "MongoDB Certifications",
    img: [
      "/images/m1.jpeg",
      "/images/m2.jpeg",
      "/images/m3.jpeg",
      "/images/m4.jpeg",
      "/images/m5.jpeg",
      "/images/m6.jpeg",
      "/images/m7.jpeg",
      "/images/m8.jpeg",
      "/images/m9.jpeg",
      "/images/m10.jpeg",
      "/images/m11.jpeg"
    ],
    
    isCarousel: true,
  },
  {
    title: "UDEMY",
     img: [
      "/images/u1.jpeg",
      "/images/u2.jpeg",
      "/images/u3.jpg",
      
    ],
     isCarousel: true,
    
  },
 
   {
    title: "Interships",
     img: [
      "/images/o1.jpeg",
      "/images/h1.jpg",
      
      
    ],
     isCarousel: true,
  },
];

const Certifications = () => {
  const [modalImg, setModalImg] = useState(null);

  const sliderSettings = {
    
    infinite: true,
    speed: 500,
    arrows: true,
    
    slidesToScroll: 1,
  };

  return (
    <section id="certifications" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-primaryPurple mb-10">Certifications</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-white border-2 border-primaryPurple rounded-xl shadow-lg p-4 hover:bg-primaryPurple hover:text-white transition-all duration-300"
          >
            {cert.isCarousel ? (
              <Slider {...sliderSettings} className="mb-4">
                {cert.img.map((src, idx) => (
                  <div key={idx} onClick={() => setModalImg(src)} className="cursor-pointer">
                    <img
                      src={src}
                      alt={`${cert.title} ${idx + 1}`}
                      className="w-full h-40 object-contain rounded"
                    />
                  </div>
                ))}
              </Slider>
            ) : (
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-40 object-contain mb-4 rounded cursor-pointer"
                onClick={() => setModalImg(cert.img)}
              />
            )}

            <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
            <p className="text-sm">{cert.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* 🖼️ Modal for Image Preview */}
      <AnimatePresence>
        {modalImg && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalImg(null)}
          >
            <div className="relative max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setModalImg(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
              >
                <FaTimes />
              </button>
              <img
                src={modalImg}
                alt="Full View"
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
