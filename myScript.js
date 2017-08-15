var records = [[,"3-6-2017",104,138,90," ",36,84," "," "," "," "," "," "," ",], //concern data	
        [,"4-6-2017",162,139,84,64,36.6,83.6," "," "," "," "," "," "," ",],
        [,"5-6-2017",146,150,100,60,35.9,85.6," "," "," "," "," "," "," ",],
        [,"6-6-2017",128,126,93,84,36,85," "," "," "," "," "," "," ",],
        [,"7-6-2017",140,134,86,90,36,85.4," "," "," "," "," "," "," ",],
        [,"7-6-2017",172," "," "," "," "," ",2,5,136,157.7,170,0,5,],
        [,"8-6-2017",151,136,96,83,36.1,85.9," ",3,149.6,172,187,0,3,4],
        [,"9-6-2017",158,140,97,82,36.3,86," ",3,147.4,169.5,184.3,0,3,3],
        [,"12-6-2017",136,128,87,103,36,87.5," ",2,149.8,172.3,187.3,0,2,2],
        [,"13-6-2017",133,133,85,90,36.3,87.9," ",2,151.4,174.1,189.3,0,2,2],
        [,"14-6-2017",117,136,87,90,36.7,87.5," ",2,150,172.5,187.5,0,2,2],
        [,"15-6-2017",147,139,94,79,36.7,88," ",3,139,159.9,173.8,0,3,3],
        [,"16-6-2017",156,122,76,108,36.8,89," ",3,138.2,158.9,172.8,0,3,3],
        [,"17-6-2017",121,149,95,84,36.9,89," ",2,137.8,158.5,172.3,0,2,2],
        [,"18-6-2017",79,133,91,93,36.7,89," ",2,134.8,155,168.5,0,2,2],
        [,"19-6-2017",101,136,101,83,36.9,90," ",2,124,154.1,169.2,0,2,2],
        [,"20-6-2017",77,141,97,84,36.5,90," ",2,120.8,152.7,168.6,0,2,2],
        [,"21-6-2017",131,138,99,92,37,90," ",3,106.8,139.7,156.1,0,3,3],
        [,"22-6-2017",114,148,95," ",36.7,89," ",3,101.8,126.9,139.2,0,3,3],
        [,"24-6-2017",126," "," "," ",36.7,89," ",3,109.2,130.4,141,0,3,3],
        [,"25-6-2017",116,136,95,100,37,90," ",3,114.2,135.9,146.7,0,3,3],
        [,"26-6-2017",108,138,98,106,36.7,87.7," ",2,122,140.3,152.5,0,2,2],
        [,"29-6-2017",79," "," "," "," "," "," ",2,117.4,135,146.8,0,2,2],
        [,"2-7-2017",128,140,102,92,36.9,88.3," ",4,108.6,126.4,135.8,0,2,2],
        [,"2-7-2017",106," "," "," "," "," ",2,2,108.6,126.4,135.8,0,2,],
        [,"6-7-2017",107,139,90,83,36.5,89," ",2,107.4,125.5,134.5,0,2,2],
        [,"8-7-2017",120,132,94,92,36.9,90.5," ",3,105.6,123,132,0,3,3],
        [,"12-7-2017",134,135,86,100,36.6,90.3," ",4,108,126.6,136,0,2,2],
        [,"12-7-2017",115," "," "," "," "," ",2,2,108,126.6,136,0,2,],
        [,"16-7-2017",92,133,82,93,36.7,92," ",2,116.4,133.9,145.5,0,2,2],
        [,"22-7-2017",116,120,80,95,36.9,93," ",3,113.6,130.6,142,0,3,3],
        [,"24-7-2017",95,131,93,81,36.6,92.5," ",2,115.4,132.7,144.3,0,2,2],
        [,"26-7-2017",90,141,93,78,36.9,91," ",2,110.4,127.6,138,0,2,2],
        [,"28-7-2017",112,137,95,89,36.8,92," ",3,101.6,116.8,127,0,3,3],
        [,"30-7-2017",95,140,93,72,36.6,93," ",2,101,116.2,126.3,0,2,2],
        [,"1-8-2017",68,137,89,87,36.2,93," ",2,101.6,116.8,127,0,2,2],
        [,"3-8-2017",103,144,100,70,36.5,93," ",3,92,107.8,115.7,0,3,3],
        [,"5-8-2017",139,140,101,83,36.4,93.3," ",5,93.6,110.2,118.4,0,5,5],
        [,"5-8-2017",116,140,97,85,36.4,93.3,2,4,93.6,110.2,118.4,0,5,],
		[,"6-8-2017"," "," "," "," "," "," "," "," ", 105.8, 134.8, 149.2]];

