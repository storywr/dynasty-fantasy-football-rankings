import React from 'react'

const PlayerList = (props) => {
  const listPlayers = props.players.map(player =>
    <div key={player.id}>
      <ul>
        <li >{player.name}</li>
        <li >{player.position}</li>
        <li >{player.rating}</li>
      </ul>
    </div>
  );

  return (
    <div>
      {listPlayers}
    </div>
  )
}

export default PlayerList
