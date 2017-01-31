import React from 'react';
import {Link} from 'react-router';

const Item = ({item}) => {
    // console.info('component Item', item);
    //http://services.online.meo.pt/Data/2013/11/programs/media/image/9427372/M
    //http://services.online.meo.pt/Data/2013/11/programs/media/image/chn_mcm_p/M           --- nahhh
    //http://proxycache.app.iptv.telecom.pt:8080/MeoHandler/ImageProxy.ashx?width=235&url=2/logos/pos/chn_sptv.png
    //Sim, é um path deste género, mas neste caso acho que variar o M no final não tem nenhum efeito e a imagem tem uma cercadura à volta
    //http://services.online.meo.pt/Data/2013/11/catalog/media/image/LiveChannel/chn_sptv/M
    var source = "http://proxycache.app.iptv.telecom.pt:8080/MeoHandler/ImageProxy.ashx?width=200&url=2/logos/pos/"+item.LogoUri+".png";
    //console.log("V- LogoUri:",item);
    return (
        <div className="contact-item">
            <Link to={`/home`}>
                {/*<img src={`http://catblog.myddns.me/img/${item.LogoUri}`} alt={item.id} />*/}
                <img src={item.ImageUri} alt={item.id}/>
                <ul>
	                <li>{item.Title}</li>
                    <li>{item.CallLetter}</li>
	                <li>{item.StartTime}</li>
                </ul>
            </Link>

        </div>
    );
};
//to={`/edit/${item.id}`}
Item.propTypes = {
    item: React.PropTypes.object.isRequired
};

export default Item;
