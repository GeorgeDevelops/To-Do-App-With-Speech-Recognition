import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const Item = (props) => {
    const  { taskName, check, remove, id } = props;


    return ( 
    <React.Fragment>
        <li className='item' id={id}>
            <div>
            { taskName }

            <div id='btn-control'>
              <FontAwesomeIcon onClick={check} className='check' icon={faCheck} />
              <span onClick={remove} className='xmark'>X</span>
            </div>

            </div>
        </li>
    </React.Fragment>
    );
}
 
export default Item;