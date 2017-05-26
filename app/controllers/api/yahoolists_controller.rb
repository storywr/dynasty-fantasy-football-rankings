
require 'nokogiri'
require 'open-uri'

class Api::YahoolistsController < ApplicationController

  def yahoolists
    if Yahoolist.all == []
      doc = Nokogiri::HTML(open('https://www.fantasypros.com/nfl/rankings/dynasty-overall.php'))
      players = doc.css("tbody tr")
      i = 1
      players.each do |player|
        if i < 201
          url = player.css("td.player-label a").map { |link| link["href"] }[0]
          page = Nokogiri::HTML(open("https://www.fantasypros.com#{url}"))
          pimage = page.css("img").map { |link| link["src"] }[1][2..-1]
          name = player.css("td.player-label").text.split(' ')
          name.delete_at(-1)
          name = name.join(' ')
          team = player.css("td.player-label").text.split(' ').pop
          position = player.css("td").text.split(' ').last[0, 2]
          Yahoolist.create({name: name, pic: pimage, position: position, team: team, ranking: i})
        else
          break
        end
        i += 1
      end
    end
    @yahoolist = Yahoolist.all
    render status: 200,
    json: @yahoolist
  end

end
