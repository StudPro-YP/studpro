import LenisWrapper from "@/components/layout/LenisWrapper";
import { TabsSwitcher } from "@/components/events/TabsSwitcher";

export default function EventsPage() {
	return (
		<div className="min-h-screen bg-background">
			<LenisWrapper>
				<div className="max-w-7xl mx-auto px-4 py-32">
					<TabsSwitcher />
				</div>
			</LenisWrapper>
		</div>
	);
}
