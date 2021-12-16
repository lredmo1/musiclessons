class CreateStudents < ActiveRecord::Migration[6.1]
  def change
    create_table :students do |t|
      t.string :name
      t.integer :student_id
      t.string :username
      t.string :password_digest
      t.references :teacher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
