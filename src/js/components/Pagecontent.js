import React,{ Component } from 'react'

export default class PageContent extends Component{
    render(){
        return(
    <div>
        <a  name="about"></a>
    <div className="content-section-a">
      <div className="bg-overlay2">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <div className="clearfix"></div>
                  <h2 className="section-heading">专注Web开发</h2>
                  <br />
                    <p className="lead">I'm a <a className="link" target="_blank" href="http://www.cllgeek.com/">self taught</a> web designer, developer based in guangdong.<br />
                      I'm a front-end engineer, graduated from guangdong university of technology.<br />
                      My passion is to use technology based solutions, to help solve real world challenges.<br />
                      Competences:<br />
                      Languages and Frameworks:<br />
                      Javascript, HTML5, CSS3, jQuery, Bootstrap4, react.js, vue.js,nodejs,linux.<br />
                      Tools & expertise:<br />
                      Git, Responsive Web Design, Agile Methodologies.
                    </p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6 collapse navbar-collapse">
                    <img className="img-circle img-responsive" src="http://qiniu.cllgeek.com/avatar.png" alt="" />
                </div>
            </div>
        </div>
      </div>
     </div>
     </div>
        )
    }
}