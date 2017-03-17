class Api::PlayersController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 200,
      json: Player.all
    else
      render(
        status: 200,
        json: Player.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
