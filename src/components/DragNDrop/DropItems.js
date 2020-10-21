import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

import DragItems from './DragItems';


const DropItems = (props) =>{

    const [{ canDrop, isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: () => ({ name: props.name,id: props.id })

    })

    const dragItems = props.dragIds.map(dragItem=>(<DragItems key={dragItem} name={props.fullstate[dragItem].name} />));

    return (<div className="dropCont" ref={drop}>
        {dragItems}
    </div>);
}

export default DropItems;