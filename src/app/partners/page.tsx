import LenisWrapper from "@/components/LenisWrapper";
import { PartnerTabsSwitcher } from "@/components/PartnerTabsSwitcher";

export default function PartnersPage() {
	return (
		<div className="min-h-screen bg-background">
			<LenisWrapper>
				<div className="max-w-6xl mx-auto px-4 py-32">
					<PartnerTabsSwitcher />
				</div>
			</LenisWrapper>
		</div>
	);
}
