require 'sinatra/base'
require 'sinatra/flash'
require_relative '../data_mapper_setup'

module Routes

  class BaseController < Sinatra::Base
    set :views, proc { File.join(root, '..', 'views') }
    enable :sessions
    set :session_secret, 'super secret'
    register Sinatra::Flash

    helpers do

     def current_user
       @current_user ||= Maker.get(session[:maker_id])
     end

     def current_peep
       @current_peep ||= Peep.get(session[:peep_id])
     end

    end
    # run! if app_file == $PROGRAM_NAME
  end

end