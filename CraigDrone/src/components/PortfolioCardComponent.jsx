import './PortfolioCardComponent.css'

const PortfolioCardComponent = (props) => {

    //let dateString = (props.date.toDate().toDateString()).toString();
    console.log("props.thumbnail",props.thumbnail);
    const isIframe = () => {
        {/*}
        if ((props.video).includes("iframe")) {
            let videoString = (props.video).replace("play", "embed"); 
            
            return (<iframe id='portfolioVideoPlayer' src={videoString + "?autoplay=false&loop=true&muted=false&preload=true&responsive=true"} allowFullScreen="true" allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;" ></iframe>);
        }
            */}
        return ( <img id='portfolioVideoPlayer' alt="image" src='public/images/dji_20240921144245_0040_d-2.jpg'></img>);
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
            </div>
        </div>
    )
}

export default PortfolioCardComponent;