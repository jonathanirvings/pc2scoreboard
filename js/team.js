function Team(teamID) {
  this.teamID = teamID;
  this.submissions = [];
}

Team.prototype.getPenalty = function() {
  var totalPenalty = 0;
  var penalty = {};
  var isSolved = {};
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if ((!(submission.problem.problemName in penalty)) || (!(submission.problem.problemName in isSolved))) {
      penalty[submission.problem.problemName] = 0;
      isSolved[submission.problem.problemName] = false;
    }
    if (isSolved[submission.problem.problemName]) {
      continue;
    }
    if (submission.verdict == noSubmission) {
      penalty[submission.problem.problemName] += noSubmissionPenalty;
    } else if (submission.verdict == yesSubmission) {
      totalPenalty += (penalty[submission.problem.problemName] + submission.time);
      isSolved[submission.problem.problemName] = true;
    }
  }
  return totalPenalty;
}

Team.prototype.getTimeForProblem = function(problem) {
  var penalty = 0;
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if (submission.problem.problemName == problem.problemName) {
      if (submission.verdict == yesSubmission) {
        return penalty + submission.time;
      }
    }
  }
  return penalty;
}

Team.prototype.getAttemptForProblem = function(problem) {
  var attempt = 0;
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if (submission.problem.problemName == problem.problemName) {
      ++attempt;
      if (submission.verdict == yesSubmission) {
        return attempt;
      }
    }
  }
  return attempt;
}

Team.prototype.getNumberSolved = function() {
  var totalSolved = 0;
  var isSolved = {};
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if (!(submission.problem.problemName in isSolved)) {
      isSolved[submission.problem.problemName] = false;
    }
    if (isSolved[submission.problem.problemName]) {
      continue;
    }
    if (submission.verdict == yesSubmission) {
      ++totalSolved;
      isSolved[submission.problem.problemName] = true;
    }
  }
  return totalSolved;
}

Team.prototype.getLastSolved = function() {
  var isSolved = {};
  var lastSolved = 0;
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if (!(submission.problem.problemName in isSolved)) {
      isSolved[submission.problem.problemName] = false;
    }
    if (isSolved[submission.problem.problemName]) {
      continue;
    }
    if (submission.verdict == yesSubmission) {
      lastSolved = submission.time;
      isSolved[submission.problem.problemName] = true;
    }
  }
  return lastSolved;
}

Team.prototype.addSubmission = function(submission) {
  this.submissions.push(submission);
}

Team.prototype.problemStatus = function(problem) {
  var submission;
  var lastSubmission = null;
  for (var i = 0; i < this.submissions.length; ++i) {
    submission = this.submissions[i];
    if (submission.problem.problemName == problem.problemName) {
      if (submission.verdict == yesSubmission) {
        return yesSubmission;
      }
      lastSubmission = this.submissions[i];
    }
  }
  if (lastSubmission == null) {
    return blankSubmission;
  } else if (lastSubmission.verdict == noSubmission) {
    return noSubmission;
  } else {
    return pendingSubmission;
  }
}


