function Contest() {
  this.teams = [];
  this.problems = [];
  this.submissions = [];
}

Contest.prototype.update = function(jsonSubmissions) {
}

Contest.prototype.getRank = function(teamID) {
  return 0;
}

Contest.prototype.getTeam = function(teamID) {
  return null;
}
