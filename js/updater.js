function Updater(contest) {
  this.contest = contest;
}

Updater.prototype.startRefresh = function() {
  setInterval(function() {
    var runListUrl = apiLocation + runListLocation;
    var problemListUrl = apiLocation + problemListLocation;
    var teamListUrl = apiLocation + teamListLocation;

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
    );
    
    this.contest.update(runs, problems, teams);
  });
}
