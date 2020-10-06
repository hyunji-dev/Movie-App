import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        alert(id + '번 클릭됨');
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
                    alert('ok 응답');
                    setMovie(movie.filter((movies) => movie.id !== id)); // true
                } else {
                    alert(res);
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
            <img src={movie.medium_cover_image} alt="" />
            <div class="card-body">
                <Link to={'/detail/' + movie.id}>
                    <h4 class="card-title">{movie.title}</h4>
                </Link>
                <button onClick={() => deleteById(movie.id)}>삭제</button>
            </div>
        </div>
    );
};

export default MovieList;
