import React,{ Component } from 'react'

export default class Contact extends Component{
    render(){
        return(
        <div>
        <a  name="contact"></a>
        <div className="banner">
        <div className="bg-overlay4">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                  <h2 className="connect">Connect with cll's geekjc: geekjc123@gmail.com</h2>
                </div>
              <br />

                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                                <a href="https://www.facebook.com/chen.lili.752" target="_blank" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i> <span className="network-name">Facebook</span></a>
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