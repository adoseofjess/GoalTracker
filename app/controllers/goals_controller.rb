class GoalsController < ApplicationController
  def create
    @goal = Goal.new(goal_params)
    @goal.save
		redirect_to(:back)
  end

  def destroy
		Goal.find(params[:id]).destroy
		redirect_to(:back, status: 303)
  end

  private

  def goal_params
	  params.require(:goal).permit(:title, :user_id)
  end
end
