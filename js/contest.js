function Contest() {
  this.teams = [];
  this.problems = [];
  this.submissions = [];
}

Contest.prototype.update = function(runs, problems, teams) {
  this.teams = [];
  this.problems = [];
  this.submissions = [];

  for (var problem in problems) {
    newProblem = new Problem(problem.problemName);
    this.problems.push(newProblem);
  }

  for (var team in teams) {
    newTeam = new Team(team.teamName);
    this.teams.push(newTeam);
  }

  for (var run in runs) {
    var team = this.getTeam(run.teamName);
    var problem = this.getProblem(run.problemName);
    
    submission = new Submission(team, problem, run.time, run.judgement);
    this.submissions.push(submission);
  }
}

Contest.prototype.getProblem = function(problemName) {
  for (var problem in this.problems) {
    if (problem.problemName == problemName) {
      return problem;
    }
  }
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


