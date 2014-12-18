function evaluate()
{
	var runList = fetchData(runListLocation);
	for (var i = 0; i < runList.length; ++i)
	{
		var teamIndex = runList[i]["teamName"].slice(4,runList[i]["teamName"].length);
		var problemIndex = 0;
		console.log(teamIndex);
		if (runList[i]["judgement"] == "Yes")
		{
			$("#team-" + i + "-problem-" + j).html("YES");
		} else
		{

		}
	}
}

evaluate();