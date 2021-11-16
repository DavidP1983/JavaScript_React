import { Container, Row } from 'react-bootstrap';
import CoffeeListItem from '../coffee-list-item/coffee-list-item';

import './coffee-list.css';

const CoffeeList = ({data,onToggle}) => {

    const elements = data.map((item) => {
        const{id, ...items} = item;

        return  (
            <CoffeeListItem key={id} {...items} onToggle={(e) => onToggle(id, e.currentTarget.getAttribute('data-toggle'))}/>
        )
    })

    return (
        <section>
            <Container>
                <Row className="ml-5 mt-5 mb-3">
                    {elements}
                </Row>
            </Container>
        </section>
    )
}

export default CoffeeList;