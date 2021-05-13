import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, CardGroup } from 'react-bootstrap';
import { getPets } from '../../redux/actions';
import Pet from './Pet/Pet';

const PetsData = () => {
    const { pets, pagination } = useSelector(state => state.petsData);
    const dispatch = useDispatch();

    const renderPets = () => {
        return pets.map((pet, index) => (
            <>
                <div key={`p${index}`}>
                    <Pet pet={pet} />
                </div>
            </>
        ))
    }

    const renderNumbers = () => {
        const { currentPage } = pagination;
        const paginationArr = [];
        for (let index = 1; index <= 20; index++) {
            paginationArr.push(index);

        }
        return paginationArr.map(index => (
            (<Pagination.Item key={`i${index}`} active={currentPage === index} onClick={onPaginate}>
                {index}
            </Pagination.Item>
            )
        ))
    }

    const onPaginate = e => {
        const { text: page } = e.target;
        dispatch(getPets({ page }));
    }

    return (
        <>
            <CardGroup>
                {renderPets()}
            </CardGroup>

            <Pagination style={{ marginLeft: "100px" }}>
                {renderNumbers()}
            </Pagination>
        </>
    )

}

export default PetsData;