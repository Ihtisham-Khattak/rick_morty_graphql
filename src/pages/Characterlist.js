import React from "react";
import "./Characterlist.css";
import { CharacterList } from "../custom/CharacterList";
import { Link } from "react-router-dom";

const Characterlist = () => {
  const { error, data, loading } = CharacterList();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong.</div>;
  console.log({ error, loading, data });

  return (
    <div className="characterlist">
      {/* <h1>Graph QL</h1> */}
      {data?.characters?.results?.map((character) => (
        <div>
          <Link to={`/${character.id}`}>
            <img src={character.image} alt="iamges" key={character.id} />
          </Link>
          <h4>{character.name}</h4>
          <p>{character.status}</p>
          <p>{character.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default Characterlist;
