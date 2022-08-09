import React, { Component } from 'react';
import Data from './Resourses/Data'
import List from './List';
import people from './Resourses/Data';



class Birthdays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: Data,
        }
        this.clearAll=this.clearAll.bind(this)
    }
    clearAll() {
        this.setState({
            people: [],
        })
    }

    removethisperson=(id)=>{
        this.setState({
           people:this.state.people.filter(peeps=>peeps.id!==id)
        })
    }

    render() {

        return (

            <main>
                <section className='container'>
                    <h3>{this.state.people.length} Birthdays Today</h3>

                    <List people={this.state.people} removethisperson={this.removethisperson}/>
                    <button onClick={this.clearAll}>Clear All</button>
                </section>
            </main>

        )
    }
}

export default Birthdays;