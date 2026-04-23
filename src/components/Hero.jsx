import { useEffect, useState } from "react";
import { Code2, Leaf, Gamepad2, Palette } from "lucide-react";

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="parallax-section mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">
            <div className="parallax-layer parallax-reverse">
                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-300">
                    Futuristic Developer Portfolio
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                    Building intelligent systems and interactive digital experiences.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                    I create AI-powered tools, full-stack applications, game experiences,
                    and UI/UX concepts with a modern and engaging design approach.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        className="rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-6 py-3 font-medium text-slate-950 transition duration-300 hover:scale-[1.03]"
                    >
                        Explore Projects
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-medium text-white transition duration-300 hover:scale-[1.03] hover:bg-white/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div
                className="hero-previews parallax-wrapper relative min-h-[460px]"
                style={{
                    transform: `translate(${mousePosition.x * 0.35}px, ${mousePosition.y * 0.35}px)`,
                }}
            >
                {/* Glowing background circles */}
                <div className="hero-glow hero-glow-1 parallax-layer parallax-slow" />
                <div className="hero-glow hero-glow-2 parallax-layer parallax-medium" />
                <div className="hero-glow hero-glow-3 parallax-layer parallax-reverse" />

                {/* Floating tiny icons */}
                <div className="orbit-icon orbit-icon-1 parallax-layer parallax-slow">
                    <Leaf size={18} />
                </div>
                <div className="orbit-icon orbit-icon-2 parallax-layer parallax-medium">
                    <Gamepad2 size={18} />
                </div>
                <div className="orbit-icon orbit-icon-3 parallax-layer parallax-fast">
                    <Code2 size={18} />
                </div>
                <div className="orbit-icon orbit-icon-4 parallax-layer parallax-reverse">
                    <Palette size={18} />
                </div>

                <div className="floating-card floating-card-1 parallax-layer parallax-slow absolute left-0 top-10 w-[72%] rounded-3xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-2xl">
                    <div className="mb-3 text-xs uppercase tracking-[0.25em] text-emerald-200">
                        Plant Disease AI
                    </div>
                    <img
                        src="/projects/plant-disease-demo/images/plant_disease_logo.png"
                        alt="Plant Disease AI preview"
                        className="h-40 w-full rounded-2xl object-cover"
                    />
                </div>

                <div className="floating-card floating-card-2 parallax-layer parallax-fast absolute right-0 top-0 w-[55%] rounded-3xl border border-cyan-400/20 bg-white/10 p-5 backdrop-blur-2xl">
                    <div className="mb-3 text-xs uppercase tracking-[0.25em] text-cyan-200">
                        Gladiator Run Game
                    </div>
                    <img
                        src="/projects/plant-disease-demo/images/gladiator_run_logo.png"
                        alt="Mario Game preview"
                        className="h-36 w-full rounded-2xl object-cover"
                    />
                </div>

                <div className="floating-card floating-card-3 parallax-layer parallax-medium absolute bottom-4 left-10 w-[58%] rounded-3xl border border-violet-400/20 bg-white/10 p-5 backdrop-blur-2xl">
                    <div className="mb-3 text-xs uppercase tracking-[0.25em] text-violet-200">
                        UI / UX
                    </div>
                    <img
                        src="/project-images/uiux.png"
                        alt="UI/UX Portfolio Preview"
                        className="h-40 w-full rounded-2xl object-cover"
                    />
                </div>

                <div className="floating-card floating-card-4 parallax-layer parallax-reverse absolute bottom-16 right-6 w-[45%] rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-2xl">
                    <div className="mb-3 text-xs uppercase tracking-[0.25em] text-slate-200">
                        Full-Stack Vue
                    </div>
                    <img
                        src="/projects/plant-disease-demo/images/fullstack_logo.png"
                        alt="Full Stack Vue preview"
                        className="h-32 w-full rounded-2xl object-cover"
                    />
                </div>
            </div>
        </section>
    );
}