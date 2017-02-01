/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';
import '../css/eppimgstripe.css';

class ImgStripe extends Component {

    render (){

        var source = this.props.src;


        //var BBad = require( '../../../public/img/' + episodio);

        //`url(${BBad})`
        var imgBg = {
            backgroundImage: `url(`+source+`)`,
            backgroundSize: "cover"
        };

        return(
            <div className="jumbotron stripe" style={imgBg}>{/*
                <img src={BBad} className="imgInStripe"/>*/}
                {/*<div className="row">
                    <img className="col-xs-1 swp swpLeft"/>
                    <div className="col-xs-10"></div>
                    <img className="col-xs-1 swp swpRight" />
                </div>*/}
            </div>
        );
    }
}

ImgStripe.defaultProps ={
    params: {src: (require('../../public/img/logo.png'))}
}

export default ImgStripe