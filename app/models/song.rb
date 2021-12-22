class Song < ApplicationRecord
  belongs_to :student_user, foreign_key: :student_id, class_name: "Classroom"
end
