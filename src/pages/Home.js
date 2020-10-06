import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Movie from '../components/Movie';
import MovieList from '../components/MovieList';
import MovieDetail from '../components/MovieDetail';

const Home = () => {
    return (
        <div>
            <Header />

            <Route path="/add" exact={true} component={Movie} />
            <Route path="/list" exact={true} component={MovieList} />
            <Route path="/detail/:id" exact={true} component={MovieDetail} />
        </div>
    );
};

export default Home;
