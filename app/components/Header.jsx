'use client';
import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isScrollingDown, setIsScrollingDown] = useState(false);

    // Combined Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            setIsScrollingDown(currentPosition > scrollPosition);
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrollPosition]);

    return (
        <div className={`main-header `}>
            <div
                className={`scroll-header ${isScrollingDown ? 'hide-scroll-header' : 'show-scroll-header'}`}
                data-header="scroll"
                data-view="0"
            >
                <div className="logo-contact-container">
                    <div>
                        <Link href="https://www.linkedin.com/in/navedkabirkhan/" target='_blank'>
                            <div className="logo">
                                <h2>Naved Khan</h2>
                            </div>
                        </Link>
                    </div>

                    <div className="contact-link">
                        <div data-links="Contact">
                            <Link href="https://dribbble.com/naved_kabir_khan" target='_blank' >
                                Contact
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


            {/* Navigation Links */}
            <div className="nav-holder" data-header="noscroll" data-view="0">
                <ul className="navlinks">
                    <li><Link href="#">Work</Link></li>
                    <li><Link href="#">Services</Link></li>
                    <li><Link href="#">Blog</Link></li>
                    <li><Link href="#">About</Link></li>
                </ul>

            </div>

        </div >
    );
}

export default Header;