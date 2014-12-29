function Team() {
  this.teamID = "";
  this.submissions = [];
}

Team.prototype.getPenalty = function() {
  return 0;
}

Team.prototype.getNumberSolved = function() {
  return 0;
}

Team.prototype.addSubmission = function(submission) {
  this.submissions.push(submission);
}

Team.prototype.getFirstACSubmission = function(problemName) {
  return null;
}
