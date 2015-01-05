function Contest() {
  this.teams = [];
  this.problems = [];
  this.submissions = [];
}

Contest.prototype.update = function(jsonSubmissions) {
}

Contest.prototype.getTeam = function(teamID) {
  for (var i = 0; i < this.teams.length; ++i) {
    if (this.teams[i].teamID == teamID) {
      return this.teams[i];
    }
  }
  return null;
}

Contest.prototype.getRank = function(teamID) {
  team = this.getTeam(teamID);
  var rank = 1;
  for (var i = 0; i < this.teams.length; ++i) {
    if (this.teams[i].getNumberSolved() > team.getNumberSolved()) {
      ++rank;
    } else if (this.teams[i].getNumberSolved() == team.getNumberSolved() && 
               this.teams[i].getPenalty() < team.getPenalty()) {
      ++rank;
    } else if (this.teams[i].getNumberSolved() == team.getNumberSolved() && 
               this.teams[i].getPenalty() == team.getPenalty() &&
               this.teams[i].getLastSolved() < team.getLastSolved()) {
      ++rank;
    }
  }
  return rank;
}


