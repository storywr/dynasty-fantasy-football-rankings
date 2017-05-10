namespace :start do
  task :development do
    exec 'foreman start -f Procfile.dev'
  end

  task :production do
    exec 'foreman start -p 3000'
  end
end

task :start => 'start:development'
