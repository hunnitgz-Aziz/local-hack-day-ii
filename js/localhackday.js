(function($){

  var Localhackday = {
    base_url: "http://organizer.mlh.io.dev/localhackday/api", // Base API URL

    // START View all events from the API
    getAll: function(callback) {
      this.queryAPI("GET", "/events.json", null, function(response) {
        console.log(response);
      }, function(errorMessage) {
        console.log("Localhackday API could not show events because: " + errorMessage);
      });
    },
    // END View all events from the API


    // START General AJAX function
    queryAPI: function(method, resource, parameters, success, error) {
      return $.ajax({
        url: this.base_url + resource
        method: method,
        data: parameters || {},
        dataType: "json",
        success: function(json, textStatus, jqXHR) {
          if(typeof success === "function" && json.status === "OK") {
            success(json);
          } else if(typeof error === "function") {
            error(json.message);
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {
          if(typeof error === "function") {
            error(textStatus);
          }
        }

      });
    }
    // END General AJAX function

  };


})(jQuery);