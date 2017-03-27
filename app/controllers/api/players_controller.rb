class Api::PlayersController < ApplicationController

  def index
    @players = Player.all
    render status: 200,
    json: @players
  end

  def create
    @player = Player.create(player_params)
  end

  def update
    if player_params[:id] != nil
      @player = Player.find(player_params[:id])
      @player.update(player_params)
    else
      @player = Player.create(player_params)
    end
  end

  private

  def player_params
    params.require(:player).permit(:name, :position, :team, :pic, :positional_ranking, :id)
  end

end
