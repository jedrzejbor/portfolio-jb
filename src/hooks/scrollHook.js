import {
  useState,
  useEffect
} from "react"

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState("home")

  useEffect(() => {
    const aboutSection = document.getElementById("about-section")
    const projectsSection = document.getElementById("projects-section")
    const contactSection = document.getElementById("contact-section")


    const scrollHandler = () => {
      if (aboutSection.offsetTop < window.pageYOffset) {
        setScrollPosition('about');
      } else if (projectsSection.offsetTop < window.pageYOffset) {
        setScrollPosition('projects');
      } else if (contactSection.offsetTop < window.pageYOffset) {
        setScrollPosition('about');
      } else {
        setScrollPosition('home');
      }
    };
    window.addEventListener("scroll", scrollHandler)

    return () => window.removeEventListener("scroll", scrollHandler)
  }, [])

  return scrollPosition
}