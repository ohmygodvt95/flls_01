Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2,
    Settings.google_app.clientId,
    Settings.google_app.clientSecret,
    {provider_ignores_state: true}
end
