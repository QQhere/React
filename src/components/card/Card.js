import React from 'react';
import { styled } from "styled-components";

/*
const StyleCard = styled.tag(h1, h2, div, span, a, p,...)``
css-in-JS
*/

const StyledCard = styled.div`
    position: relative;
    width: 400px;
`;

const CardImage = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 8px;
`;

const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const CardContent = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 363px;
    height: 127px;
    padding: 20px;
    gap: 30px;
    border-radius: 20px;
    background-color: white;
`;

const BoxAvatar = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

const MiniBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const BoxContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
`;

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
`;

const TextBoild = styled.p`
    font-size: 18px;
    font-weight: 500;
    color: ${props => props.theme.color};
`;

const NumberColor = styled.p`
    font-size: 18px;
    font-weight: 700;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const CardMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const  Card= () => {
    return (
        <StyledCard>
            <CardImage>
                <CardImg src="https://cdn.dribbble.com/userupload/13529968/file/original-8e6f181f2afeaa0c66ae8ad68aa8ddb5.png?resize=1024x768" alt="avatar"/>
            </CardImage>
            <CardContent>
                <MiniBox>
                    <BoxContent>
                        <BoxAvatar>
                            <CardImg src="https://cdn.dribbble.com/userupload/13529968/file/original-8e6f181f2afeaa0c66ae8ad68aa8ddb5.png?resize=1024x768" alt="avatar"/>
                        </BoxAvatar>
                        <Text>@zndrson</Text>
                    </BoxContent>
                    <CardMeta>
                        <img src="/icon-h.svg" alt="heart" />
                        <Text>256</Text>
                    </CardMeta>
                </MiniBox>

                <MiniBox>
                    <TextBoild>Cosmic Perspective</TextBoild>
                    <NumberColor>12,000 PSL</NumberColor>
                </MiniBox>
            </CardContent>
            {/* <img src="/images/anh1.png" alt ="hahah"/> */}
            {/* <img src={require("../../images/anh1.png")} alt="hshs"/> */}
        </StyledCard>
    );
};

export default Card;
