function Updater(contest) {
  this.contest = contest;
}

Updater.prototype.startRefresh = function() {
  var self = this;
  function refresh() {
    var runListUrl = apiLocation + runListLocation;
    var problemListUrl = apiLocation + problemListLocation;
    var teamListUrl = apiLocation + teamListLocation;
    var uiController = new UIController(this.contest);

    var runs, problems, teams;

    $.when(
      $.getJSON(runListUrl, function(data) {
        runs = data;
      }),

      $.getJSON(problemListUrl, function(data) {
        problems = data;
      }),

      $.getJSON(teamListUrl, function(data) {
        teams = data;
      })
    ).then(
      function() {
        self.contest.update(runs, problems, teams);
      }
    ).then(
      function() {
        uiController.update(self.contest);
      }
    )
  }

  refresh();
  setInterval(refresh, 20000);
}
