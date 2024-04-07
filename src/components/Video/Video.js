
const Video = () => {
    return (
        <div className="max-w-[1300px] mx-auto py-10">
            <div className="w-3/4 mx-auto h-[550px] p-5 relative">
                <iframe className="w-full h-full rounded-3xl z-10" src="https://www.youtube.com/embed/bjQF77dxUdg?si=nu331e8Bv34ZuCYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="w-40 h-40 rounded-2xl bg-[#ffa6f9] absolute top-0 left-0 -z-10"></div>
                <div className="w-40 h-40 rounded-2xl bg-[#797cff] absolute bottom-0 right-0 -z-10"></div>
            </div>
        </div>
    );
};

export default Video;