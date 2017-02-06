/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';

class InfoEpp extends Component {

    render (){

        var nomeEpp= this.props.en;
        var descricao = this.props.ed;
        var people = (this.props.ep) ? <p><b>Participantes</b><br/>{this.props.ep}</p> : "";


        return(
            <div>
                <div className="epprow min">
                    <h3><b>{nomeEpp}</b></h3>
                    <p><b>Resumo do ep.</b><br/>
                        {descricao}
                    </p>
                </div>
                <div className="epprow more">
                    {people}

                </div>
            </div>
        );
    }
}

InfoEpp.defaultProps ={
    params: {en: 'there.s no ID to display'}
}

export default InfoEpp