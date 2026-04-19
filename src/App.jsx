import { useEffect } from "react";
import Home from "./pages/Home";

export default function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        `${window.scrollY}px`
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="site-parallax-bg" aria-hidden="true">
        <div className="site-parallax-orb site-parallax-orb-1"></div>
        <div className="site-parallax-orb site-parallax-orb-2"></div>
        <div className="site-parallax-orb site-parallax-orb-3"></div>
      </div>

      <Home />
    </>
  );
}