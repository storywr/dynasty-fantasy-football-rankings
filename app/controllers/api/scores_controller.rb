class Api::ScoresController < ApplicationController

  def index
    @score = Score.all
    render status: 200,
    json: @score
  end

  def score
    if score_params[:year] == "2013"
      response = HTTParty.get("http://www77.myfantasyleague.com/2015/export?TYPE=playerScores&L=63773&JSON=1&P=#{score_params[:playerid]}&YEAR=#{score_params[:year]}")
    else
      response = HTTParty.get("http://www77.myfantasyleague.com/2016/export?TYPE=playerScores&L=18474&JSON=1&P=#{score_params[:playerid]}&YEAR=#{score_params[:year]}")
    end
    render json: response
  end

  private

  def score_params
    params.require(:score).permit(:year, :playerid)
  end

end
