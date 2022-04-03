import React, { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/Navbar";
import CardAnime from "../../components/cardComponets/Card";
import axios from "axios";
const Home = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchAnime = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://ghibliapi.herokuapp.com/films");
        setAnimeList(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error.message);
      }
    };
    fetchAnime();
  }, []);
  return (
    <>
      <Navbar />
      <div className="anime_components">
        {loading && <h2>Loading....</h2>}
        {animeList && animeList.map((anime) => <CardAnime anime={anime} />)}
      </div>
    </>
  );
};

export default Home;
