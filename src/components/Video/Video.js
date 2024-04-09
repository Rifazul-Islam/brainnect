
const Video = () => {
    return (
        <div className="video_section py-6 lg:py-16">
            <div className="video_container">
                <iframe className="video" src="https://www.youtube.com/embed/bjQF77dxUdg?si=nu331e8Bv34ZuCYz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                <div className="video_element_1"></div>
                <div className="video_element_2"></div>
            </div>
        </div>
    );
};

export default Video;