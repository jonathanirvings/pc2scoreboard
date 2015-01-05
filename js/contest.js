function Contest() {
  this.teams = [];
  this.problems = [];
  this.submissions = [];
}

Contest.prototype.update = function(runs, problems, teams) {
  this.teams = [];
  this.problems = [];
  this.submissions = [];

  for (var i = 0; i < problems.length; i++) {
    var problem = problems[i];
    newProblem = new Problem(problem.problemName);
    this.problems.push(newProblem);
  }

  for (var i = 0; i < teams.length; i++) {
    var team = teams[i];
    newTeam = new Team(team.teamName);
    this.teams.push(newTeam);
  }

  for (var i = 0; i < runs.length; i++) {
    var run = runs[i];
    var team = this.getTeam(run.teamName);
    var problem = this.getProblem(run.problemName);
    submission = new Submission(team, problem, run.time, run.judgement);
    this.submissions.push(submission);
  }
}

Contest.prototype.getProblem = function(problemName) {
  for (var i = 0; i < this.problems.length; i++) {
    var problem = this.problems[i];
    if (problem.problemName == problemName) {
      return problem;
    }
  }
  return "HAHA";
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


