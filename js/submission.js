function Submission(team, problem, time, verdict) {
  this.team = team;
  this.problem = problem;
  this.time = time; 
  this.verdict = "";

  team.addSubmission(this);
  problem.addSubmission(this);
}
