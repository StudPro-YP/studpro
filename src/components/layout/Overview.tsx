export const Overview = () => {
    return (
        <div className="h-screen bg-secondary flex justify-center">
            <div className="flex flex-row justify-center items-center max-w-4xl gap-16">
                <div className="flex-1/3 flex flex-col justify-start text-white gap-4 drop-shadow-xl/20">
                    <h1 className="text-5xl font-bold uppercase ">Introducing StudPro</h1>
                    <p>
                        The Ultimate bridge for Undergraduates to Connect with Industry Leaders
                    </p>
                </div>
                <div className="flex-2/3 bg-white p-8 rounded-lg shadow-xl/20">
                    <p>
                        StudPro is an career guidance initiative founded by Institute of Electrical and Electronics Engineers (IEEE) Young Professional Sri Lanka Section in 2017 to provide a platform for IEEE student members and young undergraduates to expose their talent to the industries as well as to encourage the maintenance of their IEEE membership as Young Professionals.
                    </p>
                </div>
            </div>

        </div>
    );
};