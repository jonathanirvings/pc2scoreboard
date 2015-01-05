function Updater(contest) {
  this.contest = contest;
}

Updater.prototype.startRefresh = function() {
  setTimeout(function() {
    console.log("TEST");
    var runListUrl = apiLocation + runListLocation;
    var problemListUrl = apiLocation + problemListLocation;
    var teamListUrl = apiLocation + teamListLocation;
    console.log(runListUrl);

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
        this.contest.update(runs, problems, teams);
      }
    )
  }, 0);
}
