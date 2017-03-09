class User < ApplicationRecord
  has_many :folders, dependent: :destroy
  has_many :matchs, dependent: :destroy
  has_many :active_relationships, class_name: Relationship.name,
    foreign_key: "follower_id", dependent: :destroy
end
