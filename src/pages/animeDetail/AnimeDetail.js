import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./animeDetail.scss";

const AnimeDetail = () => {
  const { animeId } = useParams();
  const [animeDetail, setAnimeDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAnimeDatails = async (animeId) => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://ghibliapi.herokuapp.com/films/${animeId}`
        );
        setAnimeDetail(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchAnimeDatails(animeId);
  }, [animeId]);
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {animeDetail && (
        <div className="animeDeatils">
          <img
            src={animeDetail.movie_banner}
            alt=""
            className="Movie_detailPoster"
          />
          <div className="movie_details">
            <div className="content_movie">
              <p className="MovieTitle">{animeDetail.title}</p>
              <p className="movie_dec">{animeDetail.description}</p>
              <button>Watch Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnimeDetail;
