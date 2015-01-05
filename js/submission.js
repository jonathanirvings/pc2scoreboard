function Submission(team, problem, time, verdict) {
  this.team = team;
  this.problem = problem;
  this.time = time; 
  if (verdict == yesSubmission) {
    this.verdict = yesSubmission;
  } else if (verdict.substring(0,2) == noSubmission) {
    this.verdict = noSubmission;
  } else {
    this.verdict = pendingSubmission;
  }

  team.addSubmission(this);
  problem.addSubmission(this);
}
