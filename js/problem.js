function Problem(name) {
  this.problemName = name;
  this.submissions = [];
}

Problem.prototype.addSubmission = function(submission) {
  this.submissions.push(submission);
}

Problem.prototype.getFirstSolve = function() {
  for (var i = 0; i < this.submissions.length; ++i) {
    if (this.submissions[i].verdict == yesSubmission) {
      return this.submissions[i].team;
    }
  }
  return null;
}

Problem.prototype.getNumberAttempts = function() {
  return this.submissions.length;
}

Problem.prototype.getNumberAccepted = function() {
  var numberOfAccepted = 0;
  var solvedBy = {};
  for (var i = 0; i < this.submissions.length; ++i) {
    var submission = this.submissions[i];
    if (!(submission.team.teamID in solvedBy)) {
      solvedBy[submission.team.teamID] = false;
    }
    if (solvedBy[submission.team.teamID]) {
      continue;
    }
    if (submission.verdict == yesSubmission) {
      ++numberOfAccepted;
      solvedBy[submission.team.teamID] = true;
    }
  }
  return numberOfAccepted;
}
