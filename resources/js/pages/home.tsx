import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import TextType from '@/components/React-Bits/TextType';
import MagicBento from '@/components/React-Bits/MagicBento';

export default function Welcome() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <>
            <Head title="Welcome" />

            <AppLayout>
                <nav className={`
          fixed w-full top-0 left-0 z-50 transition-all duration-300
          ${scrolled ? 'bg-black/30 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}
        `}>
                    <div className="max-w-6xl mx-auto flex items-center justify-between text-white px-6">
                        <div className="text-xl font-bold">ThuliumCorp</div>
                    </div>
                </nav>

                <div className="flex items-center justify-center min-h-screen text-center text-white">
                    <TextType
                        text={[
                            'ThuliumCorp',
                            'Crafting world-class software solutions.',
                            'Engineering the future, one line at a time.',
                            'We build. We scale. We deliver.',
                        ]}
                        typingSpeed={70}
                        pauseDuration={2000}
                        showCursor
                        cursorCharacter="|"
                    />
                </div>

                <MagicBento
                    textAutoHide={true}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    enableTilt={true}
                    enableMagnetism={true}
                    clickEffect={true}
                    spotlightRadius={300}
                    particleCount={12}
                    glowColor="132, 0, 255" 
                />
            </AppLayout>
        </>
    );
}
