bundle && cd client && npm i && cd ..
bundle exec rake db:create db:migrate db:seed
rake start
