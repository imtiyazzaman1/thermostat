require 'sinatra/base'
require 'sinatra/cross_origin'
require "sinatra/cors"

class Server < Sinatra::Base
 register Sinatra::Cors
 enable :sessions

 set :allow_origin, "null"
 set :allow_methods, "GET,HEAD,POST"
 set :allow_headers, "content-type,if-modified-since"
 set :expose_headers, "location,link"

 get "/temperature" do
   $current_temp
 end

 post "/update_temp" do
   puts params
   $current_temp = params[:temp]
   redirect to '/temperature'
 end

 run! if app_file == $0

 def temperature

 end

end

class Settings

  def self.temperature
    @Temperature
  end

  def self.set_temperature(number)
    @temperature = number
  end
end
