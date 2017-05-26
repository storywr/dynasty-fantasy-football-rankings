
require 'nokogiri'
require 'open-uri'

class Api::YahoolistsController < ApplicationController

  def yahoolists
    doc = Nokogiri::HTML(open('https://www.fantasypros.com/nfl/rankings/dynasty-overall.php'))
    players = doc.css("tbody tr")
    i = 0
    players.each do |player|
      if i < 100
        url = player.css("td.player-label a").map { |link| link["href"] }[0]
        page = Nokogiri::HTML(open("https://www.fantasypros.com#{url}"))
        pimage = page.css("img").map { |link| link["src"] }[1][2..-1]
        Yahoolist.create({name: player.css("td.player-label").text, pic: pimage})
      else
        break
      end
      i += 1
    end
    @yahoolist = Yahoolist.all
    render status: 200,
    json: @yahoolist
  end

end
