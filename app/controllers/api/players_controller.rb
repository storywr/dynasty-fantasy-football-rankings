class Api::PlayersController < ApplicationController

  def index
    @players = Player.all.sort_by { |player| player.positional_ranking }
    render status: 200,
    json: @players
  end

  def create
    @player = Player.create(player_params)
  end

  private

  def player_params
    params.require(:player).permit(:name, :position, :team, :pic, :positional_ranking)
  end

end
