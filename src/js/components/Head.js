import React,{ Component } from 'react'

export default class Head extends Component{
    render(){
        return(
        <div className="intro-header">
        <div className="bg-overlay">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="intro-message">
                        <h1>专注Web开发</h1>
                        <h3>Where Awesomeness Is Brought To Life.</h3>
                        <hr className="intro-divider" />
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
        </div>
      </div>
    </div>
        )
    }
}