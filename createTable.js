function createTable()
{
	var problemList = fetchData("ProblemList");
	var teamList = fetchData("TeamList");
	document.write("<tr id='header'>");
	document.write("<td>");
	document.write("</td>");
	for (var i = 0; i < problemList.length; ++i)
	{
		document.write("<td id='problem-" + i + "'>");
		document.write("</td>");
	}
	document.write("</tr>");
	for (var i = 0; i < teamList.length; ++i)
	{
		document.write("<tr id='team-" + i + "'>");
		document.write("<td id='team-" + i + "-name'>");
		document.write("</td>");
		for (var j = 0; j < problemList.length; ++j)
		{
			document.write("<td id='team-" + i + "-problem-" + j + "'>");
			document.write("</td>");
		}
		document.write("</tr>");
	}
}

createTable();