import React from 'react';
import Table from './table.js'

export default class Form extends React.Component {

    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            id: 1
        };
        this.user = [];
    }

    onsubmit(e) {
        this.setState({id: this.state.id +1});
        this.user.push(this.state);
        console.log(this.user)
    }

    render() {
        return (
            <div>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" onChange={(e)=>this.setState({fname: e.target.value})} />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname"  onChange={(e)=>this.setState({lname: e.target.value})} />
                <input type="submit" value="Submit" onClick={()=>this.onsubmit()} />
                <Table user={this.user}/>
            </div>
        );
    }
}