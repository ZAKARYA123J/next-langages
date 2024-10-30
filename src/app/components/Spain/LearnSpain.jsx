"use client"
import { useState, useEffect } from "react";
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import Modal from "../components/Modal";
import OffrsSection from "./OffrsSection";
import AboutSection from "./AboutSection";
import CoursesSection from "./CoursesSection";
import WhySection from "./WhySection";
import TestSection from "./TestSection";
import FaqSection from "./FaqSection";
import LearnSpainEx from "./LearnSpainModel";

const LearnSpain = () => {
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

    incrementNumber(0, 10, setYears, 2000);
    incrementNumber(0, 96, setRecommendedPercentage, 2000);
    incrementNumber(0, 150, setStudents, 2000);

    setTimeout(() => animateText("of excellence in education", setYearsText, 50), 500);
    setTimeout(() => animateText("Recommended by students", setRecommendedText, 50), 1000);
    setTimeout(() => animateText("Students from 100 countries", setStudentsText, 50), 1500);

    animateText("Learn Spain Online with Professional Instructors", setHeadlineText, 50);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="learn-spain-page" style={{ fontFamily: '"Public Sans", sans-serif' }}>
      {/* <Navbar /> */}

      <section
        className="hero bg-cover bg-center h-screen text-white relative flex items-center"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/against-backlit-sunset-spanish-flag-waves-prominently-cityscape-creating-symbol-national-pride_95891-71775.jpg?w=1060")`,
        }}
      >
        <div className="overlay absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="container mx-auto relative z-10 flex flex-col items-start text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{headlineText}</h1>

          <p className="text-lg md:text-2xl mb-8 max-w-2xl">
            Your Spain progress is what matters the most to us. If you're not satisfied after 12 weeks of learning, you get your money back.
          </p>

          <button
            onClick={openModal}
            className="hover:bg-orange-700 text-white py-3 px-8 rounded-full text-lg"
            style={{ backgroundColor: "#FF5733" }}
          >
            Start Now
          </button>

          {/* Stats Section */}
          <div className="mt-10 flex justify-between w-full max-w-4xl text-left text-white items-start">
            {/* Years of Experience */}
            <div className="flex flex-col items-start mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#FF5733",
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
            <div className="h-12 border-l-2 border-white mx-8"></div>
            <div className="flex flex-col items-start mr-8">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#FF5733",
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
            <div className="h-12 border-l-2 border-white mx-8"></div>

            <div className="flex flex-col items-start">
              <div className="flex flex-col items-start">
                <div className="flex items-baseline">
                  <h3
                    className="font-bold"
                    style={{
                      fontSize: "42px",
                      color: "#FF5733",
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
      <AboutSection />
      <CoursesSection />
      <WhySection />
      <TestSection />
      <FaqSection />
      <LearnSpainEx />

      {/* <Footer /> */}

      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

export default LearnSpain;
