class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :review
      t.integer :user_id
      t.integer :car_id

      t.timestamps
    end
  end
end
