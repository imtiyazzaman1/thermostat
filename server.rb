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

  def self.city
    @city ||= 'London'
  end

  def self.set_city(city)
    @city = city
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
   {"temp":Settings.temperature, "city":Settings.city}.to_json
 end

 post "/update_temp" do
   puts params
   # $current_temp = params[:temp]
   Settings.set_temperature(params[:temp])
   redirect to '/temperature'
 end

 post "/update_city" do
  puts params
  Settings.set_city(params[:city])
  puts Settings.city
  redirect to '/temperature'

 end

 run! if app_file == $0

end