var recordsL = records.length - 1;
var startIndex, endIndex;		
var startDate, endDate;
var msName = 'crea';//measurement name, default: crea
	
$(document).ready(function() {	
    initialization();
		
	$(window).resize(function(){
	  	showChart();
	});
	
	/*$(".dsBtn").click(function(){
		$(".dsBtn").removeClass("active");
		$(this).addClass("active");
		$(this).blur();
		
		switch($(this).attr("id")){
			case "ds3Btn":
			case "ds2Btn":
			case "ds1Btn":
			default:
		}
	});*/

	$("#dateForm").submit(function(){
		startDate = new Date($("#startDate").val());
	    endDate = new Date($("#endDate").val());
		changeDate();		
		
		$("#changeDate").blur();
		$("#startDate").blur();
		$("#endDate").blur();
		return false;
	});
	
	$(".showM").click(function(){//show chart of different measurements
		$(this).parent().children(".active").removeClass("active");
		$(this).addClass("active");
		msName = $(this).attr("id");
		showChart();
	});
	
	$("#openMsg").click(function(){
		$(".popup").css("display", "block");
		$("#lights").css("display", "none");
		$("#lights").removeClass("col-sm-2");
		$("#chartWrapper").removeClass("col-sm-10").addClass("col-sm-12");
		showChart();
	});
	
	$(".closeMsg").click(function(){
		$(".popup").css("display", "none");
		$("#lights").css("display", "block");
		$("#lights").addClass("col-sm-2");
		$("#chartWrapper").removeClass("col-sm-12").addClass("col-sm-10");
		showChart();
	});
	
	$(".openCol").click(function(){
		var sideColMsgW;
		var sideColH = Math.min($("#report").height(), $("window").height());
		
		$("#report").removeClass("col-md-10").addClass("col-md-7");
		$(".sideCol").css("display", "block");
		$(".sideCol").addClass("col-md-3");
		
		sideColMsgW = $(".sideCol").width() - 30;
		$(".sideCol").height(sideColH);
		$(".sideCol").children(".msg").css("max-height", sideColH);		
		$(".sideCol").children(".msg").width(sideColMsgW);
		if($(window).width() >= 992){
			$(".popup").css("left", "30%");
		}
		$(".openCol").blur();
		showChart();
	});
	
    $(".closeCol").click(function() {
		$("#report").removeClass("col-md-7").addClass("col-md-10");
		$(".sideCol").css("display", "none");
		$(".sideCol").removeClass("col-md-3");
		$(".popup").css("left", "50%");
		showChart();
    });
	
	$("#gToFLearnMore").click(function(){
		$("#gLMtxt").css("display", "none");
		$("#fInfo").css("display", "block");
	});
	
	$("#backToGLearnMore").click(function(){
		$("#gLMtxt").css("display", "block");
		$("#fInfo").css("display", "none");
	});
	
	// Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul.toDo');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
		else if(ev.target.tagName === 'B') {
			ev.target.parentElement.classList.toggle('checked');
		}
    }, false);

});

function initialization() {
	records.forEach(formDate);
	startDate = new Date("2017-07-29");
    endDate = new Date("2017-08-05");
	
	$("#startDate").val("2017-07-29");
	$("#endDate").val("2017-08-05");
	
	startIndex = findStart(startDate);
	endIndex = findEnd(endDate);
	
	showTable();
	
	google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(drawCreaChart);
}

function formDate(record) {
	var shortDate = record[1];
	var slashP = shortDate.indexOf("-"); //index of first -
	var day = shortDate.slice(0, slashP);
	var month = shortDate.slice(slashP + 1, -5);
	var monthDF = month -1; //date format month = month -1
	var year = shortDate.slice(-4);
	record[0] = new Date(year, monthDF, day);
	record[1] = year + "-" + month + "-" + day;
}

function findStart(startDate) {
	for(var i = 0; i < recordsL; i++) {
	    if(records[i][0] >= startDate) {
			return i;
		}
	}
    return undefined;
}

function findEnd(endDate) {
	var i;
	for(i = recordsL - 1; i >= 0; i--) {
		if(records[i][0] <= endDate) {
			return i;
		}
	}
	return undefined;
}

