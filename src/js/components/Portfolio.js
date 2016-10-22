import React,{ Component } from 'react'

export default class Portfolio extends Component{
    render(){
        return(
          <div>
          <a  name="portfolio"></a>
           <section id="portfolio" className="bg-light-gray bounds">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Awesomeness Portfolio.</h2>
                    <h3 id="below-section" className="section-subheading text-muted">Below you'll find some of my recent work.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="https://cllgeek.github.io/gallery-by-react/" target="_blank" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-star fa-3x"></i>
                            </div>
                        </div>
                        <img src="http://qiniu.cllgeek.com/2016102201.png" className="img_list" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>a photo gallery project</h4>
                        <p id="small-text" className="text-muted">Reactjs and webpack</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item portfolio2">
                    <a href="http://codepen.io/ThiagoFerreir4/full/vOyXre" className="portfolio-link" target="_blank" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-star fa-3x"></i>
                            </div>
                        </div>
                        <img src="https://40.media.tumblr.com/a73e79ce9844761d7cdc93d202b5cea1/tumblr_nwh4iomduD1ud7rr3o1_1280.jpg" className="img_list" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Wikipedia Search Engine</h4>
                        <p id="small-text" className="text-muted">Bootstrap and jQuery</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="http://codepen.io/ThiagoFerreir4/full/QbKWGO" target="_blank" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-star fa-3x"></i>
                            </div>
                        </div>
                        <img src="https://41.media.tumblr.com/5abea52ea28e9ea20ab995ebd23299a1/tumblr_nwh4iomduD1ud7rr3o2_1280.jpg" className="img_list" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Stainless Steel Calculator</h4>
                        <p id="small-text" className="text-muted">SCSS and Vanilla Javascript</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="http://codepen.io/ThiagoFerreir4/full/vOaRQz/" target="_blank" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-star fa-3x"></i>
                            </div>
                        </div>
                        <img src="https://40.media.tumblr.com/7512ad23b7e68304a65182988b9c804a/tumblr_nwy76xfEXi1ud7rr3o1_1280.png" className="img_list" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Pomodoro Timer Zipline</h4>
                        <p id="small-text" className="text-muted">Bootstrap and Angular.js</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="http://codepen.io/ThiagoFerreir4/full/oXwKJV" target="_blank" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-star fa-3x"></i>
                            </div>
                        </div>
                        <img src="https://41.media.tumblr.com/59b50efb8f7435fef9f87fd871b90d7a/tumblr_nxhm4k1jI81ud7rr3o1_1280.jpg" className="img_list" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Weather App</h4>
                        <p id="small-text" className="text-muted">Bootstrap and Vanilla Javascript</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6 portfolio-item">
                    <a href="http://codepen.io/ThiagoFerreir4/full/EjwGoX/" target="_blank" className="portfolio-link" data-toggle="modal">
                        <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                                <i className="fa fa-star fa-3x"></i>
                            </div>
                        </div>
                        <img src="https://36.media.tumblr.com/030b4966650a0d1dac0bbcca6fe572e8/tumblr_nxhm7qz6Y91ud7rr3o1_1280.jpg" className="img_list" alt="" />
                    </a>
                    <div className="portfolio-caption">
                        <h4>Pacman Tic Tac Toe</h4>
                        <p id="small-text" className="text-muted">CSS and jQuery</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
          </div>
        )
    }
}