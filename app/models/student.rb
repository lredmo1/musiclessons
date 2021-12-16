class Student < ApplicationRecord
  has_secure_password
  
  belongs_to :teacher
  has_many :songs
end
