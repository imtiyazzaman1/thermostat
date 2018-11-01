require 'json'
require 'sinatra/base'
require 'sinatra/cross_origin'
require "sinatra/cors"

class Settings

  def self.temperature
    @temperature ||= 20
  end

  def self.set_temperature(number)
    @temperature = number
  end
end

class Server < Sinatra::Base
 register Sinatra::Cors
 enable :sessions

 set :allow_origin, "null"
 set :allow_methods, "GET,HEAD,POST"
 set :allow_headers, "content-type,if-modified-since"
 set :expose_headers, "location,link"

 get "/temperature" do
   {"temp":Settings.temperature}.to_json
 end

 post "/update_temp" do
   puts params
   # $current_temp = params[:temp]
   Settings.set_temperature(params[:temp])
   redirect to '/temperature'
 end

 # def temperature
 #   @temp ||= 20
 # end
 #
 # def set_temperature(num)
 #   @temp = num
 # end

 run! if app_file == $0

end
