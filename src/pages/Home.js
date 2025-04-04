import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import Portrait from '../assets/me.png';

const Home = () => {
    const fullText = "Hey, I'm Lee.";
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const nextChar = fullText[index];
            if (nextChar !== undefined) {
                setDisplayedText((prev) => prev + nextChar);
                index++;
            } else {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            <section className="hero">
                <div className="image-side">
                    <img src={Portrait} alt="lee saying hi" className="hero-image" />
                </div>
                <div className="hero-content">
                    <h1 className="typewriter-text">
                        {displayedText}
                        <span className={isTyping ? 'cursor active' : 'cursor'}>|</span>
                    </h1>
                    <h2>a humble human who designs.</h2>
                    <p>currently making imaginations become reality.</p>
                    <div className="cta-buttons">
                        <Link className="cta" to="/projects">See Work</Link>
                        <Link className="cta secondary" to="/contact">Get In Touch</Link>
                    </div>
                    <div className="scroll-cue">↓</div>
                </div>
            </section>

            <section className="about-preview">
                <h3>Nice to meet you!</h3>
                <p>Well, hello there :)</p>
                <p>
                    My name is Leanna, but you can call me Lee. I'm a CS student at the University of Rochester working towards a mixed career in user experience design and front-end development.
                </p>
                <p>
                    What started as obsessively sketching room layouts and fantasy game menus in the margins of my notebooks turned into a full-blown passion for design. Turns out, there’s a career where you *do* get to obsess over button spacing and make sure everything aligns perfectly — and I ran straight into it, armed with Figma files and way too many color palettes.
                </p>
                <p className="mantra">"Design is where code meets emotion."</p>
            </section>
        </div>
    );
};

export default Home;
