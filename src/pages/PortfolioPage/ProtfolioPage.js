import React from 'react'
import writingVideo  from '../../assets/img/writing.mp4'
export const ProtfolioPage = () => {
    return (
        <div className="portfolio__container">
           <header className="portfolio__video-container" >
               <div className="prtfolio__cover-video"></div> 
                <video
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="auto"
                    >
                    <source src={writingVideo} />
                </video>
                <div className="col justify-content-center align-items-center col-xs-12 col-sm-9">

                    <h3 id="portfolio__name">BASTIAN DIDIER PÉREZ</h3>
                    <hr className="col-xs-12 col-sm-12 "  id="portfolio__line-name" />
                </div>
           </header>
        </div>
    )
}