function changeDate() {
        if(startDate > endDate) {
			alert('Please fill the end date later than the start date.');
			startDate = new Date("2017-07-29");
            endDate = new Date("2017-08-05");
		}		
		else {
	        startIndex = findStart(startDate);
	        endIndex = findEnd(endDate);
            if(startIndex === undefined) {
				alert('There is no data after 2017-08-05. Please fill in an ealier start date.')
			}			
			else if(endIndex === undefined){
				alert('There is no data before 3-6-2017. Please fill in an later end date.')
			}	
			else if(endIndex < startIndex){
				alert('Theis is no data in your selected period. Please extend it.')
			}
			else{
		        showTable();
			    showChart();		    
			}
		}
	}
	
function showTable() {	
    var i;
	var dateHTML = "<th class=\"headcol\">Date</th>"; 
	var bpHTML = "<td class=\"headcol\">Blood pressure (mmHg)</td>"; 
	var pulseHTML = "<td class=\"headcol\">Pulse (/min)</td>"; 
	var tempHTML = "<td class=\"headcol\">Temperature(&#176;C)</td>"; 
	var weightHTML = "<td class=\"headcol\">Weight (kg)</td>"; 
	var creaHTML = "<td class=\"headcol\">Creatinine (&#956;mol/L)</td>";		
	
	for(i = startIndex; i <= endIndex; i++) {
		dateHTML += "<th>" + records[i][1] + "</th>";
		bpHTML += "<td>" + records[i][3] + " " + records[i][4] + "</td>";
		pulseHTML += "<td>" + records[i][5] + "</td>";
		tempHTML += "<td>" + records[i][6] + "</td>";
		weightHTML += "<td>" + records[i][7] + "</td>";
		creaHTML += "<td>" + records[i][2] + "</td>";
	}
	$("#date").empty().append(dateHTML);
	$("#bp").empty().append(bpHTML);
	$("#pulse").empty().append(pulseHTML);
	$("#temperature").empty().append(tempHTML);
	$("#weight").empty().append(weightHTML);
	$("#crea").empty().append(creaHTML);
}

function showChart() {
	switch (msName){
		case 'bp': google.charts.setOnLoadCallback(drawBPChart); break;
		case 'pulse':
            google.charts.setOnLoadCallback(function() {
                drawGeneralChart(5);
			});
			break;

		case 'temperature':
 		    google.charts.setOnLoadCallback(function() {
				drawGeneralChart(6);
            });
            break;

		case 'weight':
     		google.charts.setOnLoadCallback(function() {
				drawGeneralChart(7);
			});
			break;
			
		case 'crea':
		default:
    		if(records[endIndex][9] != " ") {//the crea datum has a color
    			google.charts.setOnLoadCallback(drawCreaChart);
			}
			else {
				google.charts.setOnLoadCallback(function() {
                    drawGeneralChart(2);
                });
			}
	}
}
function drawCreaChart(){
	var creaData = []; 
	var chartEndIndex; 
	var chartEndDate;
	var i, j, k, minCrea = 500, maxCrea = 0, crea;
	creaData[0] = [];
	creaData[0] = ['date', 'concern zone', 'mild concern zone', 'reasonably safe zone', 'safe zone', 'creatinine', 'zone'];
		
	for(i = startIndex, j = 1; i <= endIndex; i++) {
		crea = records[i][2];
		if(crea !== " ") {
			creaData[j] = [];
			creaData[j] = [records[i][0], ,records[i][12], records[i][11], records[i][10], crea];
			for(k = 2; k < 6; k++) {
				if(creaData[j][k] === " "){
					creaData[j][k] = undefined;
				}
			}
			switch(records[i][9]) {
				case 2: creaData[j][6] = "fill-color: rgb(129,190,96)"; break;//green
				case 3: creaData[j][6] = "fill-color: lightgreen"; break;
				case 4: creaData[j][6] = "fill-color: orange"; break;
				case 5: creaData[j][6] = "fill-color: red"; break;
				default: creaData[j][6] = undefined;
			}
			if(minCrea > crea || minCrea > records[i][10]) {
				minCrea = Math.min(crea, records[i][10]);
			}
			if(maxCrea < crea || maxCrea < records[i][12]) {
				maxCrea = Math.max(crea, records[i][12]);
			}	
			j++;
		}
	}
	
	chartEndIndex = j;
	//show the threshold of the next day
	chartEndDate = records[i][0];
	chartEndDate.setDate(creaData[chartEndIndex-1][0].getDate() + 1); 
	creaData[chartEndIndex] = [chartEndDate, ,records[i][12], records[i][11], records[i][10], undefined, undefined];
	if(maxCrea < records[i][12]) {
		maxCrea = records[i][12];
	}
	
	var yMin = Math.floor(minCrea / 25) * 25;
	var yMax = Math.ceil(maxCrea / 25) * 25;
	var yDis = yMax - yMin;	
	var yTick = [];
	var yTicDis;
	if(yDis <= 100) {
	    yTickDis = yDis / 25;
		for(i = 0; i <= yTickDis; i++) {
	        yTick[i] = yMin + i * 25;
		}
	}
	else {
		var yMin = Math.floor(minCrea / 50) * 50;
	    var yMax = Math.ceil(maxCrea / 50) * 50;
	    var yDis = yMax - yMin;	
		yTickDis = yDis / 50;
		for(i = 0; i <= yTickDis; i++) {
	        yTick[i] = yMin + i * 50;
		}
	}
	
	for(j = 1; j <= chartEndIndex; j++) {
		if(creaData[j][2] != undefined) {
			creaData[j][1] = yMax;
		}
		else {
			creaData[j][1] = yMin;
			creaData[j][2] = yMin;
			creaData[j][3] = yMin;
			creaData[j][4] = yMin;
		}
	}	
	
	var data = google.visualization.arrayToDataTable(creaData);
	data.setColumnProperty(6, 'role', 'style');
	var options = {
        seriesType: 'area',
        series: {
			//1: {enableInteractivity: false, tooltip: 'none'},
			4: {
				type: 'line',
				pointSize: 10,
				pointShape: 'square'
			}
		},
		colors: ['#FFE4E4', '#ffeccb', '#E4FFE4', '#cbffcb', '#888'],
		areaOpacity: 1,
		legend: {position: 'top'},
		chartArea: {
            backgroundColor: {
                stroke: '#ccc',
                strokeWidth: 1
            }
        },
		hAxis: {gridlines: {color: 'transparent'}},
		vAxis: {
			gridlines: {color: 'transparent'},
			ticks: yTick
		}
    };

	var gChart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    gChart.draw(data, options);
}

