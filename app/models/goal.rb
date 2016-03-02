class Goal < ActiveRecord::Base
  attr_accessor :title

  belongs_to :user
  has_many :milestones
end
