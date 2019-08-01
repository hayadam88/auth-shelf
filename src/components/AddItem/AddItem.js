import React, {Component} from 'react';
import {connect} from 'react-redux';



class AddItem extends Component {
//   componentDidMount () {
//     this.props.dispatch({type: 'FETCH_USER'})
//   }

state = {
    description: 'test',
    image_url: 'test'
};


handleSubmit = () => {

};

handleChangeFor = (event, property) => {
    this.setState({
        ...this.state,
        [property]: event.target.value
    })
}


render() {
    console.log(this.state)
    return (
     <>
         <h1>Add an item to the shelf!</h1>
         {/* <p>{this.state}</p> */}
         <br/>
             <form onSubmit={this.handleSubmit} className ="addItem">
                <input type="text" placeholder="Item Description" onChange={(event) => this.handleChangeFor(event, 'description')}></input>
                <input type="text" placeholder="Item image url" onChange={(event) => this.handleChangeFor(event, 'image_url')}></input>
                <input type="submit"></input>
             </form>
         
     </>
  )}
}

export default connect()(AddItem);