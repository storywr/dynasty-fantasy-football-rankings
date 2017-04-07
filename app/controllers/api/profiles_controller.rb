class Api::ProfilesController < ApplicationController

  def index
    @profile = Profile.all
    render status: 200,
    json: @profile
  end


end
