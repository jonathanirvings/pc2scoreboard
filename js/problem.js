function Problem {
  this.problemName = "";
  this.submissions = [];
}

Problem.prototype.addSubmission = function(submission) {
  this.submissions.push(submission);
}

Problem.prototype.getFirstSolve = function() {
  return null;
}

Problem.prototype.getNumberAttempts = function() {
  return 0;
}

Problem.prototype.getNumberAccepted = function() {
  return 0;
}
