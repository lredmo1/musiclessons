class User < ApplicationRecord
  has_secure_password

  has_many :teacher_classrooms, foreign_key: :teacher_id, class_name: "Classroom"
  has_many :students, through: :teacher_classrooms
  

  has_many :student_classrooms, foreign_key: :student_id , class_name: "Classroom"
  has_many :teachers, through: :student_classrooms


  

  has_many :songs, dependent: :destroy
end
