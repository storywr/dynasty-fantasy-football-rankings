import React from 'react'

const PlayerList = (props) => {
  function listPlayers() {
    return props.players.map(player => {
      return (
        <div>
          <ul>
            <li key={player.id}>{player.name}</li>
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      {listPlayers()}
    </div>
  )
}

export default PlayerList
