class MilestonesController < ApplicationController
  def create
    @milestone = Milestone.new(milestone_params)
  end

  def update
    milestone = Milestone.find(params[:id])
    milestone.update(milestone_params)
  end

  def destroy
  end

	private

	def milestone_params
		params.require(:milestone).permit(:date, :description, :completed)
	end
end
