import React, { useState } from 'react';
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
      {
          name: 'Elon Musk',
          url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg",
        //   url: "https://m.media-amazon.com/images/M/MV5BMTI5NDY5NjU3NF5BMl5BanBnXkFtZTcwMzQ0MTMyMw@@._V1_UY1200_CR94,0,630,1200_AL_.jpg",
      },
      {
          name: 'Jeff Bezos',
          url: "https://www.biography.com/.image/t_share/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer-bloomberg-via-getty-images.jpg",
      },
  ]);

  const swiped = (direction, nameToDelete) => {
      console.log("removing: " + nameToDelete);
    //   setLastDirection(direction);
  };

  const outOfFrame = (name) => {
      console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
        <div className="tinderCards__cardContainer">
            {people.map((person) => (
                <TinderCard
                className='swipe'
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>

                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards