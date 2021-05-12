import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from 'react-bootstrap';
import { getPets } from '../../redux/actions';
import Pet from './Pet/Pet';

const PetsData = () => {
    const { pets, pagination } = useSelector(state => state.petsData);
    const params = useSelector(state => state.params);
    const dispatch = useDispatch();

    const renderPets = () => {
        return pets.map((pet, index) => (
            <>
                <div style={{ marginLeft: "px" }}>
                    <Pet pet={pet} />
                </div>
                {index !== 0 && index % 4 === 0 && <br />}
            </>
        ))
    }

    const renderNumbers = () => {
        const { currentPage, total_pages } = pagination;
        const paginationArr = [];
        for (let index = 1; index <= total_pages; index++) {
            paginationArr.push(
                <Pagination.Item key={`i${index}`} active={currentPage === index} onClick={e => onPaginate(e)}>
                    {index}
                </Pagination.Item>
            )
        }
        return paginationArr;
    }

    const onPaginate = e => {
        const { value } = e.target;
        dispatch(getPets({ page: value }));
    }

    return (
        <>
            {renderPets()}
            <Pagination>
                {renderNumbers()}
            </Pagination>
        </>
    )

}

export default PetsData;