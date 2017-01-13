/**
 * Created by VitorMaGo on 03/01/2017.
 */
import React, { Component } from 'react';

class IdStripe extends Component {

    render (){

        var episodio = this.props.nm;

        return(
            <div>
                <div className="row epprow eppidrow">
                    <div className="col-xs-4"></div>
                    <h2 className="col-xs-8 title">{episodio}</h2>
                </div>

                <div className="row epprow eppidrow">
                    <div className="col-xs-8 eppnum">
                        <p>Temporada {this.props.se}</p>
                        <p>Ep. {this.props.ep}</p>
                    </div>
                    <div className="col-xs-4"></div>
                </div>

            </div>
        );
    }
}

IdStripe.defaultProps ={
    params: {nm: 'there.s no ID to display'}
}

export default IdStripe