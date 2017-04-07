class Api::LeaguesController < ApplicationController

  def index
    @league = League.all
    render status: 200,
    json: @league
  end

  def league
    response = HTTParty.get('http://www77.myfantasyleague.com/2017/export?TYPE=league&L=18474&W=&JSON=1')
    render json: response
  end


end
