import './PortfolioCardComponent.css'

const PortfolioCardComponent = (props) => {

    console.log("props.videLink: ", props.videoLink)

    //let dateString = (props.date.toDate().toDateString()).toString();
    //console.log("props.thumbnail",props.thumbnail);
    const isIframe = () => {
        //bunnyCDN video
        if ((props.videoLink).includes("iframe")) {
            let bunnyVideoString = (props.videoLink).replace("play", "embed");

            return (<iframe id='portfolioVideoPlayer' src={bunnyVideoString + "?autoplay=false&loop=true&muted=false&preload=true&responsive=true"} allowFullScreen="true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" ></iframe>);
        }
        //could be a youtibe video 
        if((props.videoLink).includes("youtube")){
            let youtubeVideoString = (props.videoLink).replace("watch?v=", "embed/");
            return(<iframe id='portfolioVideoPlayer' src={youtubeVideoString} allowFullScreen="true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" ></iframe>);
        }
        //else its an image and reurn image tag
        return (<img id='portfolioVideoPlayer' alt="image" src={props.thumbnail}></img>);
    }

    return (
        <div class="center">
            <div class="article-card">
                <div class="content">
                    <p class="title">{props.title}</p>
                    <p class="title">{props.description}</p>

                    <p class="date">{props.date}</p>
                </div>
                {isIframe()}
                {/*<img id='portfolioVideoPlayer' alt="Image Not Found" src={props.thumbnail}></img>*/}
            </div>
        </div>
    )
}

export default PortfolioCardComponent;