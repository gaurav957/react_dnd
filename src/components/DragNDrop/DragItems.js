import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';


const DragItems = (props) =>{

    const [{isDragging}, drag] = useDrag({
        item: { type:ItemTypes.BOX },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                props.dropHandler(props.id,dropResult.id);
                //console.log(dropResult);
                //alert(`You dropped ${props.name} into ${dropResult.id}!`);
            }
        },
        collect:monitor =>({
            isDragging: !!monitor.isDragging(),
        })
    })

    return (<div className="dragItem" ref={drag}>
        {props.name}
    </div>);
}

export default DragItems;