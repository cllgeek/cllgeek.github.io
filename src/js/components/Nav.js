import React,{ Component } from 'react'
import { Link } from 'react-router'
import NProgress from 'nprogress'

export default class Nav extends Component{
    render(){
        return(
         <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
         <div className="container topnav">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand topnav" to="/">Cll's Blog</Link>
            </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="all">全部</Link>
                    </li>
                    <li>
                        <Link to="archive">归档</Link>
                    </li>
                   <li>
                        <Link to="tags">标签</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        )
    }
}