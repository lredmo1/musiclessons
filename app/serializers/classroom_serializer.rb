class ClassroomSerializer < ActiveModel::Serializer
  attributes :id
  has_one :teacher_id
  has_one :student_id
end
