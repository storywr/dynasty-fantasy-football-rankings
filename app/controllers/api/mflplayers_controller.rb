class Api::MflplayersController < ApplicationController

  def index
    @mflplayers = Mflplayer.all
    render status: 200,
    json: @mflplayers
  end

  def players
    response = HTTParty.get('http://www77.myfantasyleague.com/2017/export?TYPE=players&L=18474&W=&JSON=1')
    render json: response
  end

end
