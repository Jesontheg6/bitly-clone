class CreateCounters < ActiveRecord::Migration[5.0]
	def change
		create_table :sum_counter do |t|
		t.integer :counter

		t.timestamps #created_at & updated_at 
		end 

	end
end

