import React, {useEffect} from "react";
import Projects from "../components/ProjectsPage/Projects";
import Hero from "../components/Hero";
import projectsBcg from "../images/projectsBcg.jpeg";

export default function ProjectsPage() {
  useEffect(() => {
  window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Hero img={projectsBcg} />
      <Projects />
    </>
  );
}
