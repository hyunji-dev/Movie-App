import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonBoxStyle = styled.div`
    display: grid;
    grid-template-columns: auto;
    justify-content: right;
    padding: 10px 10px;
`;

const MovieItem = (props) => {
    const deleteById = props.deleteById;
    const { id, title, medium_cover_image } = props.movie;

    return (
        <div class="card">
            <img src={medium_cover_image} alt="" />
            <div class="card-body">
                <Link to={'/detail/' + id}>
                    <h4 class="card-title">{title}</h4>
                </Link>
                <ButtonBoxStyle>
                    <button onClick={() => deleteById(id)}>삭제</button>
                </ButtonBoxStyle>
            </div>
        </div>
    );
};

export default MovieItem;
