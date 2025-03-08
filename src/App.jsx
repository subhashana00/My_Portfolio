import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import './index.css';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Footer } from './components/sections/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Toaster Component for Notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#333', // Default background color
            color: '#fff', // Default text color
          },
          success: {
            style: {
              background: '#4CAF50', // Success toaster background color
              color: '#fff', // Success toaster text color
            },
          },
          error: {
            style: {
              background: '#FF5252', // Error toaster background color
              color: '#fff', // Error toaster text color
            },
          },
        }}
      />

      {/* Loading Screen */}
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      {/* Main Content */}
      <div
        className={`px-4 sm:px-[5vw] md:px-[7vw] lg:px-[0vw] transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } bg-black text-gray-100`}
      >
        {/* Navbar */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Mobile Menu */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Sections */}
        <Home />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;