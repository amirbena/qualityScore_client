import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedAnimal, getPets, insertToParams } from '../../redux/actions'
import { Nav } from 'react-bootstrap'


const NavBar = () => {
    const { selectedAnimal } = useSelector(state => state.selects);
    const params = useSelector(state => state.params);
    const dispatch = useDispatch();
    const onSelect = (selectedItem) => {
        const object = { selectedAnimal: selectedItem };
        dispatch(setSelectedAnimal(selectedItem));
        dispatch(getPets(params, object));
    }
    return (
        <Nav variant="tabs" defaultActiveKey={selectedAnimal} onSelect={onSelect}>
            <Nav.Item>
                <Nav.Link eventKey="Cats">Cats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Dogs">Dogs</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;