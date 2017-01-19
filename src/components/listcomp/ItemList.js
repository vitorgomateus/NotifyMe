/**
 * Created by VitorMaGo on 20/12/2016.
 */
import React, { Component } from 'react';

import EpListItem from './EpListItem';

class ItemList extends React.Component {
    render() {



        var rows = [];
        /*var lastCategory = null;*/
        //var jsonString = JSON.stringify(this.props.products, null, 2);
        //console.log("IL products: "+this.props.products[0][0].Title);

        /*this.props.products.forEach(function(episode) {
         /!*if (product.category !== lastCategory) {
         rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
         }*!/

         rows.push(<EpListItem episode={episode}/>);
         /!*lastCategory = product.category;*!/
         });*/

        var programas = this.props.products;
        var variable;
        for (var j = 0; j<programas.length; j++){
            /*for (var i = 0; i<programas[j].length; i++){}*/
                variable=programas[j];

                var count = Object.keys(variable).length;
                //console.log("IL products variable: "+variable.Title);//               ---Success!!!

                rows.push(<EpListItem episode={variable}/>);

        }

        //jsonString = JSON.stringify(rows[0][0], null, 2);
        //console.log("IL products rows: "+rows);


        return (


            <div className="lista">{rows}</div>


        );
    }
}

export default ItemList