class AddIsteacherToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :is_teacher, :boolean
  end
end
