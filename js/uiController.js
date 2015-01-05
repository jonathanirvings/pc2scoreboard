function UIController(contest) {
  this.contest = contest;
  this.tableController = new tableController(contest);
}

UIController.prototype.update = function() {
  for (var i = 0; i < this.contest.teams.length; ++i) {
    this.tableController.addTeam(this.contest.teams[i]);
  }
  for (var i = 0; i < this.contest.problems.length; ++i) {
    this.tableController.addProblem(this.contest.problem[i]);
  }
}

