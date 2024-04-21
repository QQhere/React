import React from 'react';
import styled from 'styled-components';
import Card from './Card.js'

const StyledCardList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 100px 30px;
`;

const CardList = () => {
    return (
        <StyledCardList>
            {/* <Card></Card> */}
        </StyledCardList>
        
    );
};

export default CardList;