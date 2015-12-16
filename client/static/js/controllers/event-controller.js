$(document).ready(function () {
    $('#calendar').fullCalendar({
        weekends: true,
        firstDay: 1,
        events: '/static/json/events.json'
    })
})

app.controller('EventController', ['$resource', function ($resource) {

}])
