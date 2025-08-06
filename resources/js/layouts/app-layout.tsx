// import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';
import Beams from "@/components/React-Bits/Beams"

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default ({ children, breadcrumbs, ...props }: AppLayoutProps) => (
        <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100vh',
                    zIndex: 0,
                }}
            >
                <Beams
                    beamWidth={3}
                    beamHeight={15}
                    beamNumber={30}
                    lightColor="#ffffff"
                    speed={2}
                    noiseIntensity={1.75}
                    scale={0.2}
                    rotation={0}
                />
            </div>

            {/* Konten ditampilkan di atas Beams */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                {children}
            </div>
        </div>
);