function drawBPChart(){
	var bpData = [];
	var i, j;
	bpData[0] = [];
	bpData[0] = ['date', 'systolic blood pressure', 'diastolic blood pressure'];
		
	for(i = startIndex, j = 1; i <= endIndex; i++) {
		bpHi = records[i][3];
		bpLo = records[i][4];
		if(bpHi !== " " || bpLo !== " ") {
			if(bpHi === " ") {
				bpHi = undefined;
			}
			else if(bpLo === " "){
				bpLo = undefined;
			}
			bpData[j] = [];
			bpData[j] = [records[i][0], bpHi, bpLo];
			j++;
		}
	}
	var data = google.visualization.arrayToDataTable(bpData);
	var options = {
		pointSize: 5,
		colors: ['#888', '#888'],
		legend: 'none',
		chartArea: {
            backgroundColor: {
                stroke: '#ccc',
                strokeWidth: 1
            }
        },
		hAxis: {gridlines: {color: 'transparent'}},
		vAxis: {gridlines: {color: 'transparent'}}
    };

	var gChart = new google.visualization.LineChart(document.getElementById('chart_div'));
    gChart.draw(data, options);
}

function drawGeneralChart(msIndex){
	var msData = [];
	var i, j;
	msData[0] = [];
	if(msIndex === 2) {//show creatinine chart
	    msData[0] = ['date', 'creatinine'];
	}
	else {
	    msData[0] = ['date', msName];
	}
		
	for(i = startIndex, j = 1; i <= endIndex; i++) {
		ms = records[i][msIndex];
		if(ms !== " ") {
			msData[j] = [];
			msData[j] = [records[i][0], ms];
			j++;
		}
	}
	var data = google.visualization.arrayToDataTable(msData);
	var options = {
		pointSize: 5,
		colors: ['#888'],
		legend: 'none',
		chartArea: {
            backgroundColor: {
                stroke: '#ccc',
                strokeWidth: 1
            }
        },
		hAxis: {gridlines: {color: 'transparent'}},
		vAxis: {gridlines: {color: 'transparent'}}
    };

	var gChart = new google.visualization.LineChart(document.getElementById('chart_div'));
    gChart.draw(data, options);
}
