class User < ApplicationRecord
  has_secure_password

  has_many :teacher_classrooms, foreign_key: :teacher_id, class_name: "Classroom", dependent: :destroy
  has_many :students, through: :teacher_classrooms, dependent: :destroy
  

  has_many :student_classrooms, foreign_key: :student_id , class_name: "Classroom", dependent: :destroy
  has_many :teachers, through: :student_classrooms


  

  has_many :songs, dependent: :destroy
end
