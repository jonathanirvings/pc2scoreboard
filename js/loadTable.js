function loadTable()
{
	var problemList = fetchData(problemListLocation);
	var teamList = fetchData(teamListLocation);
	for (var i = 0; i < problemList.length; ++i)
	{
		$("#problem-" + i).html(problemList[i]["problemName"]);
	}
	for (var i = 0; i < teamList.length; ++i)
	{
		$("#team-" + i + "-name").html(teamList[i]["teamName"]);
		for (var j = 0; j < problemList.length; ++j)
		{
			$("#team-" + i + "-problem-" + j).html(0);
		}
	}
}

loadTable();