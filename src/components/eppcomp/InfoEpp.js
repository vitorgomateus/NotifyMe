/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';


var details = [
    {id: '0', progrTitle: 'Breaking Bad', so:'02', ep:'03', epName: 'Ozymandias', genre: 'Fiction - Thriller/Action/Comedy', direct: 'Rian Johnson', writers: 'Vince Gilligan (created by), Peter Gould', stars: ' Bryan Cranston, Aaron Paul, Anna Gunn'},
    {id: '1', progrTitle: 'Breaking Bad', so:'02', ep:'04', epName: 'Ozymandias', genre: 'Fiction - Thriller/Action/Comedy', direct: 'Rian Johnson', writers: 'Vince Gilligan (created by), Peter Gould', stars: ' Bryan Cranston, Aaron Paul, Anna Gunn'},
    {id: '2', progrTitle: 'The Voice Portugal', so:'04', ep:'07', epName: 'Ozymandias', genre: 'Fiction - Thriller/Action/Comedy', direct: 'Rian Johnson', writers: 'Vince Gilligan (created by), Peter Gould', stars: ' Bryan Cranston, Aaron Paul, Anna Gunn'},
    {id: '3', progrTitle: 'Amor Maior', so:'01', ep:'02', epName: 'Ozymandias', genre: 'Fiction - Thriller/Action/Comedy', direct: 'Rian Johnson', writers: 'Vince Gilligan (created by), Peter Gould', stars: ' Bryan Cranston, Aaron Paul, Anna Gunn'},
    {id: '4', progrTitle: 'Notícias da noite', so:'2016', epName: 'Ozymandias', genre: 'Fiction - Thriller/Action/Comedy', direct: 'Rian Johnson', writers: 'Vince Gilligan (created by), Peter Gould', stars: ' Bryan Cranston, Aaron Paul, Anna Gunn'},
    {id: '5', progrTitle: 'Jornal da Noite', so:'2016',epName: 'Ozymandias', genre: 'Fiction - Thriller/Action/Comedy', direct: 'Rian Johnson', writers: 'Vince Gilligan (created by), Peter Gould', stars: ' Bryan Cranston, Aaron Paul, Anna Gunn'}
];

class InfoEpp extends Component {

    render (){

        var episodio = [];
        var episodioID = this.props.dt;
        details.forEach(function(episode) {
            if (episode.id == episodioID) {
                episodio=episode;
            }
        });


        if (episodio.progrTitle == null) {
            episodio.progrTitle = "No Episode to Display"
        };

        var nomeepp = episodio.epName;
        var genero = episodio.genre;
        var director = episodio.direct;
        var escritor = episodio.writers;
        var actores = episodio.stars;


        return(
            <div>
                <div className="epprow min">
                    <h3><b>{nomeepp}</b></h3>
                    <p><b>Resumo do ep.</b><br/>
                        Vivamus in mi eu magna lacinia ultricies sit amet ut est. Donec rutrum eget turpis non maximus. Vestibulum sapien tortor, sagittis eu mi id, rutrum imperdiet magna. Maecenas volutpat viverra pretium. Nam ultricies dapibus lacus, vel laoreet odio rhoncus vel.
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
    params: {dt: 'there.s no ID to display'}
}

export default InfoEpp