class Api::MflplayersController < ApplicationController

  def index
    @mflplayers = Mflplayer.all
    render status: 200,
    json: @mflplayers
  end

end
