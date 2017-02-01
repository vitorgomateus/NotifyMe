/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';

class IdStripe extends Component {

    render (){

        var progNome = this.props.pn;
        var episodio = this.props.enu;

        //console.log("EPP ID", progNome, episodio);

        return(
            <div>
                <div className="row epprow eppidrow">
                    <div className="col-xs-4"></div>
                    <div className="col-xs-8">
                        <h3 className="title">{progNome}</h3>
                    </div>
                </div>

                <div className="row epprow eppidrow">
                    <div className="col-xs-8 eppnum">
                        <p>Temporada :P{/*{this.props.se}*/}</p>
                        <p>Ep. {episodio}</p>
                    </div>
                    <div className="col-xs-4"></div>
                </div>

            </div>
        );
    }
}

IdStripe.defaultProps ={
    params: {pn: 'there.s no ID to display', enu: 'this is not a number'}
}

export default IdStripe