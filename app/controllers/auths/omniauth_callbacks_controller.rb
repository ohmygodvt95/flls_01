class Auths::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  def create
    @user = User.from_omniauth request.env["omniauth.auth"]
    if @user.persisted?
      sign_in_and_redirect @user, event: :authentication
    else
      session["devise.google_data"] = request.env["omniauth.users"].except :extra
      redirect_to root_path
    end
  end
end
