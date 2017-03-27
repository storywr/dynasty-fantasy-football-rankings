class Api::AdpsController < ApplicationController

  def index
    @adp = Adp.all
    render status: 200,
    json: @adp
  end

end
