import React, {Component} from 'react';
import {connect} from 'react-redux';

class ItemListItem extends Component {
    

    handleDelete = () => {
        this.props.dispatch({type: 'DELETE_ITEM', payload: this.props.item.id})
    }
    
    render(){
        return(
            <>
                <li>{
                    this.props.item.description}
                    <img src={this.props.item.url} alt="image" />
                    <button onClick={() => this.handleDelete}>Delete Item</button>
                </li>
            </>
        )
    }
}

export default connect()(ItemListItem);