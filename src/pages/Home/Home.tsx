import Movies from '../Movies/Movies';
import People from '../People/People';
import TvShows from '../TvShows/TvShows';

export default function Home() {
    return (
        <>
            <div className="container">
                <Movies home={true} />
                <TvShows home={true} />
                <People home={true} />
            </div>
        </>
    );
}
