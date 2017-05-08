class Api::ProfilesController < ApplicationController

  def index
    @profile = Profile.all
    render status: 200,
    json: @profile
  end

  def profile
    response = HTTParty.get("http://www77.myfantasyleague.com/2017/export?TYPE=playerProfile&L=18474&W=&JSON=1&P=#{profile_params[:playerid]}")
    render json: response
  end

  private

  def profile_params
    params.require(:profile).permit(:playerid)
  end

end
