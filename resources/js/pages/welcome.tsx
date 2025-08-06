import { Head } from '@inertiajs/react';
import React from 'react';
import AppLayout from '@/layouts/app-layout'; // pastikan path-nya sesuai struktur project kamu
import TextType from '@/components/React-Bits/TextType';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />

            <AppLayout>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '100vh',
                        textAlign: 'center',
                        fontFamily: 'Inter, sans-serif',
                        color: '#fff',
                    }}
                >
                    <TextType
                        text={[
                            'ThuliumCorp',
                            'Crafting world-class software solutions.',
                            'Engineering the future, one line at a time.',
                            'We build. We scale. We deliver.',
                        ]}
                        typingSpeed={70}
                        pauseDuration={2000}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>
            </AppLayout>
        </>
    );
}
