import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination, CardGroup } from 'react-bootstrap';
import { getPets } from '../../redux/actions';
import Pet from './Pet/Pet';

const PetsData = () => {
    const { pets, pagination } = useSelector(state => state.petsData);
    const dispatch = useDispatch();

    const renderPets = () => {
        console.log(pets);
        return pets.map((pet, index) => (
            <>
                <div>
                    <Pet pet={pet} />
                </div>
            </>
        ))
    }

    const renderNumbers = () => {
        console.log(pagination);
        const { currentPage, total_pages } = pagination;
        const paginationArr = [];
        for (let index = 1; index <= total_pages; index++) {
            paginationArr.push(index);

        }
        return paginationArr.map(index => {
            (<Pagination.Item key={`i${index}`} active={currentPage === index} onClick={e => onPaginate(e)}>
                {index}
            </Pagination.Item>
            )
        })
    }

    const onPaginate = e => {
        const { value } = e.target;
        dispatch(getPets({ page: value }));
    }

    return (
        <>
            <CardGroup>
                {renderPets()}
            </CardGroup>

            <Pagination style={{marginLeft: "400px"}}>
                {renderNumbers()}
            </Pagination>
        </>
    )

}

export default PetsData;