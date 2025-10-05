import React, { useEffect, useRef, useState } from "react";

function Experience() {
  const circleRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const lineRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('data-section'));
          }
        });
      },
      { threshold: 0.4 }
    );

    const sections = [
      section1Ref.current,
      section2Ref.current,
      section3Ref.current,
      section4Ref.current,
      section5Ref.current,
    ].filter(Boolean);

    sections.forEach(section => observer.observe(section));

    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  useEffect(() => {
    const circle = circleRef.current;
    const experienceSection = experienceSectionRef.current;
    const line = lineRef.current;
    let isDragging = false;
    let startY, scrollStart;

    const updateCirclePosition = () => {
      if (!circle || !experienceSection || !line) return;

      const sectionRect = experienceSection.getBoundingClientRect();
      const lineRect = line.getBoundingClientRect();
      const scrollY = window.scrollY;
      const sectionTop = sectionRect.top + scrollY;
      const sectionHeight = sectionRect.height;

      const progress = Math.min(1, Math.max(0, (scrollY - sectionTop + window.innerHeight / 2) / sectionHeight));
      const lineHeight = lineRect.height;
      const circleTop = Math.min(progress * lineHeight, lineHeight - 12);
      circle.style.top = `${circleTop}px`;
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      startY = e.clientY ?? e.touches[0].clientY;
      scrollStart = window.scrollY;
      document.body.style.cursor = 'ns-resize';
    };

    const handlePointerMove = (e) => {
      if (!isDragging) return;
      const currentY = e.clientY ?? e.touches[0].clientY;
      const deltaY = currentY - startY;
      const newScroll = Math.min(
        scrollStart + deltaY * 2,
        experienceSection.offsetTop + experienceSection.offsetHeight - window.innerHeight
      );
      window.scrollTo({ top: newScroll, behavior: 'auto' });
    };

    const handlePointerUp = () => {
      isDragging = false;
      document.body.style.cursor = '';
    };

    if (circle) {
      circle.addEventListener('mousedown', handlePointerDown);
      circle.addEventListener('touchstart', handlePointerDown);
      document.addEventListener('mousemove', handlePointerMove);
      document.addEventListener('touchmove', handlePointerMove);
      document.addEventListener('mouseup', handlePointerUp);
      document.addEventListener('touchend', handlePointerUp);
      window.addEventListener('scroll', updateCirclePosition);
      updateCirclePosition();
    }

    return () => {
      if (circle) {
        circle.removeEventListener('mousedown', handlePointerDown);
        circle.removeEventListener('touchstart', handlePointerDown);
        document.removeEventListener('mousemove', handlePointerMove);
        document.removeEventListener('touchmove', handlePointerMove);
        document.removeEventListener('mouseup', handlePointerUp);
        document.removeEventListener('touchend', handlePointerUp);
        window.removeEventListener('scroll', updateCirclePosition);
      }
    };
  }, []);

  const getSectionClasses = (sectionName) => {
    const baseClasses =
      "w-full md:w-5/12 mb-16 p-6 border border-white rounded-lg bg-slate-900 shadow-md transition-all duration-500 ease-out";
    const focusedClasses = "opacity-100 translate-y-0 scale-100 bg-slate-900";
    const unfocusedClasses = "md:opacity-20 md:scale-90 bg-gray-900";

    return `${baseClasses} ${
      activeSection === sectionName ? focusedClasses : unfocusedClasses
    }`;
  };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 bg-black text-white"
      ref={experienceSectionRef}
    >
      <h1 className="text-3xl font-bold mb-5 text-center">PROJECTS</h1>
      <p className="text-center mb-10">
        Projects that I have made and worked on
      </p>
      <div className="relative">
        <div className="relative py-20">
          <div
            ref={lineRef}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white transform -translate-x-1/2 z-10"
          ></div>

          <div
            ref={circleRef}
            className="hidden md:block absolute left-1/2 w-6 h-6 rounded-full border-2 border-white bg-black transform -translate-x-1/2 z-20 cursor-ns-resize shadow-sm"
            style={{ touchAction: "none" }}
          ></div>

          <div className="container mx-auto px-4 relative">
            {/* Section 1 */}
            <div
              ref={section1Ref}
              data-section="section1"
              className={`${getSectionClasses("section1")} ${
                activeSection === "section1" ? "md:ml-0" : ""
              }`}
            >
              <h1 className="text-white font-semibold text-xl mb-4">
                Elite Designs & Arcvibe
              </h1>
              <p className="text-gray-300 mb-3">
                Elite Designs & Arcvibe is a premier 2D Planning, 3D Planning &
                Designing, Interior Designing, Costing & Estimation, Structural
                Engineering & Construction firm based in Moradabad,
                specializing in elegant and functional spaces for Residential
                and Commercial both.
              </p>
              <a
                href="https://www.elitedesignsarcvibe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Visit website
              </a>
            </div>

            {/* Section 2 - Empty */}
            <div
              ref={section2Ref}
              data-section="section2"
              className={`${getSectionClasses("section2")} ml-auto`}
            >
              <h1 className="text-white font-semibold text-xl mb-4">
              Ruhi Interiors
              </h1>
              <p className="text-gray-300 mb-3">
              Ruhi Interiors W.L.L. is well established fit-out Design and Build Company in Bahrain with wings spread over surrounding GCC countries and has a reputation of high quality, integrity and commitment to provide customer satisfaction.
              
              </p>
              <a
                href="https://ruhiinteriors.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Visit website
              </a>
            </div>

            {/* Section 3 - BuyEco */}
            <div
              ref={section3Ref}
              data-section="section3"
              className={`${getSectionClasses("section3")} ${
                activeSection === "section3" ? "md:ml-0" : ""
              }`}
            >
              <h1 className="text-white font-semibold text-xl mb-4">
                BuyEco – Your Destination for Eco-Friendly Online Shopping
              </h1>
              <p className="text-gray-300 mb-3">
                As part of my project, I designed and developed a comprehensive
                information page for BuyEco, an e-commerce platform specializing
                in eco-friendly products. This page serves as a detailed footer
                section, providing users with essential navigation links,
                company details, and product categories to enhance their
                shopping experience.
              </p>
              <a
                href="https://buyeco.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Visit website
              </a>
            </div>

            {/* Section 4 - Division Exports */}
            <div
              ref={section4Ref}
              data-section="section4"
              className={`${getSectionClasses("section4")} ml-auto`}
            >
              <h1 className="text-white font-semibold text-xl mb-4">
                Division Exports - Premier Handicraft Manufacturer & Global
                Exporter
              </h1>
              <p className="text-gray-300 mb-3">
                I designed and developed the official website for Division
                Exports, a premium handicraft manufacturer and global exporter.
                The website highlights their legacy since 2023, commitment to
                craftsmanship, and modern production capabilities.
              </p>
              <a
                href="http://divisionexport.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Visit website
              </a>
            </div>

            {/* Section 5 - DocuSwift */}
            <div
              ref={section5Ref}
              data-section="section5"
              className={`${getSectionClasses("section5")} ${
                activeSection === "section5" ? "md:ml-0" : ""
              }`}
            >
              <h1 className="text-white font-semibold text-xl mb-4">
                DocuSwift – Effortless Word to PDF Conversion
              </h1>
              <p className="text-gray-300 mb-3">
                DocuSwift is a fast, secure, and user-friendly online tool that
                lets you convert Word documents (.doc & .docx) to high-quality
                PDFs in seconds. No sign-up required, no watermarks—just simple
                drag-and-drop functionality with instant results. Perfect for
                students, professionals, and anyone needing a reliable document
                converter on the go.
              </p>
              <a
                href="https://wordtwopdf.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                Visit website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
