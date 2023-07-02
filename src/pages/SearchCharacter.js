import React from "react";
import "./SearchCharacter.css";
import { SearchCharacter } from "../custom/SearchCharacter";
// import { useParams } from "react-router-dom";

const CharacterAPI = () => {
  // const { id } = useParams();
  const { data, loading, error } = SearchCharacter(id);
  console.log({ data, loading, error });

  // if (error) return <div>Something is wrong</div>;
  // if (loading) return <div>Loading...</div>;
  // const values = data.character.episode;

  return (
    <div className="Character">
      <h1>values</h1>
      {/* <img src={data.character.image} alt="image" width={100} height={50} />
      <div className="Character-content">
        <h4>{data.character.name}</h4>
        <p>{data.character.gender}</p>
      </div>
      <div className="Character-episode">
        {[values].map((episodes) => (
          <div>
            {episodes.name} - <b> {episodes.episode}</b>
          </div> 
        ))}
      </div> */}
    </div>
  );
};

export default CharacterAPI;
