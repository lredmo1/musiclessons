class Teacher < ApplicationRecord
    has_secure_password
    
    has_many :students
    has_many :songs, through: :students
end
