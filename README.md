Fantasy Football Scout
======================================

This App was designed as a companion to MFL fantasy football leagues. It is currently set up to show the league that I play in, which can be found under the "League" tab. The positional tabs show you both ADP (Average Draft Position) from MFL mock/real drafts, and your personal rankings in the carousel located on the bottom. Clicking the players in the carousel allows you to comment or adjust the player's positional ranking. Clicking on the ADP players will also take you to the respected playercard but only if you have added them to your personal rankings with the "Add Player Tab". You can seed the database with my personal rankings to get started.

Installation
------------

bundle && cd client && npm i

cd ..

bundle exec rake db:create db:migrate db:seed

rake start
