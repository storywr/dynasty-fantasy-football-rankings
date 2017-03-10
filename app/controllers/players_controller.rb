class PlayersController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 400, json: { error: 'Expected parameter `q` '}
    else
      render(
        status: 200,
        json: Player.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end
end
