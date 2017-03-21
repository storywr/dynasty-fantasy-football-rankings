class Api::PlayersController < ApplicationController

  def index
    @players = Player.all.sort_by { |player| player.positional_ranking }
    render status: 200,
    json: @players
  end

end
