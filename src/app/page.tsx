import {Hero} from "@/components/layout/Hero";
import {Footer} from "@/components/layout/Footer";
import {Header} from "@/components/layout/Header";
import {WhatWeDo} from "@/components/layout/WhatWeDo";
import {Stats} from "@/components/layout/Stats";
import {Partners} from "@/components/layout/Partners";

import LenisWrapper from "@/components/LenisWrapper";
import {Events} from "@/components/layout/Events";

export default function Home() {
	return (
		<LenisWrapper>
			<div className="sticky top-0 z-50 bg-white">
				<Header />
			</div>
			<Hero />
			<WhatWeDo />
			<Events />
			<Stats />
			<Partners />
			<Footer />
		</LenisWrapper>
	);
}
