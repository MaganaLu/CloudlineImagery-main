import './ServicesCardComponent.css'

const ServicesCardComponent = (props) => {
    return (
        <>
            <section class="articles">
                <article>
                    <div class="article-wrapper">
                        <figure>
                            <img crossOrigin="anonymous" src={props.image} alt="image not found" />
                        </figure>
                        <div class="article-body">
                            <h2>{props.title}</h2>
                            <p style={{color:"black"}}>{props.subtext}</p>
                            <div className='seeMore'> {"see more"} &#8594;</div>
                        </div>
                        
                    </div>
                </article>
            </section>

        </>
    )
};

export default ServicesCardComponent

