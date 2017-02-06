import React from 'react';
import {Link} from 'react-router';
import '../css/eplistitem.css'

const Item = ({item}) => {
    // console.info('component Item', item);
    //http://services.online.meo.pt/Data/2013/11/programs/media/image/9427372/M
    //http://services.online.meo.pt/Data/2013/11/programs/media/image/chn_mcm_p/M           --- nahhh
    //http://proxycache.app.iptv.telecom.pt:8080/MeoHandler/ImageProxy.ashx?width=235&url=2/logos/pos/chn_sptv.png
    //Sim, é um path deste género, mas neste caso acho que variar o M no final não tem nenhum efeito e a imagem tem uma cercadura à volta
    //http://services.online.meo.pt/Data/2013/11/catalog/media/image/LiveChannel/chn_sptv/M
    //var source = "http://proxycache.app.iptv.telecom.pt:8080/MeoHandler/ImageProxy.ashx?width=200&url=2/logos/pos/"+item.LogoUri+".png";
    //console.log("V- LogoUri:",item);

//console.log("ITME.jsx key", key, item.Title);

var x = item.StartTime;

    var startTime = x.replace(":","h");

    var y = item.EndDate.slice(6,19);;
    var z = item.StartDate.slice(6,19);

    var duracao = (y-z)/1000/60 + " mins.";

    return (
    <div className="row">
        <Link to={`/epp/${item.Id}`} >

            <div className="row linha">
                <div className="col-xs-4 linhaimg">

                    <img className="img-responsive imgitem" id="progImages" src={item.ImageUri} alt={item.Title}/>

                </div>
                <div className="col-xs-8 linhaTxt">

                    <div className="time col-sm-8"><h4 className="pitem" > {item.Title} {/*<b>{this.props.episode.ep} </b>*/}</h4></div>
                    <div className="time item-right col-sm-4"><h4 className="pitem"> {startTime} </h4></div>
                    <div className="col-sm-12"></div>
                    <div className="item-bottom col-sm-8"><h4 className="pitem"> {item.CallLetter} </h4></div>
                    <div className="item-bottom item-right col-sm-4"><h4 className="pitem"> {duracao} </h4></div>
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
         <div className="contact-item">
         <Link to={`/home`}>
         /!*<img src={`http://catblog.myddns.me/img/${item.LogoUri}`} alt={item.id} />*!/
         <img src={item.ImageUri} alt={item.id}/>
         <ul>
         <li>{item.Title}</li>
         <li>{item.CallLetter}</li>
         <li>{item.StartTime}</li>
         </ul>
         </Link>

         </div>

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
};
//to={`/edit/${item.id}`}
Item.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default Item;
