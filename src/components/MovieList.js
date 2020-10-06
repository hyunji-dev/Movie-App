import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieItem from './MovieItem';

const MovieList = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        fetch('http://10.100.102.2:8000/api/movie')
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setMovie(res);
            });
    }, []);

    function deleteById(id) {
        fetch('http://10.100.102.2:8000/api/movie/' + id, {
            method: 'delete',
        })
            .then((res) => {
                console.log(res.status);
                // status가 200이면 서버에서 정상적으로 수행된 것
                return res.status;
            })
            .then(function (res) {
                console.log(1, res);
                if (res === 200) {
                    alert('삭제되었습니다.');
                    setMovie(movie.filter((movie) => movie.id !== id)); // true
                } else {
                    alert('삭제 실패');
                }
            });
    }

    return (
        // <div className="card">
        //     <img src={movie.medium_cover_image} />
        //     <div className="card-body">
        //         <h4>{movie.title}</h4>
        //         <button>삭제</button>
        //     </div>
        // </div>
        <div>
            {movie.map((movie, index) => (
                <MovieItem
                    movie={movie}
                    key={index}
                    deleteById={deleteById}
                ></MovieItem>
            ))}
        </div>
    );
};

export default MovieList;
