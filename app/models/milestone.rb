class Milestone < ActiveRecord::Base
  attr_accessor :date, :completed, :description

  belongs_to :goal
end
