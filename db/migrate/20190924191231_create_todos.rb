class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :title, null: false 
      t.text :body, null: false 
      t.boolean :done, null: false 
      t.index :title
      
      t.timestamps
    end
  end
end
