'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { WhatWeDoCard } from '@/components/home/WhatWeDoCard';

import LenisWrapper from "@/components/layout/LenisWrapper";

gsap.registerPlugin(ScrollTrigger);

export const WhatWeDo = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const leftContentRef = useRef<HTMLDivElement>(null);
    const rightContentRef = useRef<HTMLDivElement>(null);

    // Two-column layout with pinning effect
    useLayoutEffect(() => {
        const container = containerRef.current;
        const rightContent = rightContentRef.current;
        if (!container || !rightContent) return;

        let totalScroll = rightContent.scrollHeight - rightContent.clientHeight;

        const pinTrigger = ScrollTrigger.create({
            trigger: container,
            start: "top top",
            end: `+=${totalScroll}`,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            onUpdate: (self) => {
                const progress = self.progress;
                const scrollDistance = progress * totalScroll;
                rightContent.scrollTop = scrollDistance;
            },
            onRefresh: (self) => {
                totalScroll = rightContent.scrollHeight - rightContent.clientHeight;
                self.vars.end = `+=${totalScroll}`;
            }
        });

        const preventScroll = (e: WheelEvent) => {
            e.preventDefault();
        };
        rightContent.addEventListener('wheel', preventScroll, {passive: false});
        rightContent.addEventListener('touchmove', preventScroll as EventListener, { passive: false });

        ScrollTrigger.refresh();

        return () => {
            pinTrigger.kill();
            rightContent.removeEventListener('wheel', preventScroll);
            rightContent.removeEventListener('touchmove', preventScroll as EventListener);
        };
    }, []);

    const services = [
        {
            title: "Webinars",
            description: "Webinars and session series starting from CV writing, personal grooming, facing interview, industry niches and much more.",
            image: "/images/services/webinar.jpg"
        },
        {
            title: "Workshops",
            description: "Workshops on how to maintain your LinkedIn profile, writing emails, creating CVs and a whole lot more to ensure our candidates are well prepared for the industry.",
            image: "/images/services/workshop.jpg"
        },
        {
            title: "Ask Me Anything Series",
            description: "A series of sessions targeted to get answers for the burning questions of undergraduates and fresh graduates directly from industry professionals.",
            image: "/images/services/ask-me-anything.jpg"
        },
        {
            title: "Career Fair",
            description: "The flagship event of IEEE StudPro, making sure that the candidates who are groomed to a higher level are ready to take their next step with industry giants.",
            image: "/images/services/career-fair.jpg"
        },
    ];

    return (
        <div id="about" className="h-screen w-full" ref={containerRef}>
            <div className="w-full h-full">
                <div className="flex h-full justify-center">
                    {/* Left Side - What We Do Content */}
                    <div className="w-1/3 relative">
                        <div
                            ref={leftContentRef}
                            className="h-full overflow-hidden"
                            style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}
                        >
                            <div className="px-12 py-16 pt-32 space-y-16 h-full">
                                <div className="space-y-8 ">
                                    <h1 className="text-5xl font-bold text-gray-900 leading-tight drop-shadow-xl">
                                        What We Do
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed max-w-lg drop-shadow-xl">
                                        IEEE StudPro is an annual event hosted by the IEEE Young Professionals Sri Lanka
                                        that intends to expose the talents and skills of all fresh graduates and undergraduates
                                        in Sri Lanka to the corporate world immediately after graduation or during the last stages of
                                        their degree. It was first started back in 2017 and has continued its journey for 7 successful years.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Services List */}
                    <div className="w-1/3 bg-gradient-to-br">
                        <div
                            ref={rightContentRef}
                            className="h-full overflow-y-auto px-12 py-16"
                            style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}
                        >
                            <div className="space-y-6">
                                <LenisWrapper>
                                {services.map((service, index) => (
                                    <WhatWeDoCard key={index} title={service.title} image={service.image} description={service.description}/>
                                ))}
                                </LenisWrapper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};