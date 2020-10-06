import React, { useState } from 'react';
import styled from 'styled-components';

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

const Movie = () => {
    const [movie, setMovie] = useState({});

    function inputHandle(e) {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    }

    function submit(e) {
        e.preventDefault();

        // 오브젝트를 제이슨으로 바꾸기
        let jsonUser = JSON.stringify(movie);
        console.log(jsonUser);

        fetch('http://10.100.102.2:8000/api/movie', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: jsonUser,
        })
            .then((res) => res.text())
            .then((res) => {
                console.log(res);
                if (res === 'ok') {
                    alert('영화가 저장되었습니다.');
                }
            });
    }

    return (
        <div>
            <form>
                <InputStyle
                    type="text"
                    onChange={inputHandle}
                    value={movie.title}
                    name="title"
                    placeholder="제목"
                />
                <br />
                <InputStyle
                    type="text"
                    value={movie.rating}
                    onChange={inputHandle}
                    name="rating"
                    placeholder="평점"
                />
                <br />
                <InputStyle
                    type="text"
                    value={movie.summary}
                    onChange={inputHandle}
                    name="summary"
                    placeholder="줄거리"
                />
                <br />
                <InputStyle
                    type="text"
                    value={movie.medium_cover_image}
                    onChange={inputHandle}
                    name="medium_cover_image"
                    placeholder="사진"
                />
                <br />
            </form>
            <ButtonBoxStyle>
                <ButtonStyle onClick={submit}>등록</ButtonStyle>
            </ButtonBoxStyle>
        </div>
    );
};

export default Movie;
