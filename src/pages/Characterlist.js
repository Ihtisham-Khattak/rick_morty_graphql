import React from "react";
import "./Characterlist.css";
import { CharacterAPI } from "../custom/CharacterAPI";


const Characterlist = () => {

  const { error, data, loading } = CharacterAPI()

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong.</div>;
  console.log({ error, loading, data });
  return (
    <div className="characterlist">
      {data.characters.results.map((character) => (
        <>
          <img src={character.image} alt="iamges" key={character.id} />
          <span>{character.name}</span>
        </>
      ))}
    </div>
  );
};

export default Characterlist;
