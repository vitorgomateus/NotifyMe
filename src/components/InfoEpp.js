/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';

class InfoEpp extends Component {

    render (){

        var nomeEpp= this.props.en;
        var genero;
        var director;
        var escritor;
        var actores;
        var descricao = this.props.ed;


        return(
            <div>
                <div className="epprow min">
                    <h3><b>{nomeEpp}</b></h3>
                    <p><b>Resumo do ep.</b><br/>
                        {descricao}
                    </p>
                </div>
                <div className="epprow more">
                    <p>{genero}</p>
                    <p><b>Director</b><br/>
                        {director}</p>
                    <p><b>Escritores</b><br/>
                        {escritor}</p>
                    <p><b>Actores</b><br/>
                        {actores}</p>
                    <p><b>Sinopse</b><br/>
                        Vivamus in mi eu magna lacinia ultricies sit amet ut est. Donec rutrum eget turpis non maximus. Vestibulum sapien tortor, sagittis eu mi id, rutrum imperdiet magna. Maecenas volutpat viverra pretium. Nam ultricies dapibus lacus, vel laoreet odio rhoncus vel.
                    </p>
                </div>
            </div>
        );
    }
}

InfoEpp.defaultProps ={
    params: {en: 'there.s no ID to display'}
}

export default InfoEpp