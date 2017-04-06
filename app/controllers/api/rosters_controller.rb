class Api::RostersController < ApplicationController

  def index
    @rosters = Roster.all
    render status: 200,
    json: @rosters
  end

end
