import { Navbar } from "../components/navbar"
import { Landing } from "../components/landing"
import { About } from "../components/about"
import { Projects } from "../components/projects"
import { Experiences } from "../components/experiences"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <div id="about"><About/></div>
      <div id="projects"><Projects/></div>
      <div id="experiences"><Experiences/></div>
      <div id="contact"><Footer/></div>
    </div>
    
  );
}
