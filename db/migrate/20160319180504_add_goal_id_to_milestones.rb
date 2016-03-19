class AddGoalIdToMilestones < ActiveRecord::Migration
  def change
		add_column :milestones, :goal_id, :integer
  end
end
