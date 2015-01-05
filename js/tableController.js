function TableController(contest) {
  this.contest = contest;
  this.tableRef = document.getElementById('scoreboardtable');
}

TableController.prototype.addTeam = function(team) {
  var rowRef = document.getElementById("team-" + team.teamID);
  if (rowRef == null) {
    var newRow = this.tableRef.insertRow(1);
    newRow.setAttribute("id","team-" + team.teamID);

    var rank = newRow.insertCell(0);
    rank.setAttribute("class", "rank");
    rank.innerHTML = this.contest.getRank(team.teamID);

    var teamID = newRow.insertCell(1);
    teamID.setAttribute("class", "team_name");
    teamID.innerHTML = team.teamID;

    var solved = newRow.insertCell(2);
    solved.setAttribute("class", "num_solved");
    solved.innerHTML = team.getNumberSolved();

    var penalty = newRow.insertCell(3);
    penalty.setAttribute("class", "penalty");
    penalty.innerHTML = team.getPenalty();

    for (var i = 0; i < this.contest.problems.length; ++i) {
      var problem = this.contest.problems[i];
      var newCell = newRow.insertCell(i + 4);
      newCell.setAttribute("id", "team-" + team.teamID + "-problem-" + problem.problemName);
      newCell.setAttribute("class", "problem-" + problem.problemName);
      newCell.innerHTML = team.getPenaltyForProblem(problem) + "<br />" + team.getAttemptForProblem(problem);
    }
    
    return newRow;

  } else {
    return rowRef;
  }
}

TableController.prototype.addProblem = function(problem) {
  var colRef = document.getElementById("problem-" + problem.problemName);
  if (colRef == null) {
    var headerRow = document.getElementById('tableheader');
    var newCell = document.createElement('th');
    newCell.setAttribute("id","problem-" + problem.problemName);
    newCell.innerHTML = problem.problemName;
    headerRow.appendChild(newCell);
  }
}

TableController.prototype.updateTeamPosition = function(team) {
  var rowRef = document.getElementById("team-" + team.teamID);
  if (rowRef == null) {
    rowRef = this.addTeam(team);
  }
  
  var index = rowRef.rowIndex;
  this.tableRef.deleteRow(index);

  var newIndex = this.contest.getRank(team.teamID);
  rowRef.getElementsByClassName("rank")[0].innerHTML = newIndex;

  newRow = this.tableRef.insertRow(newIndex);
  newRow.innerHTML = rowRef.innerHTML;
  newRow.setAttribute("id",rowRef.getAttribute("id"));
}

TableController.prototype.updateTeamPenalty = function(team) {
  var rowRef = document.getElementById("team-" + team.teamID);
  if (rowRef == null) {
    rowRef = this.addTeam(team);
  }

  rowRef.getElementsByClassName("num_solved")[0].innerHTML = team.getNumberSolved();
  rowRef.getElementsByClassName("penalty")[0].innerHTML = team.getPenalty();
  for (var i = 0; i < this.contest.problems.length; ++i) {
    var problem = this.contest.problems[i];
    rowRef.getElementsByClassName("problem-" + problem.problemName)[0].innerHTML = 
        team.getPenaltyForProblem(problem) + "<br />" + team.getAttemptForProblem(problem);
  }

}





