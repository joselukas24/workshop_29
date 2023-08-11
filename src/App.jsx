import { useEffect, useState } from "react";
import "./App.css";

const cohortName = "2302-acc-pt-web-pt-b";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

const dummyPlayers = [
  {
    id: 11898,
    name: "adfja",
    breed: "adlkjfad",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2023-06-28T16:07:28.432Z",
    updatedAt: "2023-06-28T16:07:28.432Z",
    teamId: null,
    cohortId: 406,
  },
  {
    id: 11897,
    name: "Collie",
    breed: "Dollie",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2023-06-28T16:07:05.066Z",
    updatedAt: "2023-06-28T16:07:05.066Z",
    teamId: null,
    cohortId: 406,
  },
  {
    id: 10324,
    name: "Rufus",
    breed: "Irish Setter",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2023-06-12T18:40:17.460Z",
    updatedAt: "2023-06-12T18:40:17.460Z",
    teamId: null,
    cohortId: 406,
  },
  {
    id: 10339,
    name: "Rufus",
    breed: "Irish Setter",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2023-06-12T18:42:51.190Z",
    updatedAt: "2023-06-12T18:42:51.190Z",
    teamId: null,
    cohortId: 406,
  },
];

function App() {
  const [players, setPlayers] = useState(dummyPlayers);

  useEffect(() => {
    async function getPlayers(APIURL) {
      const response = await fetch(`${APIURL}/players`);
      const result = await response.json();
      console.log(result);
      setPlayers(result.data.players);
    }
    getPlayers(APIURL);
  }, []);

  return (
    <div id="all-players-container">
      {players.map((player) => {
        return (
          <div key={player.id} className="player">
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alt="" />
            <br />
            <button className="details-button">See Details</button>
            <button className="delete-button">Remove From Roster</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
