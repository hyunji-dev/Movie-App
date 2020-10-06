import React from 'react';
import styled from 'styled-components';

const MovieDetail = (props) => {
    const { id, title, rating, medium_cover_image, summary } = props.movie;

    const InputStyle = styled.input`
        height: 45px;
        width: 100%;
        color: rgb(100, 100, 100);
        font-size: 15px;
        border: 1px solid rgb(230, 230, 230);
    `;
    const ButtonBoxStyle = styled.div`
        display: grid;
        grid-template-columns: auto;
        justify-content: end; /* 오른쪽끝에 배치 */
        padding: 20px 0px;
    `;
    const ButtonStyle = styled.button`
        background-color: rgb(255, 90, 95);
        color: white;
        width: 70px;
        height: 45px;
        font-size: 15px;
        font-weight: 700;
        border-radius: 6px; /* 1부터 50사이의 값을 줌 */
        border: 0px;
        cursor: pointer;
    `;

    function update() {}
    return (
        <div>
            <form>
                <InputStyle
                    type="text"
                    value={medium_cover_image}
                    name="medium_cover_image"
                />
                <br />
                <InputStyle type="text" value={title} name="title" />
                <br />
                <InputStyle type="text" value={rating} name="rating" />
                <br />
                <InputStyle type="text" value={summary} name="summary" />
                <br />
            </form>
            <ButtonBoxStyle>
                <ButtonStyle onClick={update}>수정</ButtonStyle>
            </ButtonBoxStyle>
        </div>
    );
};

export default MovieDetail;
