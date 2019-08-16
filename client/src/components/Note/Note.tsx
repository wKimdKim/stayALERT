import * as React from 'react';
import { Component } from 'react';

export interface INoteProps {
    "Notes":any
}
 
export interface INoteState {
    "Notes":any
}
 
class Note extends Component<INoteProps, INoteState> {
    public state = { Notes:[]  }

    // public getNotes(){
    //     fetch(`https://localhost:44379/api/Notes`)
    //     .then(data=>data.json())
    //     .then(resp=>{
    //         const output=[];
    //         resp.note
    //     })
    // }
    public render() { 
        return ( 
            <div className="note-container">
                hoho
            </div>
         );
    }
}
 
export default Note;