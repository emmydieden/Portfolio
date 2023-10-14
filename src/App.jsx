import React from "react";
import "./App.css";

import { SecPresentation } from "./components";
import { SecTech } from "./components/sections2/SecPresentation"
import { SecFeaturedProjects } from "./components/sections/SecFeaturedProjects";
import { SecMywords } from "./components/sections/SecMywords";
import { SecSkills } from "./components/sections/SecSkills";
import { SecContact } from "./components/sections/SecContact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <div>
        <SecPresentation />
        <SecTech />
        <SecFeaturedProjects />
        <SecMywords />
        <SecSkills />
        <SecContact />
        <Footer />
      </div>
    </>
  );
}

export default App;
