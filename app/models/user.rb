class User < ApplicationRecord
  has_many :folders, dependent: :destroy
  has_many :subjects, dependent: :destroy
  has_many :matchs, dependent: :destroy
  has_many :images, dependent: :destroy
  has_many :active_relationships, class_name: Relationship.name,
    foreign_key: "follower_id", dependent: :destroy

  devise :database_authenticatable, :registerable,
    :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, omniauth_providers: [:google_oauth2]

  class << self
    def from_omniauth access_token
      data = access_token.info
      user = User.where(email: data[:email]).first
      unless user
        user = User.create username: data[:name],
          email: data[:email],
          password: Devise.friendly_token[0,20]
      end
      user
    end
  end
end
