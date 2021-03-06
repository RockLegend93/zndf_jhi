(function () {
    'use strict';

    angular
            .module('zndfApp')
            .factory('Event', Event);

    Event.$inject = ['$resource'];

    function Event($resource) {
        var service = $resource('api/events/:id', {}, {
            'query': {method: 'GET', isArray: true},
            'save': {method: 'POST'},
            'send': {method: 'PUT', url: 'api/events/:id/send'},
            'update': {method: 'PUT'}
        });

        return service;
    }
})();
