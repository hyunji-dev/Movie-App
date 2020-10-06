import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';

const Home = () => {
    return (
        <div>
            <Header />
            <Route path="/list" exact={true} component={MovieList} />

            <Movie />
        </div>
    );
};

export default Home;
