class Answer < ActiveRecord::Base
  belongs_to :user
  serialize :body
end
