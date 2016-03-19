class HomeController < ApplicationController
  def index
		if current_user
    	@goals = current_user.goals
		else
			@goals = []
		end
		render "home/index"
  end
end
