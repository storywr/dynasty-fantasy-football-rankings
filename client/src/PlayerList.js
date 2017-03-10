import React from 'react'

const PlayerList = (props) => {
  function listPlayers() {
    return props.playerPics.map(playerPic => {
      return (
        <div className="col-lg-12">
          <div className="col-lg-6 col-lg-offset-3 well">
            <img src={playerPic.url} className="thumbnail responsive" style={{height: '220px', width: '221px', margin: 'auto'}}/>
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
