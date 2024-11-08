"use client";

import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { courseList, faqData } from './[courseId]/courseData';

const LearnFrenchContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);

  const openModal = () => {
    setIsLoading(true);
    setIsModalOpen(true);
    setTimeout(() => setIsLoading(false), 1500);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 500);
  };

  const handleLearnMore = (courseTitle) => {
    const courseId = courseTitle.toLowerCase().replace(/ /g, '-');
    router.push(`/french/learn/${courseId}`);
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]"> {/* Gradient background matching the French flag */}
      {/* Offers Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-[#0052A5] mb-2 flex items-center justify-center"> {/* Blue color */}
          <FaAngleDoubleRight className="mr-2" />
          OFFERS
        </h3>
        <p className="text-gray-600 mt-4">
          Discover our exclusive learning options to help you achieve fluency in French.
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#0052A5] transform hover:scale-105 transition-transform duration-300"> {/* Blue border */}
          <img
            className="w-full h-48 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fblonde-girl-painting.jpg?alt=media&token=d0799f0a-e9f6-4be9-a945-ea5ec6c4eb59"
            alt="1-on-1 lessons"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#0052A5]">1-on-1 Lessons</h3> {/* Blue text */}
            <p className="text-gray-600 mt-2">
              Learn French with personalized sessions from expert instructors.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#EF4135] transform hover:scale-105 transition-transform duration-300"> {/* Red border */}
          <img
            className="w-full h-48 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fanswering-lesson.jpg?alt=media&token=ddd87039-df14-4df0-a4b7-18281632b424"
            alt="Group Class"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#EF4135]">Group Class</h3> {/* Red text */}
            <p className="text-gray-600 mt-2">
              Join interactive group classes and practice French in a fun environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border-l-4 border-[#0052A5] transform hover:scale-105 transition-transform duration-300"> {/* Blue border */}
          <img
            className="w-full h-48 object-cover"
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flearn-french-language-online-education-concept%20(1).jpg?alt=media&token=54228a3f-8c6d-4b3e-a950-1f0dab6e60bd"
            alt="Practice for Free"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#0052A5]">Practice for Free</h3> {/* Blue text */}
            <p className="text-gray-600 mt-2">
              Access free resources and practice sessions to improve your French.
            </p>
          </div>
        </div>
      </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Left Image */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Flovely-happy-girl-posing-with-book.jpg?alt=media&token=07f1dbb8-8c10-46c8-83d8-d01f65c74884"
              alt="About Us"
              loading="lazy"
            />
          </div>

          {/* Right Content */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-[#0052A5] mb-2 flex items-center"> {/* French blue */}
              <FaAngleDoubleRight className="mr-2" />
              ABOUT US
            </h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Dedicated to the Best French Courses</h2>
            <p className="text-gray-600 mb-6">
              Experience high-quality French education with our tailored courses, designed to help you master the language effectively and engagingly. Our method adapts to your level and learning style.
            </p>
            <p className="text-gray-600 mb-6">
              From beginner to advanced levels, we offer a complete educational experience to help you reach your language goals and expand your opportunities in French-speaking environments.
            </p>
            <button
              onClick={openModal}
              className="bg-[#EF4135] text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors"
            >
              ➤ LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]"> {/* Gradient inspired by the French flag */}
  <div className="container mx-auto text-center mb-12">
    <h3 className="text-sm font-semibold text-[#0052A5] mb-2 flex items-center justify-center">
      <FaAngleDoubleRight className="ml-2" /> COURSES
    </h3>
    <h2 className="text-4xl font-bold text-gray-800 mb-4">Our French Courses</h2>
    <p className="text-gray-600 max-w-2xl mx-auto">
      Our team of experienced and certified instructors is committed to helping you achieve fluency and confidence in French.
    </p>
  </div>

  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {courseList.map((course, index) => (
      <div
        key={index}
        className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-start relative p-6 w-full transform transition-all duration-700 ease-out ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        style={{ transitionDelay: `${0.2 * index}s`, borderLeft: '4px solid #0052A5' }}
      >
        <div className="pb-12 w-full">
          <h3 className="text-xl font-semibold text-[#0052A5]">{course.title}</h3>
          <p className="text-gray-600 mt-2">{course.description}</p>
        </div>
        <div className="w-full flex justify-start">
          <button
            onClick={() => handleLearnMore(course.title)}
            className="bg-[#EF4135] text-white px-6 py-2 rounded-full inline-block text-center absolute -translate-y-1/2 z-10 transition-transform duration-300 hover:bg-[#D04B2C]"
          >
            ➤ LEARN MORE
          </button>
        </div>
        <img
          className="w-full h-48 object-cover transition-opacity duration-700 ease-out"
          src={course.image}
          alt={course.title}
          loading="lazy"
        />
      </div>
    ))}
  </div>
</section>


      {isModalOpen && (
        <div
          className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-all duration-300 ease-in-out ${isClosing ? 'fadeOut' : 'fadeIn'}`}
        >
          <div
            className={`bg-gradient-to-r from-white via-gray-50 to-white rounded-lg shadow-2xl p-8 max-w-md w-full relative transition-all duration-500 transform ${isClosing ? 'scaleDown' : 'scaleUp'}`}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-red-700"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-2xl" />
            </button>

            {isLoading ? (
              <div className="text-center">
                <div className="animate-spin text-5xl text-[#EF4135] mb-4">⏳</div>
                <p className="text-gray-700">Loading course details...</p>
              </div>
            ) : (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Our Course Details</h2>
                <p className="text-gray-600 mb-6">
                  We offer a variety of courses designed to help you achieve fluency in French. Our offerings include 1-on-1 lessons, group classes, and practice sessions tailored to your needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're a beginner or looking to refine your skills, our expert teachers are here to guide you.
                </p>
                <button
                  onClick={closeModal}
                  className="bg-[#EF4135] text-white py-2 px-4 rounded hover:bg-red-700 transition-transform duration-300 mt-6 transform hover:scale-105 shadow-md"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]">
        <div className="container mx-auto lg:flex lg:justify-between lg:items-center lg:space-x-8">
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-md object-cover w-full h-[400px]"
              src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fcharming-student-posing-classroom.jpg?alt=media&token=4eb59012-234c-4530-898a-2d894bcf8fd9"
              alt="Why Inlingo French Courses"
              loading="lazy"
            />
          </div>

          <div className="lg:w-1/2 bg-[#EF4135] text-white p-8 rounded-lg shadow-lg mt-8 lg:mt-0 border-l-8 border-[#0052A5]">
            <h3 className="text-sm font-semibold mb-2">➤ WHY US</h3>
            <h2 className="text-4xl font-bold mb-4">Why Choose Inlingo French Courses?</h2>
            <p className="mb-6">
              Discover the excellence of our French courses, designed to provide you with a tailored learning experience. Our methodology adapts to your individual level and learning preferences.
            </p>
            <p>
              From beginners to advanced learners, we offer a comprehensive educational approach to help you achieve your language goals and flourish in French-speaking environments.
            </p>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2c-2.761 0-5 2.239-5 5v5h-1c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2h-1v-5c0-2.761-2.239-5-5-5zm3 5v5h-6v-5c0-1.654 1.346-3 3-3s3 1.346 3 3zm-5 9h4v2h-4v-2z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Experienced Instructors</h3>
              <p className="text-gray-600 mt-2">
                Our certified and native-speaking teachers provide immersive and effective French lessons tailored to your needs.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 2h-16c-1.104 0-2 .896-2 2v7c0 1.104.896 2 2 2v9c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-9c1.104 0 2-.896 2-2v-7c0-1.104-.896-2-2-2zm-9 18h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm5-5h-14v-7h14v7z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Interactive Learning</h3>
              <p className="text-gray-600 mt-2">
                Engage with interactive materials for a dynamic and practical learning experience.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.29 5.57l1.14-2.28a1.999 1.999 0 0 0-1.79-2.86h-15.5a1.998 1.998 0 0 0-1.79 2.86l1.14 2.28h-2.65v2h.992l2.73 10.26c.369 1.383 1.606 2.38 3.084 2.44h8.26c1.478-.06 2.715-1.057 3.084-2.44l2.73-10.26h.992v-2h-2.65zm-15.61-1.57h14.64l-.68 1.37h-13.28l-.68-1.37zm11.94 12.88h-8.26l-1.61-6.07h11.48l-1.61 6.07z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Personalized Learning</h3>
              <p className="text-gray-600 mt-2">
                Tailored courses that match the specific progress and needs of each student.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex border-l-4 border-[#EF4135]">
            <div className="flex-shrink-0 mr-4">
              <svg className="w-12 h-12 text-[#EF4135]" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20 4h-4v-1.5c0-1.379-1.121-2.5-2.5-2.5h-3c-1.379 0-2.5 1.121-2.5 2.5v1.5h-4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-9 0v-1.5c0-.275.225-.5.5-.5h3c.275 0 .5.225.5.5v1.5h-4z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Accredited Certifications</h3>
              <p className="text-gray-600 mt-2">
                Earn globally recognized certificates to advance your career opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-left flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-[#EF4135] mb-2 flex items-center">
              <FaAngleDoubleRight className="mr-2" /> TESTIMONIALS
            </h3>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Hear What Our Students Say
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
              Discover the impact of our courses through our students’ experiences. See how they achieved fluency and confidence in French with our help.
            </p>
            <a
              href="#"
              className="bg-[#EF4135] text-white px-4 py-2 rounded-full hover:bg-[#D04B2C] transition duration-300 ease-in-out mb-6"
              style={{ width: "300px", textAlign: "center" }}
            >
              ➤ VIEW ALL TESTIMONIALS
            </a>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fsmiley-little-boy-isolated-pink_23-2148984798.avif?alt=media&token=18f7385f-1572-4806-b2de-052acb9b06f5"
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
            <div className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md">
              <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-[#1f1f1f]"></div>
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
                  <div className="text-[#EF4135] mb-2 text-3xl">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Best French Courses Ever!
                  </h3>
                  <p className="text-gray-400 mt-2">
                    These courses have greatly improved my French skills. The instructors are top-notch, and the classes are interactive and engaging.
                  </p>
                  <p className="mt-4 font-semibold">Jean Dupont</p>
                  <p className="text-gray-500">Business French</p>
                </div>
              </div>
            </div>
            <div className="relative bg-[#1f1f1f] text-white p-6 rounded-lg shadow-md">
              <div className="absolute top-0 right-0 w-8 h-8 bg-white flex items-center justify-center">
                <div className="w-4 h-4 bg-[#1f1f1f]"></div>
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
                  <div className="text-[#EF4135] mb-2 text-3xl">
                    <span>★★★★★</span>
                  </div>
                  <h3 className="text-2xl font-semibold">
                    Wonderful Learning Experience!
                  </h3>
                  <p className="text-gray-400 mt-2">
                    I enjoyed every lesson. The practical exercises and friendly environment made learning French so much easier.
                  </p>
                  <p className="mt-4 font-semibold">Marie Claire</p>
                  <p className="text-gray-500">French for Kids</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-[#0052A5] via-white to-[#EF4135]"> {/* French-themed gradient background */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
        <div className="relative flex items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fchildren-learning-together-how-speak-therapy%20(1).jpg?alt=media&token=374a473a-456a-4af3-8b51-b38634a14699"
            alt="Happy Students"
            className="w-full h-full rounded-lg shadow-md object-cover"
            style={{ transform: "none", transition: "none" }}
            loading="lazy"
          />
          <div className="absolute bottom-0 right-0 flex space-x-1 space-y-1">
            <div className="w-4 h-4 bg-white"></div>
            <div className="w-4 h-4 bg-gray-300"></div>
          </div>
        </div>
        <div className="text-left flex flex-col justify-center">
          <h3 className="text-sm font-semibold text-[#EF4135] mb-2 flex items-center">
            <FaAngleDoubleRight className="ml-2" />
            FAQ
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <ul className="text-gray-800 space-y-4">
            {faqData.map((faq, index) => (
              <li key={index} className="border-b border-gray-300 py-4">
                <div
                  className="flex justify-between cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span
                    className={`text-xl transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-max-height duration-500 ease-in-out ${
                    openIndex === index ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                  </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </section>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes scaleUp {
          0% { transform: scale(0.7) rotate(-3deg); opacity: 0; }
          80% { transform: scale(1.05) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes scaleDown {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.7); opacity: 0; }
        }
      `}</style>
    </>
  );
};
export default LearnFrenchContent;