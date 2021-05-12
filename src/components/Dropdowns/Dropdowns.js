import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
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
const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
        const [value, setValue] = useState('');

        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <FormControl
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder="Type to filter..."
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
            </div>
        );
    },
);
const Dropdowns = () => {
    const params = useSelector(state => state.params);
    const { ages, animalTypes, selectedAge, selectedType, selectedAnimal } = useSelector(state => state.selects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAnimalTypes(selectedAnimal));
    }, [])

    const actions = {
        age: setSelectedAge,
        type: setSelectedAnimalType
    }

    const onSelect = (selectedItem, type) => {
        const object = {};
        actions[type](selectedItem);
        if (selectedItem === "") removeFromParams([type]);
        else {
            object = { [type]: selectedItem };
        }
        getPets(object);
    }


    /**
     * 
     * @param {string[]} options 
     * @param {string} activeOption 
     */
    const renderOptions = (options, activeOption) => {
        return options.map(option => (
            <Dropdown.Item eventKey={option} active={option === activeOption}>{option}</Dropdown.Item>
        ))
    }
    return (
        <div style={{marginTop: '20px'}}>
            <Dropdown onSelect>
                <Dropdown.Toggle as={CustomToggle} variant="info" id="dropdown-basic">
                    Age
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu} onSelect={selectedItem => onSelect(selectedItem, "age")}>
                    {renderOptions(ages, selectedAge)}
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
            <Dropdown.Toggle as={CustomToggle} variant="info" id="dropdown-basic">
                    Type
                </Dropdown.Toggle>
                <Dropdown.Menu as={CustomMenu} onSelect={selectedItem => onSelect(selectedItem, "type")}>
                    {renderOptions(animalTypes, selectedType)}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Dropdowns;