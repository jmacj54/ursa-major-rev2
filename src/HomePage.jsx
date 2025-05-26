import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B1D36] text-white font-sans">
      <header className="flex justify-between items-center p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <img src="/ursa-logo-constellation.png" alt="Ursa Major Logo" className="h-10" />
          <div>
            <h1 className="text-xl font-bold font-serif">URSA MAJOR</h1>
            <p className="text-sm tracking-widest text-gray-400">PLANNING · PROJECT CONTROLS · DELAY ANALYSIS</p>
          </div>
        </div>
        <nav className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="ml-4 px-4 py-2 border border-gray-400 rounded hover:bg-white hover:text-black">Contact</a>
        </nav>
      </header>

      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4 font-serif">Planning, Project Controls, and Delay Analysis</h2>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          Expert consultancy in planning, project controls, and delay analysis to drive your projects to success.
        </p>
        <button className="border border-gray-300 hover:bg-white hover:text-black text-white py-2 px-6 rounded">
          Book a Consultation
        </button>
      </main>

      <section id="about" className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-4 font-serif">About Us</h3>
        <p className="text-gray-300 max-w-3xl mx-auto">
          With years of experience in providing consultancy services in project planning, project controls, and delay analysis, we are dedicated to delivering tailored solutions that help clients achieve their project objectives.
        </p>
      </section>

      <section id="services" className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-6 font-serif">Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#0F2941] p-6 rounded shadow border border-gray-600">
            <h4 className="text-xl font-semibold mb-2">Planning</h4>
            <p className="text-gray-300">Comprehensive project planning tailored to your objectives.</p>
          </div>
          <div className="bg-[#0F2941] p-6 rounded shadow border border-gray-600">
            <h4 className="text-xl font-semibold mb-2">Project Controls</h4>
            <p className="text-gray-300">Implementation of control systems to monitor cost, schedule, and performance.</p>
          </div>
          <div className="bg-[#0F2941] p-6 rounded shadow border border-gray-600">
            <h4 className="text-xl font-semibold mb-2">Delay Analysis</h4>
            <p className="text-gray-300">Support in analyzing project delays and determining causes and impacts.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="p-10 text-center">
        <h3 className="text-2xl font-bold mb-6 font-serif">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-[#0F2941] p-4 rounded shadow border border-gray-600">
            <img src="/project1.jpg" alt="Project 1" className="mb-2 rounded" />
            <p className="text-gray-300">Infrastructure Project</p>
          </div>
          <div className="bg-[#0F2941] p-4 rounded shadow border border-gray-600">
            <img src="/project2.jpg" alt="Project 2" className="mb-2 rounded" />
            <p className="text-gray-300">Commercial Development</p>
          </div>
          <div className="bg-[#0F2941] p-4 rounded shadow border border-gray-600">
            <img src="/project3.jpg" alt="Project 3" className="mb-2 rounded" />
            <p className="text-gray-300">Transportation Planning</p>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#0B1D36] text-white pt-6 border-t border-gray-700">
        <section id="clients" className="text-center mb-6">
          <h3 className="text-xl font-bold mb-4 font-serif">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-6 grayscale">
            <img src="/logos/gsk.png" alt="GSK" className="h-10" />
            <img src="/logos/pmgroup.png" alt="PM Group" className="h-10" />
            <img src="/logos/lendlease.png" alt="Lendlease" className="h-10" />
            <img src="/logos/chevron.png" alt="Chevron" className="h-10" />
            <img src="/logos/riotinto.png" alt="Rio Tinto" className="h-10" />
            <img src="/logos/mace.png" alt="Mace" className="h-10" />
          </div>
        </section>
        <div className="text-center p-6">
          <p>Contact us at: <a href="mailto:contact@ursamajor.com" className="underline">contact@ursamajor.com</a></p>
          <p className="text-sm mt-2 text-gray-400">&copy; {new Date().getFullYear()} Proplan Europe LTD T/A Ursa Major Consultancy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
