import { StatsData } from "@/components/home/Stats";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
	stat: StatsData;
	cardStyle?: string;
	textStyle?: string;
}

export const StatCard = ({ stat, cardStyle, textStyle }: StatCardProps) => {
	return (
		<Card
			className={cn(
				"flex flex-row w-64 p-8 border-2 border-white shadow-2xl",
				cardStyle,
			)}
		>
			<div className="flec items-center justify-center">
				{stat.icon &&
					(() => {
						const Icon =
							stat.icon in LucideIcons
								? (LucideIcons[
										stat.icon as keyof typeof LucideIcons
									] as LucideIcon)
								: LucideIcons.Badge;
						return <Icon className={cn("w-12 h-12", textStyle)} />;
					})()}
			</div>
			<div className="flex flex-col">
				<h3 className={cn("text-2xl font-bold", textStyle)}>{stat.value}+</h3>
				<p className={cn("text-md font-semibold uppercase", textStyle)}>
					{stat.type}
				</p>
			</div>
		</Card>
	);
};
