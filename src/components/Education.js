import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="py-20 bg-lightPurple text-center">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryPurple mb-10">
      Education
    </h2>

    <div className="max-w-4xl mx-auto space-y-8 text-left px-4 sm:px-6">
      {/* 🎓 Education Card Component */}
      {[
        {
          degree: 'B.E. Computer Science & Engineering',
          year: '2022 – 2026',
          institute: 'PSNA College of Engineering and Technology',
          location: 'Dindigul, Tamil Nadu',
          result: 'CGPA: 9.51 (Till 5th Semester)',
        },
        {
          degree: 'HSC',
          year: '2021 – 2022',
          institute: "St. Joseph's Girls Higher Secondary School",
          location: 'Dindigul, Tamil Nadu',
          result: 'Percentage: 88.66%',
        },
        {
          degree: 'SSLC',
          year: '2019 – 2020',
          institute: "St. Joseph's Girls Higher Secondary School",
          location: 'Dindigul, Tamil Nadu',
          result: 'Percentage: 92%',
        },
      ].map((edu, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-xl shadow-md border-l-4 border-primaryPurple"
        >
          <div className="flex items-start gap-4 mb-2">
            <FaGraduationCap className="text-2xl text-primaryPurple mt-1" />
            <div>
              <h3 className="text-xl font-bold text-primaryPurple">{edu.degree}</h3>
              <p className="text-sm text-gray-700">{edu.year}</p>
            </div>
          </div>
          <p className="font-medium text-primaryPurple">{edu.institute}</p>
          <p className="text-sm text-gray-600">{edu.location}</p>
          <p className="mt-1 text-sm font-semibold">
            {edu.result.includes('CGPA') ? (
              <>
                CGPA:{' '}
                <span className="text-green-600 font-semibold">
                  {edu.result.replace('CGPA: ', '')}
                </span>
              </>
            ) : (
              <>
                Percentage:{' '}
                <span className="text-green-600 font-semibold">
                  {edu.result.replace('Percentage: ', '')}
                </span>
              </>
            )}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
