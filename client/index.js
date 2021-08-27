import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const characterList = [
    {"id": 1, "name": "Harry Potter", "bloodType": "Half-blood", "house": "Gryffindor"},
    {"id": 2, "name": "Draco Malfoy", "bloodType": "Pure-blood", "house": "Slytherin"},
    {"id": 3, "name": "Luna Lovegood", "bloodType": "Pure-blood", "house": "Ravenclaw"}
] 

class Main extends Component {
    constructor() {
        super()
        this.state = {
            characters: [],
            // selectedCharacter: {}
        }
        // this.selectCharacter = this.selectCharacter.bind(this)
    }
    // async componentDidMount() {
    //     try {
    //         const characters = (await axios.get('/api/contacts')).data;
    //         this.setState({ characters })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
    render() {
        return (
            <div>
                <div>
                    <div>Character List</div>
                </div>
                <div>
                    {
                    }
                </div>    
            </div>
        )
    }
}