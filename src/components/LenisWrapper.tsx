"use client";

import { LenisRef, ReactLenis, useLenis } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

import "lenis/dist/lenis.css";

export default function LenisWrapper({ children }: { children: ReactNode }) {
    const lenisRef = useRef<LenisRef>(null);

    return (
        <ReactLenis root ref={lenisRef} options={{ autoRaf: true }}>
            {children}
            <AutoScroll />
        </ReactLenis>
    );
}

function AutoScroll() {
    const lenis = useLenis();

    useEffect(() => {
        if (!lenis || window.location.pathname !== "/" || !window.location.hash)
            return;
        lenis.scrollTo(window.location.hash, { offset: -100 });
    }, [lenis]);

    return null;
}
