import React, { useEffect, useState } from 'react';
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

const MovieDetail = (props) => {
    const id = props.match.params.id;

    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetch('http://10.100.102.2:8000/api/movie/' + id, {
            method: 'get',
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setMovie(res);
            });
    }, []);

    function inputHandle(e) {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        });
    }

    function update(e) {
        e.preventDefault();

        fetch('http://10.100.102.2:8000/api/movie/' + id, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(movie),
        })
            .then((res) => res.text())
            .then((res) => {
                console.log(res);
                if (res === 'ok') {
                    alert('영화가 수정되었습니다.');
                }
            });
    }
    return (
        <div>
            영화 상세보기
            <br />
            <form>
                <InputStyle
                    type="text"
                    value={movie.medium_cover_image}
                    onChange={inputHandle}
                    name="medium_cover_image"
                />
                <br />
                <InputStyle
                    type="text"
                    value={movie.title}
                    onChange={inputHandle}
                    name="title"
                />
                <br />
                <InputStyle
                    type="text"
                    value={movie.rating}
                    onChange={inputHandle}
                    name="rating"
                />
                <br />
                <InputStyle
                    type="text"
                    value={movie.summary}
                    onChange={inputHandle}
                    name="summary"
                />
                <br />
            </form>
            <ButtonBoxStyle>
                <button onClick={update}>수정</button>
            </ButtonBoxStyle>
        </div>
    );
};

export default MovieDetail;
