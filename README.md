Fantasy Football Scout
======================================

This App was designed as a companion to MFL fantasy football leagues. It is currently set up to show the league that I play in, which can be found under the "League" tab. The positional tabs show you both ADP (Average Draft Position) from MFL mock/real drafts, and your personal rankings in the carousel located on the bottom. Clicking the players in the carousel allows you to comment or adjust the player's positional ranking. Clicking on the ADP players will also take you to the respected playercard but only if you have added them to your personal rankings with the "Add Player Tab". You can seed the database with my personal rankings to get started.

Installation
------------

bundle && cd client && npm i

cd ..

bundle exec rake db:create db:migrate db:seed

rake start

Rankings
------------

Your rankings are shown at the bottom of the positional pages in the carousel. You can click on a player in the carousel to access their playercard and adjust their positional ranking with the (+) or (-) buttons. You can also add a player to your rankings using the "Add Player" Tab.

Average Draft Position (ADP)
------------

Every positional page also lists the top 40 players in average draft position (ADP) for the position. This data is pulled from MyFantasyLeague mock/real drafts that are continuously taking place. You can click on these players and access their playercards assuming you also have them in your personal ranking and spelled their name the same way.

League
------------

The league tab will take you to my personal fantasy football league. You can scroll through the carousel to see the different teams and click on any to access rosters.
