import { StatCard } from "@/components/home/StatCard";

export interface StatsData {
    type: string;
    value: number;
    icon?: string;
}

export const Stats = () => {

    const statsData: StatsData[] = [
        {type: 'Universities', value: 21, icon: 'GraduationCap'},
        {type: 'Registrants', value: 3000, icon: 'Users'},
        {type: 'Streams', value: 10, icon: 'LayoutTemplate'},
        {type: 'Speakers', value: 16, icon: 'MicVocal'},
    ]
    return (
        <div className="h-screen sm:h-[80vh] flex flex-col justify-center items-center gap-4 bg-transparent px-4 sm:px-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white text-center">
                We have conducted StudPro for many Years. We ended
                <br className="hidden sm:block" />
                StudPro7.0 with massive numbers.
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 w-full max-w-4xl">
                {statsData.map((stat, index) => (
                    <StatCard
                        key={index}
                        stat={stat}
                        cardStyle={index % 2 === 0 ? 'bg-transparent' : 'bg-white'}
                        textStyle={index % 2 === 0 ? 'text-white' : 'text-primary'}
                    />
                ))}
            </div>
        </div>
    )
}