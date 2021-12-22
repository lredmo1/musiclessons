class User < ApplicationRecord
  has_secure_password

  has_many :student_users, foreign_key: :student_id , class_name: "Classroom"
  has_many :students, through: :student_users

  belongs_to :teacher_user, foreign_key: :teacher_id, class_name: "Classroom"

  has_many :songs
end
