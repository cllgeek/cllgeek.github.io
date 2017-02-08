import React,{ Component } from 'react'

export default class PageContent extends Component{
    render(){
        return(
    <div>
        <a  name="about"></a>
    <div className="content-section-a">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-sm-9">
                    <div className="clearfix"></div>
                    <p className="lead">I'm a <a className="link" target="_blank" href="http://www.cllgeek.com/">self taught</a> web designer, developer based in guangdong.<br />
                      I'm a front-end engineer, graduated from guangdong university of technology.<br />
                      My passion is to use technology based solutions, to help solve real world challenges.<br />
                      <b>Competences:</b><br />
                      <b>Languages and Frameworks:</b><br />
                      Javascript, HTML5, CSS3, jQuery, Bootstrap4, react.js, vue.js,nodejs,linux.<br />
                      <b>Tools & expertise:</b><br />
                      Git, Responsive Web Design, Agile Methodologies.<br />
                      <b>Contact me:</b><br />
                      geekjc123@gmail.com
                    </p>
                </div>
                <div className="col-lg-2 col-sm-3 collapse navbar-collapse">
                    <img className="img-circle img-responsive" src="https://www.cllgeek.com/avatar.png" alt="" />
                </div>
            </div>
            <ul className="list-inline intro-social-buttons">
              <li>
                  <a href="http://weibo.com/xyly66" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-weibo fa-fw"></i> <span className="network-name">微博</span></a>
              </li>
              <li>
                  <a href="https://github.com/cllgeek" target="_blank" className="btn btn-default btn-lg "><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
              </li>
              <li>
                  <a href="http://shang.qq.com/wpa/qunwpa?idkey=c51406657c89a8cb514e26e1974188b68ce65f7b24c26e9b656eb77e9d9a429e" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-qq fa-fw"></i> <span className="network-name">qq群</span></a>
              </li>
              <li>
                  <a href="http://www.cllgeek.com/" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-rss fa-fw"></i> <span className="network-name">cll's blog</span></a>
              </li>
          </ul>
        </div>
     </div>
     </div>
        )
    }
}