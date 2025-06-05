import LenisWrapper from "@/components/LenisWrapper";
import { TabsSwitcher } from "@/components/TabsSwitcher";

export default function EventsPage() {
	return (
		<div className="min-h-screen bg-background">
			<LenisWrapper>
				<div className="max-w-6xl mx-auto px-4 py-32">
					<TabsSwitcher />
				</div>
			</LenisWrapper>
		</div>
	);
}
