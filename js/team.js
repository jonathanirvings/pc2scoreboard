function Team() {
  this.teamID = "";
  this.submissions = [];
}

Team.prototype.getPenalty = function() {
  var totalPenalty = 0;
  var penalty = {};
  var isSolved = {};
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if ((!submission.problem in penalty) || (!submission.problem in isSolved)) {
      penalty[submission.problem] = 0;
      isSolved[submission.problem] = false;
    }
    if (isSolved[submission.problem]) {
      continue;
    }
    if (submission.verdict == noSubmission) {
      penalty[submission.problem] += noSubmissionPenalty;
    } else if (submission.verdict == yesSubmission) {
      totalPenalty += penalty[submission.problem] + submission.time;
      isSolved[submission.problem] = true;
    }
  }
  return totalPenalty;
}

Team.prototype.getNumberSolved = function() {
  var totalSolved = 0;
  var isSolved = {};
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if (!submission.problem in isSolved) {
      isSolved[submission.problem] = false;
    }
    if (isSolved[submission.problem]) {
      continue;
    }
    if (submission.verdict == yesSubmission) {
      ++totalSolved;
      isSolved[submission.problem] = true;
    }
  }
  return totalSolved;
}

Team.prototype.addSubmission = function(submission) {
  this.submissions.push(submission);
}


