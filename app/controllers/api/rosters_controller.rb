class Api::RostersController < ApplicationController

  def index
    @rosters = Roster.all
    render status: 200,
    json: @rosters
  end

  def roster
    response = HTTParty.get('http://www77.myfantasyleague.com/2017/export?TYPE=rosters&L=18474&W=&JSON=1')
    render json: response
  end


end
