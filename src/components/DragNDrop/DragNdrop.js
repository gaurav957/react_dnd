import React, { Component } from 'react'
import DragItems from './DragItems'
import DropItems from './DropItems'

export class DragNdrop extends Component {

    constructor(props) {
        super(props);
          
        this.state = {
           dragData: {
               "1":{
                   "id":"1",
                   "name":"Coffee"
                },
                "2":{
                    "id":"2",
                    "name":"Tea"
                },
                "3":{
                    "id":"3",
                    "name":"YouNameit"
                }
            },
            dropZones: {
                "1":{
                    "id":"1",
                    "name":"Drop_1",
                    "dragIds":["3"],
                }
            },
            dragIds:["1","2"],
            dropIds:["1"]
            
        }
    }

    dropHandler = (dragId,dropId)=>{
        
        let updateDragIds = [...this.state.dropZones[dropId].dragIds];
        updateDragIds.push(dragId);
        let newDragIds = [...this.state.dragIds];
        let DragIndx = newDragIds.indexOf(dragId);
        newDragIds.splice(DragIndx,1);
        this.setState(prevState=>({
            ...prevState,
            dropZones: {
                ...prevState.dropZones,
                [dropId]:{
                    ...prevState.dropZones[dropId],
                    "dragIds":updateDragIds,
                }
            },
            dragIds:newDragIds
        }))
    }


    render() {

        const createDrag = ()=>(this.state.dragIds.map(id=><DragItems key={this.state.dragData[id].id} name={this.state.dragData[id].name} id={this.state.dragData[id].id} dropHandler = {this.dropHandler} />));

        const createDrop = ()=>(this.state.dropIds.map(id=><DropItems key={this.state.dropZones[id].id} name={this.state.dropZones[id].name} id={this.state.dropZones[id].id} dragIds={this.state.dropZones[id].dragIds} fullstate={this.state.dragData}  />))

        return (
            <div>
                <div className="DragArea">
                    {createDrag()}
                </div>
                <div className="DropArea">
                    {createDrop()}
                </div>
            </div>
        )
    }
}

export default DragNdrop
