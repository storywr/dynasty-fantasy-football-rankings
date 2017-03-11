import React from 'react'

const PlayerList = (props) => {
  function listPlayers() {
    return props.playerNames.map(playerName => {
      return (
        <div>
          <div>
            <ul>
              <li>{playerName}</li>
            </ul>
          </div>
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
