class Ability
  include CanCan::Ability

  def initialize user
    user ||= User.new
    can :manage, Subject, user_id: user.id
    can :read, Subject, permission: 0
  end
end
