class Url < ActiveRecord::Base


validates :long_url, presence: true
validates :long_url, uniqueness: {case_sensitive: false, message: "was shortened before"}

validates :long_url, format: {with: (URI::regexp(['http', 'https'])), message: "format is not good"}


	# This is Sinatra! Remember to create a migration!

	# def shorten
		
	# 	value = (0...50).map { ('a'..'z').to_a[rand(26)] }.join
	# end

	# get '/' do 

	# puts "[LOG] Getting /"
	# puts "[LOG] Params: #{params.inspect}"
	# erb :index

 #   end 

	# post '/urls' do

 #   end 
 
 #   get '/:short_url' do 


   end



