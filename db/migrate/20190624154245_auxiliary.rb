class Auxiliary < ActiveRecord::Migration[5.0]
	def self.up
		execute "TRUNCATE schema_migrations;"
		execute "INSERT INTO schema_migrations VALUES ('20190624153816');"
	end
	def self.down
		raise ActiveRecord::IrreversibleMigration
	end
end
