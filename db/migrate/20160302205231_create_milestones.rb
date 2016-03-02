class CreateMilestones < ActiveRecord::Migration
  def change
    create_table :milestones do |t|
      t.datetime :date
      t.text :description
      t.boolean :completed
    end
  end
end
