function FloatingBalls() {
    return (
        // lg:-translate-x-[150px] lg:-translate-y-[100px] offsetting parent's padding
        <div className="absolute h-full w-full floating-balls pointer-events-none lg:-translate-x-[150px] lg:-translate-y-[calc(100px+2.5rem)]">
            <div className="max-lg:hidden absolute sphere-orange top-20 left-1/3" />
            <div className="max-lg:hidden absolute top-9 right-1/3 blur-[2px]">
                <div className="absolute sphere-purple top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                <div className="desktop-purple-shadow top-1/2 -translate-y-1/2 left-1/2 -translate-x-[calc(50%+3.5rem)]" />
            </div>
            <div className="max-lg:hidden absolute left-12 bottom-1/3">
                <div className=" desktop-orange-shadow top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>

            <div className="max-lg:hidden absolute bottom-[24%] right-[37%] blur-[2px]">
                <div className="absolute sphere-orange scale-[0.4] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            </div>

            <div className="absolute mobile-purple-shadow" />
            <div className="absolute mobile-orange-shadow" />
        </div>
    );
}

export default FloatingBalls;
