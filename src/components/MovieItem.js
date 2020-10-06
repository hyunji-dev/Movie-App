import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {
    const deleteById = props.deleteById;
    const { id, title, medium_cover_image } = props.movie;

    return (
        <div>
            <img src={medium_cover_image} alt="" />
            <div class="card-body">
                <Link to={'/detail/' + id}>
                    <h4 class="card-title">{title}</h4>
                </Link>
                <button onClick={() => deleteById(id)}>삭제</button>
            </div>
        </div>
    );
};

export default MovieItem;
