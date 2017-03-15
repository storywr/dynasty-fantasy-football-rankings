import React from 'react'

const PlayerList = (props) => {
  function listPlayers() {
    return props.players.map(player => <li key={player.id}>{player.name}</li>)
      return (
        <div>
          <ul>
            {players}
          </ul>
        </div>
      )
    }
  return (
    <div>
      {listPlayers()}
    </div>
  )
}

export default PlayerList
