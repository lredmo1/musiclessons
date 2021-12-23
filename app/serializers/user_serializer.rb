class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :students
  # has_many :teacher_classrooms

  # has_many :teacher_classrooms, foreign_key: :teacher_id, class_name: "Classroom"
  # has_many :students, through: :teacher_classrooms

  # def students
  #   self.object.students
  # end



    
end
