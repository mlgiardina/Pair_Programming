class User < ActiveRecord::Base
  attr_accessor :users
  has_secure_password
  has_many :answers
  validates_uniqueness_of :username
  validates_uniqueness_of :email
end
