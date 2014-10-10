define([], function() {
    var config = {};
    config.apiKey = 'AIzaSyDh4iE9fgINz0gK2EFd7YKnFoyEnPYTBeg';
    config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
    config.clientId = '32946135056-k8a99h63u6vnpfic670d0adp5ddeucmb.apps.googleusercontent.com';

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    return config;
});