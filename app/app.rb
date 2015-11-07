ENV['RACK_ENV'] ||= 'development'

require 'sinatra/base'
require 'sinatra/flash'
require_relative 'data_mapper_setup'
require_relative 'contollers/application_controller'
require_relative 'contollers/peep_controller'

class ChitterWebApp < Sinatra::Base
  
  get '/' do

  end

  run! if app_file == $PROGRAM_NAME
end
