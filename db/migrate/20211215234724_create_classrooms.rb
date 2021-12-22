class CreateClassrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :classrooms do |t|
      t.references :teacher, references: :users, null: false, foreign_key: { to_table: :users }
      t.references :student, references: :users, null: false, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
