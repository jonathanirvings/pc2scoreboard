function UIController(contest) {
  this.contest = contest;
  this.tableController = new TableController(contest);
}

UIController.prototype.update = function() {
  for (var i = 0; i < this.contest.problems.length; ++i) {
    this.tableController.addProblem(this.contest.problems[i]);
  }
  for (var i = 0; i < this.contest.teams.length; ++i) {
    this.tableController.addTeam(this.contest.teams[i]);
  }
  for (var i = 0; i < this.contest.teams.length; ++i) {
    this.tableController.updateTeamPenalty(this.contest.teams[i]);
    this.tableController.updateTeamPosition(this.contest.teams[i]);
  }
}

