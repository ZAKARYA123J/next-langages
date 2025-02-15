"use client"
import React, { useState, useEffect } from "react";
import OffrsSection from "./LearnFrenchContent";
import LearnFrenchModel from "../LearnFrenchModel";
import Navbar from "../../header/navbar";
import Footer from "../../header/Footer";

const LearnFrench = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [years, setYears] = useState(0);
  const [recommendedPercentage, setRecommendedPercentage] = useState(0);
  const [students, setStudents] = useState(0);
  const [yearsText, setYearsText] = useState("");
  const [recommendedText, setRecommendedText] = useState("");
  const [studentsText, setStudentsText] = useState("");
  const [headlineText, setHeadlineText] = useState("");

  useEffect(() => {
    const incrementNumber = (start, end, setter, duration) => {
      let current = start;
      const stepTime = Math.abs(Math.floor(duration / (end - start)));
      const timer = setInterval(() => {
        current += 1;
        setter(current);
        if (current === end) {
          clearInterval(timer);
        }
      }, stepTime);
    };

    const animateText = (fullText, setter, delay) => {
      let currentText = "";
      let index = 0;
      const timer = setInterval(() => {
        currentText += fullText[index];
        setter(currentText);
        index += 1;
        if (index === fullText.length) {
          clearInterval(timer);
        }
      }, delay);
    };

    incrementNumber(0, 15, setYears, 2000);
    incrementNumber(0, 95, setRecommendedPercentage, 2000);
    incrementNumber(0, 200, setStudents, 2000);

    setTimeout(() => animateText("of excellence in French education", setYearsText, 50), 500);
    setTimeout(() => animateText("Recommended by our students", setRecommendedText, 50), 1000);
    setTimeout(() => animateText("Students from over 120 countries", setStudentsText, 50), 1500);

    animateText("Learn French Online with Certified Instructors", setHeadlineText, 50);
  }, []);

  const scrollToOurCourses = () => {
    const ourCoursesSection = document.getElementById("OurCourses");
    if (ourCoursesSection) {
      ourCoursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="learn-french-page" style={{ fontFamily: '"Public Sans", sans-serif' }}>
      <Navbar/>
      <style jsx>{`
        /* Media query for mobile devices */
        @media (max-width: 768px) {
          .hero h1 {
            font-size: 1.8rem !important;
          }
          .hero p {
            font-size: 0.9rem !important;
          }
          .hero button {
            font-size: 0.9rem !important;
          }
          .stats h3 {
            font-size: 28px !important;
          }
          .stats span {
            font-size: 18px !important;
          }
          /* Hide divider lines on mobile */
          .divider-line {
            display: none !important;
          }
        }
      `}</style>
      <section
        className="hero bg-cover bg-center h-screen text-white relative flex items-center pt-20"
        style={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhappy-teen-girl-hold-french-flag-school-copybook-studying-education-abroad-banner-school-girl-student-schoolgirl-pupil-portrait-with-copy-space_545934-40438.jpg?alt=media&token=cc0965b4-d9a1-4bce-b428-6fa88715c846")`,
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">
            {headlineText}
          </h1>

          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Your French progress is our priority. If you're not satisfied after 12 weeks, we offer a full refund.
          </p>

          <button
            onClick={scrollToOurCourses}
            className="hover:bg-blue-800 text-white py-3 px-8 rounded-full text-lg"
            style={{ backgroundColor: "#0052A5" }}
          >
            Start Now
          </button>

          {/* Stats Section */}
          <div className="mt-10 flex flex-col md:flex-row justify-between w-full max-w-4xl text-left text-white items-start stats">
            {/* Years of Experience */}
            <div className="flex flex-col items-start mb-6 md:mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#0052A5",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {years}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "26px",
                      marginLeft: "8px",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Years
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {yearsText}
                </p>
              </div>
            </div>
            <div className="divider-line h-12 border-l-2 border-white mx-8 md:block"></div>
            <div className="flex flex-col items-start mb-6 md:mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#0052A5",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {recommendedPercentage}%
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "26px",
                      marginLeft: "8px",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Recommended
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {recommendedText}
                </p>
              </div>
            </div>
            <div className="divider-line h-12 border-l-2 border-white mx-8 md:block"></div>

            <div className="flex flex-col items-start mb-6">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#0052A5",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    {students.toLocaleString()}
                  </h3>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontSize: "26px",
                      marginLeft: "8px",
                      fontFamily: '"Public Sans", sans-serif',
                    }}
                  >
                    Students
                  </span>
                </div>
                <p className="text-sm mt-0" style={{ textAlign: "left" }}>
                  {studentsText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OffrsSection />
      <LearnFrenchModel />
      {isModalOpen && <Modal closeModal={closeModal} />}
      <Footer/>
    </div>
  );
};

export default LearnFrench;
