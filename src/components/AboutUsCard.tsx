export interface AboutUsCardProps {
    title: string;
    description: string;
}

export const AboutUsCard = ({title, description}: AboutUsCardProps) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-700 dark:text-gray-300">
            {description}
        </p>
        </div>
    );
}