"use client";

import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { courseList } from "./[courseId]/courseData";

const LearnEnglishContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 1500);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 500);
  };

  const handleLearnMore = (courseTitle) => {
    const courseId = courseTitle.toLowerCase().replace(/ /g, "-");
    router.push(`/Spain/learn/${courseId}`);
  };

  return (
    <>
      {/* Offers Section */}
      <section className="py-16 bg-[#FFF0E5]">
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-[#FF5733] mb-2 flex items-center justify-center">
          <FaAngleDoubleRight className="mr-2" />
          OFFERS
        </h3>
        <p className="text-gray-600 mt-4">
          Discover our exclusive learning options to help you achieve fluency in Spanish.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#FF5733] transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot-man-correcting-grammar-mistakes.jpg?alt=media&token=9f670054-b9ba-450e-a4f0-965215473dae"
            alt="1-on-1 lessons"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#FF5733]">1-on-1 Lessons</h3>
            <p className="text-gray-600 mt-2">
              Learn Spanish with personalized sessions from expert instructors.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#FF5733] transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot-colleagues-high-five.jpg?alt=media&token=0beb345f-5744-4545-b930-2120f67597bc"
            alt="Group Class"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#FF5733]">Group Class</h3>
            <p className="text-gray-600 mt-2">
              Join interactive group classes and practice Spanish in a fun environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#FF5733] transform hover:scale-105 transition-transform duration-300">
          <img
            className="w-full h-48 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flearn-spanish-language-online-education-concept%20(1)%20(1).jpg?alt=media&token=cb324783-4aed-4716-991f-0fb5b6208d57"
            alt="Practice for Free"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#FF5733]">Practice for Free</h3>
            <p className="text-gray-600 mt-2">
              Access free resources and practice sessions to improve your Spanish.
            </p>
          </div>
        </div>
      </div>
      </section>

      <section className="py-16 bg-[#FFF0E5]"> {/* Background color for the Spanish theme */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fmedium-shot.jpg?alt=media&token=fdb3d1fe-f6a1-4dd0-98f9-785ae5ad1bf5"
              alt="About Us"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-sm font-semibold text-[#FF5733] mb-2 flex items-center">
              <FaAngleDoubleRight className="mr-2" />
              ABOUT US
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dedicated to the Best Spanish Courses</h2>
            <p className="text-gray-600 mb-6">
              Experience high-quality Spanish education with our tailored courses, designed to help you master the language effectively and engagingly. Our method adapts to your level and learning style.
            </p>
            <p className="text-gray-600 mb-6">
              From beginner to advanced levels, we offer a complete educational experience to help you reach your language goals and expand your opportunities in Spanish-speaking environments.
            </p>
            <button
              onClick={openModal}
              className="bg-[#FF5733] text-white px-6 py-3 rounded-full hover:bg-[#D04B2C] transition-colors"
            >
              ➤ LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${
            isClosing ? 'fadeOut' : 'fadeIn'
          }`}
        >
          <div
            className={`bg-gradient-to-r from-white via-gray-50 to-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transition-all duration-500 transform ${
              isClosing ? 'scaleDown' : 'scaleUp'
            }`}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-[#D04B2C]"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin text-5xl text-[#FF5733] mb-4">⏳</div>
                <p className="text-gray-700">Loading course details...</p>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Our Course Details</h2>
                <p className="text-gray-600 mb-6">
                  We offer a variety of courses designed to help you achieve fluency in Spanish. Our offerings include 1-on-1 lessons, group classes, and practice sessions tailored to your needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a beginner or looking to refine your skills, our expert teachers are here to guide you through an interactive and engaging learning experience in Spanish.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#FF5733] text-white py-2 px-4 rounded hover:bg-[#D04B2C] transition-transform duration-300 mt-6"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Courses Section */}
      <section className="py-16 bg-[#FFF0E5]">
      <div className="container mx-auto text-center mb-12">
      <h3 className="text-sm font-semibold text-[#FF5733] mb-2 flex items-center justify-center">
            {" "}
            {/* Red accent for "COURSES" */}
            <FaAngleDoubleRight className="ml-2 text-yellow-600" />{" "}
            {/* Yellow icon */}
            COURSES
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team of experienced and certified instructors is committed to
            helping you achieve fluency and confidence in Spain.
          </p>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div
              key={index}
              className={`bg-white shadow-md rounded-[1.5rem] overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
                loaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
              style={{ transitionDelay: `${0.2 * index}s` }}
            >
              <div className="pb-12 w-full">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mt-2">{course.description}</p>
              </div>
              <div className="w-full flex justify-start">
                <button
                  onClick={() => handleLearnMore(course.title)}
                  className="bg-[#FF5733] text-white px-6 py-2 rounded-full inline-block text-center absolute -translate-y-1/2 z-10 transition-transform duration-300 hover:bg-[#D04B2C]"
                >
                  ➤ LEARN MORE
                </button>
              </div>
              <img
                className={`w-full h-48 object-cover transition-opacity duration-700 ease-out`}
                src={course.image}
                alt={course.title}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-[#FFF0E5]">
        <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
          {/* Image on the left with NO hover effect */}
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-md object-cover w-full h-[400px]"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhappy-girl-gesturing-class%20(1).jpg?alt=media&token=91b705d1-2a46-456b-82d6-27769d74db02"
              alt="Why Inlingo German Courses"
              loading="lazy"
            />
          </div>

          {/* Text on the right */}
          <div className="lg:w-1/2 bg-gradient-to-r from-yellow-500 to-red-600 text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0">
            <h3 className="text-sm font-semibold mb-2">➤ WHY US</h3>
            <h2 className="text-4xl font-bold mb-4">
              Why Inlingo German Courses?
            </h2>
            <p className="mb-6">
              Lorem ipsum dolor sit amet consectetur. Montes quisque urna
              molestie tincidunt aliquet quam. Imperdiet at pellentesque vitae
              aliquet tempor eget rutrum tellus. Leo a luctus vitae urna nibh
              faucibus.
            </p>
            <p>
              A sagittis quisque ligula vitae dignissim vel nunc urna urna.
              Morbi luctus purus vitae neque vitae pellentesque ultrices.
            </p>
          </div>
        </div>

        {/* Benefits Grid - 2x2 layout */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Benefit 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
            <div className="flex-shrink-0 mr-4">
              <svg
                className="w-12 h-12 text-red-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c-2.761 0-5 2.239-5 5v5h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-5c0-2.761-2.239-5-5-5zm3 5v5h-6v-5c0-1.654 1.346-3 3-3s3 1.346 3 3zm-5 9h4v2h-4v-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Experienced Instructors
              </h3>
              <p className="text-gray-600 mt-2">
                Our team of certified and native-speaking teachers ensures an
                immersive learning experience.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
            <div className="flex-shrink-0 mr-4">
              <svg
                className="w-12 h-12 text-red-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 2h-16c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2v9c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-9c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-9 18h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-5h-14v-7h14v7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Interactive Learning
              </h3>
              <p className="text-gray-600 mt-2">
                Engage with interactive and hands-on materials for a more
                practical learning experience.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
            <div className="flex-shrink-0 mr-4">
              <svg
                className="w-12 h-12 text-red-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20.29 5.57l1.14-2.28a1.999 1.999 0 0 0-1.79-2.86h-15.5a1.998 1.998 0 0 0-1.79 2.86l1.14 2.28h-2.65v2h.992l2.73 10.26c.369 1.383 1.606 2.38 3.084 2.44h8.26c1.478-.06 2.715-1.057 3.084-2.44l2.73-10.26h.992v-2h-2.65zm-15.61-1.57h14.64l-.68 1.37h-13.28l-.68-1.37zm11.94 12.88h-8.26l-1.61-6.07h11.48l-1.61 6.07z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Personalized Learning
              </h3>
              <p className="text-gray-600 mt-2">
                Courses tailored to meet the specific needs and progress of
                every student.
              </p>
            </div>
          </div>

          {/* Benefit 4 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md flex">
            <div className="flex-shrink-0 mr-4">
              <svg
                className="w-12 h-12 text-red-600"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M20 4h-4v-1.5c0-1.379-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.121-2.5 2.5v1.5h-4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 0v-1.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1.5h-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Accredited Certifications
              </h3>
              <p className="text-gray-600 mt-2">
                Receive globally recognized certificates to boost your career
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#FFF0E5]">
        {/* Heading Section */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left flex flex-col justify-center">
            {/* Heading with FaAngleDoubleRight icon */}
            <h3 className="text-sm font-semibold text-red-600 mb-2 flex items-center">
              {" "}
              {/* Red for "TESTIMONIALS" */}
              <FaAngleDoubleRight className="ml-2 text-yellow-500" />{" "}
              {/* Yellow icon for German accent */}
              TESTIMONIALS
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {" "}
              {/* Dark gray for the main heading */}
              Hear What Our Students Say
            </h2>
            <p className="text-gray-700 max-w-md mb-8">
              Montes quisque urna molestie tincidunt aliquet quam. Imperdiet at
              pellentesque vitae aliquet tempor eget rutrum tellus. Leo a luctus
              vitae urna sagittis quisque.
            </p>
            <a
            href="#"
            className="bg-[#FF5733] text-white px-4 py-2 rounded-full hover:bg-[#D04B2C] transition duration-300 ease-in-out mb-6"
            style={{ width: "300px", textAlign: "center" }}
          >
              ➤ VIEW ALL TESTIMONIALS
            </a>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flittle-boy.jpg?alt=media&token=9843f96e-ce41-4439-98b8-621d22c97730"
                alt="Student 1"
                className="rounded-lg object-cover w-full h-48"
                loading="lazy"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fpretty-clever-little-girl-child-with-blond-hairstyle-yellow-t-shirt-overalls-hold-something-palm-introduce-product-blank-white-copy-space-smiling-joyful-brag-what-she-got-b-day-present_176420-361.avif?alt=media&token=1ba15807-1cf8-4389-9596-e70e9cad4a39"
                alt="Student 2"
                className="rounded-lg object-cover w-full h-48"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="relative bg-black text-white p-6 rounded-lg shadow-md">
              {" "}
              {/* Black background for testimonial card */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-black"></div>{" "}
                {/* Inner black square */}
              </div>
              <div className="flex items-start">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-man-with-glasses_1308-174409.avif?alt=media&token=4e4a4e04-8b3f-4929-b332-2ad830621692"
                  alt="Student"
                  className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                  style={{ marginBottom: "-16px" }}
                  loading="lazy"
                />
                <div>
                  <div className="text-yellow-500 mb-2 text-3xl">
                    {" "}
                    {/* Yellow stars for rating */}
                    <span>★★★★★</span>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Best German Courses Ever!
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Montes quisque urna molestie tincidunt aliquet quam.
                    Imperdiet at pellentesque vitae aliquet tempor eget rutrum
                    tellus.
                  </p>
                  <p className="mt-4 font-semibold">Samantha Williams</p>
                  <p className="text-gray-500">Business</p>
                </div>
              </div>
            </div>

            <div className="relative bg-black text-white p-6 rounded-lg shadow-md">
              {" "}
              {/* Black background for testimonial card */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-black"></div>{" "}
                {/* Inner black square */}
              </div>
              <div className="flex items-start">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiling-man-with-glasses_1308-174409.avif?alt=media&token=4e4a4e04-8b3f-4929-b332-2ad830621692"
                  alt="Student"
                  className="w-28 h-28 rounded-lg object-cover shadow-lg -mt-8 mr-6"
                  style={{ marginBottom: "-16px" }}
                  loading="lazy"
                />
                <div>
                  <div className="text-yellow-500 mb-2 text-3xl">
                    {" "}
                    {/* Yellow stars for rating */}
                    <span>★★★★★</span>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Best German Courses Ever!
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Montes quisque urna molestie tincidunt aliquet quam.
                    Imperdiet at pellentesque vitae aliquet tempor eget rutrum
                    tellus.
                  </p>
                  <p className="mt-4 font-semibold">Samantha Williams</p>
                  <p className="text-gray-500">Business</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LearnEnglishContent;