import React,{ Component } from 'react'
import PageContent from './PageContent'

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
                    </div>
                </div>
            </div>
            <PageContent />
        </div>
      </div>
    </div>
        )
    }
}