import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Stats } from "@/components/home/Stats";
import { Partners } from "@/components/home/Partners";

import LenisWrapper from "@/components/layout/LenisWrapper";
import { Events } from "@/components/home/Events";
import { Overview } from "@/components/home/Overview";

export default function Home() {
	return (
		<LenisWrapper>
			<div className="relative">
				<Hero />
			</div>
			<Overview />
			<WhatWeDo />
			<Events />
			<Stats />
			<Partners />
		</LenisWrapper>
	);
}
