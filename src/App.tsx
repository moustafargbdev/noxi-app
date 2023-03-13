import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MoviesContextProvider } from './contexts/MoviesContext';
import { PeopleContextProvider } from './contexts/PeopleContext';
import { TvShowsContextProvider } from './contexts/TvShowsContext';
import RootLayout from './Layout/RootLayout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/Movies/MovieDetails/MovieDetails';
import Movies from './pages/Movies/Movies';
import People from './pages/People/People';
import TvShows from './pages/TvShows/TvShows';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'movies', element: <Movies /> },
            { path: 'movies/:movieId', element: <MovieDetails /> },
            {
                path: 'tv-shows',
                element: <TvShows />,
            },
            { path: 'people', element: <People /> },

            { path: 'register', element: <TvShows /> },
            { path: 'login', element: <People /> },
        ],
    },
]);

function App() {
    return (
        <>
            <MoviesContextProvider>
                <TvShowsContextProvider>
                    <PeopleContextProvider>
                        <RouterProvider router={routes}></RouterProvider>
                    </PeopleContextProvider>
                </TvShowsContextProvider>
            </MoviesContextProvider>
        </>
    );
}

export default App;
