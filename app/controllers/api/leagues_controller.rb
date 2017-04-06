class Api::LeaguesController < ApplicationController

  def index
    @league = League.all
    render status: 200,
    json: @league
  end

end
