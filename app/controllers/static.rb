/
#GET / POST

get '/' do	
 erb :"static/index"
end

# post '/urls' do
# @url = Url.new(long_url: params["long_url"])
# @url.shorten
# @url.save
# erb :"static/index"


get '/the-team' do 
    erb :"static/the-team"
end 

get '/about-us' do
	erb :"static/about-us"

end 

get '/your-link' do
    erb :"static/your-link"
end 

get '/sorry' do
end


get '/:a' do 
	a = Url.find_by(short_url:params[:a])
    if a != nil
    	redirect a.long_url 
    else 
    	redirect to "sorry"
    end
end 


post '/urls' do 

    @url1 = Url.new(long_url: params["long_url"])
    # byebug
    if @url1.save
        @url1.short_url  =  (("a".."z").to_a + ("0".."9").to_a).sample(8).join
        @url1.save
	#post.save
        return @url1.to_json
    	# redirect '/your-link'
    else
       r @error = @url1.errors.full_messages.join(',')
        return @error.to_json
        # redirect '/'
    end
end 

# post '/'

