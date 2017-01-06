/**
 * Created by VitorMaGo on 20/12/2016.
 */
import React, { Component } from 'react';

import EpListItem from './EpListItem';

class ItemList extends React.Component {
    render() {



        var rows = [];
        /*var lastCategory = null;*/
        this.props.products.forEach(function(episode) {
            /*if (product.category !== lastCategory) {
             rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
             }*/
            rows.push(<EpListItem episode={episode}/>);
            /*lastCategory = product.category;*/
        });


        return (
            <div className="lista">{rows}</div>


        );
    }
}

export default ItemList