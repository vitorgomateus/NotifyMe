import React from 'react';
import {Link} from 'react-router';
import '../css/eplistitem.css';

const Item = ({item}) => {
    var x = item.StartTime;

    var startTime = x.replace(":","h");

    item.ImageUri = item.ImageUri.slice(0, -1);
    item.ImageUri = item.ImageUri.concat("L");

    var y = item.EndDate.slice(6,19);;
    var z = item.StartDate.slice(6,19);
    var duracaoMinutos = (y-z)/1000/60;
    var duracao;
    var minutos;

    function setDuracao(){

        if(duracaoMinutos >= 60 && duracaoMinutos < 120){
            minutos = duracaoMinutos - 60;
            duracao = "1h" + minutos + "min";
            return duracao;
        }

        else if(duracaoMinutos >=120 && duracaoMinutos < 180){
            minutos = duracaoMinutos - 120;
            duracao = "2h" + minutos + "min";
            return duracao;
        }
        return duracaoMinutos + "min";

    };

    return (
        <div id="row" className="row">
            <Link to={`/epp/${item.Id}`} >

                <div className="col-xs-12  visible-sm-block visible-md-block visible-lg-block">
                    <div className="col-xs-4">

                        <img src={item.ImageUri} alt={item.Title}/>

                    </div>
                    <div className="col-xs-8">
                        <div className="col-xs-10 item-align-left">
                            <h4 className="programText"> {item.Title} {/*<b>{this.props.episode.ep} </b>*/}</h4>
                        </div>
                        <div className="col-xs-2 item-align-left">
                            <h4 className="programText"> {startTime} </h4>
                        </div>
                    </div>

                    <div className="col-xs-8">
                        <div className="col-xs-10 item-align-left">
                            <h4 className="programText"> {item.CallLetter} </h4>
                        </div>
                        <div className="col-xs-2 item-align-left" >
                            <h4 className="programText"> {setDuracao()} </h4>
                        </div>
                    </div>

                </div>
                <div className="col-xs-12 visible-md-block visible-lg-block ">
                    <div className="col-xs-4">
                        <hr/>
                    </div>
                    <div className="col-xs-8">
                        <hr/>
                    </div>
                </div>

                {/*//      ------------------------------------------------------------------------------------------------*/}

                <div className="col-xs-1"></div>
                <div className="col-xs-10 visible-xs-block npd">
                    <div className="col-xs-12 npd">
                        <img className="img-rounded pdb" src={item.ImageUri} alt={item.Title}/>

                    </div>

                    <div className="col-xs-12 smallMediumDiv npd">
                        <div className="item-max-width">
                            <div className="col-xs-12 item-align-left npd">
                                <h4 className="programText"> {item.CallLetter} {/*<b>{this.props.episode.ep} </b>*/}</h4>
                            </div>
                            <div className="col-xs-12 item-align-left npd">
                                <h4 className="programText"> {item.Title} </h4>
                            </div>

                        </div>
                    </div>

                    <div className="col-xs-12 npd">
                        <div className="col-xs-6 item-align-left npd">
                            <h4 className="programText"> {startTime} </h4>
                        </div>
                        <div className="col-xs-6 item-align-right npd" >
                            <h4 className="programText"> Duração: {setDuracao()} </h4>
                        </div>
                    </div>
                </div>
                <div className="col-xs-1"></div>
                <div className="col-xs-12 visible-xs-block visible-sm-block npd">
                    <hr/>
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
