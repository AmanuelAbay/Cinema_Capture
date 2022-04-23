import { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import Genres from "../../components/SingleContent/Genres";
import CustomPagination from "../../components/Pagination/CustomPagination";
import useGenre from "../../hooks/useGenre";


const Series=()=>{
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numberOfPages, setNumberOfPages] = useState(1);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGenres);
  
  
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}&with_watch_monetization_types=flatrate`
      );
      setContent(data.results);
      setNumberOfPages(data.total_pages);
    };
  
    useEffect(() => {
      fetchMovie();
    }, [page, genreforURL]);

    return (
        <div>
            <span className="pageTitle">Tv Series</span>
            <Genres
                type="tv"
                selectedGenres={selectedGenres}
                setSelectedGenres={setSelectedGenres}
                genres={ genres }
                setGenres={ setGenres }
                setPage={setPage}
            />
            <div className="trending">
                {content &&
                content.map((c) => (
                    <SingleContent
                    key={c.id}
                    id={c.id}
                    poster={c.poster_path}
                    title={c.title || c.name}
                    date={c.first_air_date || c.release_date}
                    media_type="tv"
                    vote_average={c.vote_average}
                    />
                ))}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    )
}

export default Series