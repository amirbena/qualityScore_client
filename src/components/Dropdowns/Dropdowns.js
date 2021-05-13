import React, { useEffect } from 'react';
import { ButtonGroup, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPets, removeFromParams, setSelectedAnimalType, setSelectedAge, getAnimalTypes } from '../../redux/actions';


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=""
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    >
        {children}
      &#x25bc;
    </a>
));

const Dropdowns = () => {
    const { ages, animalTypes, selectedAge, selectedType, selectedAnimal } = useSelector(state => state.selects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnimalTypes(selectedAnimal));
    }, [])

    const handleTypeSelect = (selectedType) => {
        let object = {};
        dispatch(setSelectedAnimalType(selectedType));
        if (selectedType === "") removeFromParams(["type"]);
        else {
            object = { type: selectedType };
        }
        dispatch(getPets(object));
    }



    const handleAgeSelect = (selectedAge) => {
        let object = {};
        dispatch(setSelectedAge(selectedAge));
        if (selectedAge === "") removeFromParams(["age"]);
        else {
            object = { age: selectedAge };
        }
        dispatch(getPets(object));

    }


    const renderAgeOptions = () => {
        return ages.map(option => (
            <Dropdown.Item eventKey={option} active={option === selectedAge} onSelect={handleAgeSelect}>{option === "" ? "All" : option}</Dropdown.Item>
        ))
    }
    const renderTypeOptions = () => {
        return animalTypes.map(option => (
            <Dropdown.Item eventKey={option} active={option === selectedType} onSelect={handleTypeSelect}>{option === "" ? "All" : option}</Dropdown.Item>
        ))
    }
    return (
        <Dropdown as={ButtonGroup} style={{ marginTop: '20px', marginLeft: '40px' }}>
            <Dropdown >
                <Dropdown.Toggle as={CustomToggle} variant="info" id="dropdown-basic" >
                    Age
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {renderAgeOptions()}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown style={{ marginLeft: "20px" }}>
                <Dropdown.Toggle as={CustomToggle} variant="info" id="dropdown-basic">
                    Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {renderTypeOptions(animalTypes, selectedType, "type")}
                </Dropdown.Menu>
            </Dropdown>
        </Dropdown>
    )
}

export default Dropdowns;