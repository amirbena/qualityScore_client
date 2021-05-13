import React,{useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { setSelectedAnimal, getPets,getAnimalTypes } from '../../redux/actions'
import { Nav } from 'react-bootstrap'


const NavBar = () => {
    const { selectedAnimal } = useSelector(state => state.selects);

    const dispatch = useDispatch();
    const onSelect = (selectedItem) => {
        const object = { type: selectedItem };
        dispatch(setSelectedAnimal(selectedItem));
        dispatch(getAnimalTypes(selectedItem));
        dispatch(getPets(object));
    }
    useEffect(() => {
        dispatch(getPets({
            type: "Cat"
        }));
    }, [])
    return (
        <Nav variant="tabs" defaultActiveKey={selectedAnimal} onSelect={onSelect}>
            <Nav.Item>
                <Nav.Link eventKey="Cat">Cats</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="Dog">Dogs</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavBar;