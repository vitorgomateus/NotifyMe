/**
 * Created by VitorMaGo on 20/12/2016.
 */
import React, {Component} from 'react';

import {Link} from 'react-router';

import '../../../public/css/eplistitem.css';

import BBad from '../../../public/img/brkbad.png';




class EpListItem extends React.Component {
    render() {
        /*var name = this.props.product.stocked ?
         this.props.product.name :
         <span style={{color: 'red'}}>
         {this.props.product.name}
         </span>;*/
        var episodio = this.props.episode;
        var epID = episodio.Id;
        var name = episodio.Title + "  ";
        var imgSrc = require('../../../public/img/logo.png');//require ('../../img/' + this.props.episode.src);
        var channel = episodio.ChannelName;
        var xyz = episodio.StartTime;
        var zyx = xyz.slice(11,16);
        var startTime = zyx.replace(":","h");

        return (
            <div className="row">
                <Link to={`/epp/${epID}`} >

                    <div className="row linha">
                        <div className="col-xs-4 linhaimg">

                            <img className="img-responsive imgitem" id="progImages" src={imgSrc} />

                        </div>
                        <div className="col-xs-8 linhaTxt">

                            <h4 className="pitem" > {name} {/*<b>{this.props.episode.ep} </b>*/}</h4>
                            <h4 className="pitem"> {startTime} </h4>
                            <h4 className="pitem"> {channel} </h4>
                        </div>
                    </div>


                    <div className="row linha">
                        <div className="col-xs-4 linhaimg">
                            <hr/>
                        </div>
                        <div className="col-xs-8 linhadir">
                            <hr/>
                        </div>
                    </div>


                </Link>
                {/*

                 <div class="row" id="rowHeight">
                 <div class="col-xs-5" id >
                 <img   class = "img-responsive" id="progImages" src="img/Tvi24logo.png">
                 </div>
                 <div class="col-xs-7">
                 <h4>Noticias da noite</h4>
                 <h4><mark>No ar</mark></h4>
                 <h4>TVI</h4>
                 </div>
                 </div>

                 <div class="row">
                 <div class="col-xs-5">
                 <hr>
                 </div>
                 <div class="col-xs-7">
                 <hr>
                 </div>
                 </div>


                 <div className="row linha">
                 <div className="col-xs-4">
                 <hr/>
                 </div>
                 <div className="col-xs-8">
                 <hr/>
                 </div>
                 </div>
                 */}

            </div>



        );
    }
}

export default EpListItem