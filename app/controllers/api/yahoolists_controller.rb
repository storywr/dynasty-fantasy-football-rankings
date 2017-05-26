
require 'nokogiri'
require 'open-uri'

class Api::YahoolistsController < ApplicationController

  def yahoolists
    doc = Nokogiri::HTML(open('https://www.fantasypros.com/nfl/rankings/dynasty-overall.php'))
    players = doc.css("tbody tr")
    players.each do |player|
      Yahoolist.create({name: player.css("td.player-label").text})
    end
    @yahoolist = Yahoolist.all
    render status: 200,
    json: @yahoolist
  end

end
