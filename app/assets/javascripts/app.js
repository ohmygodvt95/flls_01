var app = angular.module('FlashGo', ['ui.router', 'templates', 'Devise', 'ngMaterial']);
app.basePath = $('meta[name="base"]').attr('content');
app.limit_word_record = $('meta[name="limit_word_record"]').attr('content');
