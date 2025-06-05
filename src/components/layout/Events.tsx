export const Events = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                <div className="text-center p-6 border rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">StudPro 5.0</h3>
                    <p className="text-sm text-muted-foreground">Foundation building</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">StudPro 6.0</h3>
                    <p className="text-sm text-muted-foreground">Advanced frameworks</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">StudPro 7.0</h3>
                    <p className="text-sm text-muted-foreground">Mobile & emerging tech</p>
                </div>
                <div className="text-center p-6 border rounded-lg">
                    <h3 className="font-semibold text-lg mb-2">StudPro 8.0</h3>
                    <p className="text-sm text-muted-foreground">Cutting-edge technologies</p>
                </div>
            </div>
        </div>
    );
};