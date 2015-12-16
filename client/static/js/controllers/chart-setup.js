/*global $,app,Chart,console*/
app.controller('ChartSetup', ['$resource', '$http', function ($resource, $http) {
    var self = this,

        ctx = $('#myChart').get(0).getContext("2d"),
        myNewChart = new Chart(ctx),
        options = {},
        Test = $resource('/test');

    Test.get(new Test, function (result) {
        $http.get('/static/json/line-chartoptions.json').success(function (data) {
            options = data;
            var data = {
                    labels: result.labels,
                    datasets: [{
                        label: "Test Dataset",
                        fillColor: "rgba(150, 0, 255, 1)",
                        strokeColor: "rgba(0,0,0,1)",
                        highlightFill: "rgba(220,220,220, 0.5)",
                        highlightStroke: "rgba(220,220,220, 0.5)",
                        data: result.values
                    }]
                },

                myBarChart = new Chart(ctx, {
                    type: 'bar',
                    data: data,
                    options: options
                });
        });
    });


}]);
