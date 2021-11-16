import {Col} from 'react-bootstrap';
import card from './card.png';

import './coffee-list-item.css';

const CoffeeListItem = ({name, price, like, onToggle}) => {

    let clazz = "card bg-white text-center shadow";

    if(like){
        clazz+= " like";
    }

    return (
        <div>
    <Col sm className="px-4 ml-4 mb-2">
        <div className={clazz} onClick={onToggle} data-toggle='like'>
            <div className="card-body card-decor">
                <img src={card} alt="cofee"/>
                <h3>AROMISTICO Coffee 1 kg</h3>
                <p className="text-right">{name}</p>
                <p className="text-right price">{price}$</p>
                <i className="fas fa-star"></i>
            </div>
        </div>
    </Col>
        </div>
    )
}

export default CoffeeListItem;