"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
const CourseSection = () => {
  const courses = [
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhome-bg-1-1.jpg?alt=media&token=f0e37178-3522-4f8e-ad8e-9e6c6b6e193c",
      title: "Learn English",
      description: "Learn essential English language skills for beginners.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
      link: "/english/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhome-bg-6.jpg?alt=media&token=b914aced-23f8-4ded-ab85-97f9b539b040",
      title: "Learn Spanish",
      description: "Improve your Spanish with interactive exercises.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg",
      link: "/spain/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhome-bg-4-1.jpg?alt=media&token=9f917b68-e190-4f9b-91dc-3776ab0bd7de",
      title: "Learn German",
      description: "Master German with our intensive language program.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      link: "/german/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhome-bg-1-1.jpg?alt=media&token=f0e37178-3522-4f8e-ad8e-9e6c6b6e193c",
      title: "Learn Italian",
      description: "Start speaking Italian from day one.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
      link: "/italie/learn",
    },
    {
      image: "https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/ocean_lagagues%2Fhome-bg-6.jpg?alt=media&token=b914aced-23f8-4ded-ab85-97f9b539b040",
      title: "Learn French",
      description: "Elevate your French language skills.",
      countryFlag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      link: "/french/learn",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 } // 10% de visibilité pour déclencher
    );

    const cards = sectionRef.current.querySelectorAll(".course-card");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section  className="py-16 bg-with" ref={sectionRef} id="CourseSection">
      <div className="container mx-auto px-4 lg:px-8 xl:px-16">
        <h2 className="text-4xl font-extrabold text-blue-900 mb-6 text-center">
          Language Courses
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-lg mx-auto">
          Explore our top language courses, designed to help you master new languages with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Link href={course.link} key={index} passHref>
              <div
                className={`course-card relative bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
                }`}
                data-index={index}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-gray-300 z-10 overflow-hidden">
                  <Image
                    src={course.countryFlag}
                    alt={`${course.title} Flag`}
                    fill
                    sizes="50px"
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                  />
                </div>
                <div className="relative">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={400}
                    height={200}
                    style={{ objectFit: 'cover' }}
                    className="object-cover w-full h-48 opacity-70"
                  />
                </div>
                <div className="p-6 pt-16">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 text-center">
                    {course.description}
                  </p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 mt-4 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-500">
                    Start Learning
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
