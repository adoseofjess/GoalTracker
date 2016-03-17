class GoalsController < ApplicationController
  def create
    @goal = Goal.new(goal_params)
		p goal_params
		p @goal
    @goal.save
  end

  def destroy
  end

  private

  def goal_params
    p params
	  params.require(:goal).permit(:title)
  end
end
