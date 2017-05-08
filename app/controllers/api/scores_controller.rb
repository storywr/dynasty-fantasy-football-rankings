class Api::ScoresController < ApplicationController

  def index
    @score = Score.all
    render status: 200,
    json: @score
  end

  def score
    response = HTTParty.get("http://www77.myfantasyleague.com/2016/export?TYPE=playerScores&L=18474&JSON=1&P=#{score_params[:playerid]}")
    render json: response
  end

  private

  def score_params
    params.require(:score).permit(:playerid)
  end

end
