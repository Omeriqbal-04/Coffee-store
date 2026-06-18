
import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Your existing navbar import
import Hero from './components/Hero/hero.jsx';
import Drinks from './components/Drinks/drink.jsx'; // Changed 'drink.jsx' to 'Drinks.jsx'
import Crossant from './components/Crossant/crossant.jsx'; // New import for the Crossant component
import CrossantPage2 from './components/crossant-page2/crossant-page2.jsx'; // New import for the CrossantPage2 component
import AboutSection from './components/About/about.jsx'; // New import for the About section
import PartyBannerSection from './components/Party-Banner/partyBanner.jsx'; // New import for the Party Ba
import FooterSection from './components/Footer/footer.jsx';



function App() {
  return (
    <div className="app-layout">
      <Navbar />

      <main>
        <Hero /> {/* This renders the component on your screen */}
        <Drinks /> {/* This renders the component on your screen */}
        <Crossant /> {/* This renders the component on your screen */}
        <CrossantPage2 /> {/* This renders the component on your screen */}
        <AboutSection /> {/* This renders the component on your screen */}
        <PartyBannerSection /> {/* This renders the component on your screen */}
        <FooterSection />{/*This renders the components on your screen */}
      </main>

    </div>
  );
}

export default App;