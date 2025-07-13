import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => (
  <section id="education" className="py-20 bg-lightPurple text-center">
    <h2 className="text-4xl font-extrabold text-primaryPurple mb-10">
      Education
    </h2>

    <div className="max-w-3xl mx-auto space-y-6 text-left px-4">
      {/* B.E. */}
      <div className="bg-lightPurple p-6 rounded-xl shadow-lg border-2 border-primaryPurple">
        <div className="flex items-center gap-4 mb-2">
          <FaGraduationCap className="text-2xl text-primaryPurple" />
          <div>
            <h3 className="text-xl font-bold">B.E. Computer Science & Engineering</h3>
            <p className="text-sm text-gray-700">2022 – 2026</p>
          </div>
        </div>
        <p className="font-medium text-primaryPurple">
          PSNA College of Engineering and Technology
        </p>
        <p className="text-sm text-gray-700">Dindigul, Tamil Nadu</p>
        <p className="mt-1 text-sm font-semibold">
          CGPA: <span className="text-green-600">9.51</span> (Till 5th Semester)
        </p>
      </div>

      {/* 12th */}
      <div className="bg-lightPurple p-6 rounded-xl shadow-lg border-2 border-primaryPurple">
        <div className="flex items-center gap-4 mb-2">
          <FaGraduationCap className="text-2xl text-primaryPurple" />
          <div>
            <h3 className="text-xl font-bold">HSC</h3>
            <p className="text-sm text-gray-700">2021 – 2022</p>
          </div>
        </div>
        <p className="font-medium text-primaryPurple">
          St. Joseph's Girls Higher Secondary School
        </p>
        <p className="text-sm text-gray-700">Dindigul, Tamil Nadu</p>
        <p className="mt-1 text-sm font-semibold">
          Percentage: <span className="text-green-600">88.66%</span>
        </p>
      </div>

      {/* 10th */}
      <div className="bg-lightPurple p-6 rounded-xl shadow-lg border-2 border-primaryPurple">
        <div className="flex items-center gap-4 mb-2">
          <FaGraduationCap className="text-2xl text-primaryPurple" />
          <div>
            <h3 className="text-xl font-bold">SSLC</h3>
            <p className="text-sm text-gray-700">2019 – 2020</p>
          </div>
        </div>
        <p className="font-medium text-primaryPurple">
          St. Joseph's Girls Higher Secondary School
        </p>
        <p className="text-sm text-gray-700">Dindigul, Tamil Nadu</p>
        <p className="mt-1 text-sm font-semibold">
          Percentage: <span className="text-green-600">92%</span>
        </p>
      </div>
    </div>
  </section>
);

export default Education;
