import { StatsData } from "@/components/home/Stats";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
    stat: StatsData,
    cardStyle?: string,
    textStyle?: string,
}

export const StatCard = ({stat, cardStyle, textStyle}: StatCardProps) => {
    return (
        <Card className={cn("flex flex-row w-64 p-8 border-2 border-white shadow-2xl", cardStyle)}>
            <div className="flec items-center justify-center">
                {stat.icon && (() => {
                    const LucideIcon = require("lucide-react")[stat.icon];
                    return LucideIcon ?
                        <LucideIcon className={cn("w-12 h-12", textStyle)}/> : require("lucide-react")["badge"];
                })()}
            </div>
            <div className="flex flex-col">
                <h3 className={cn("text-2xl font-bold", textStyle)}>{stat.value}+</h3>
                <p className={cn("text-md font-semibold uppercase", textStyle)}>{stat.type}</p>
            </div>
        </Card>
    )
}