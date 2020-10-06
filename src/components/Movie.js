import React from 'react';
import styled from 'styled-components';

const Movie = () => {
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

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <InputStyle type="text" placeholder="제목" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <InputStyle type="" placeholder="평점" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <InputStyle type="text" placeholder="줄거리" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <InputStyle type="text" placeholder="사진" />
                    </td>
                </tr>
            </table>
            <ButtonBoxStyle>
                <ButtonStyle>등록</ButtonStyle>
            </ButtonBoxStyle>
        </div>
    );
};

export default Movie;
