class Api::AdpsController < ApplicationController

  def index
    @adp = Adp.all
    render status: 200,
    json: @adp
  end

  def adp
    response = HTTParty.get('http://www77.myfantasyleague.com/2017/export?TYPE=adp&L=18474&W=&JSON=1')
    render json: response
  end

end
