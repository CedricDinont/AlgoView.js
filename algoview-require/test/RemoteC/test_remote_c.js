function compile() {
	$.ajax({
		url: "/node/remote_c/compile",
		type: 'POST',
		data: {
			sources: [{
				name: 'program.c',
				text: "#include <stdio.h>\n\
#include <stdlib.h>\n\
#include <string.h>\n\
\n\
int main() {\n\
	int i;\n\
\n\
	i = 42;\n\
	printf(\"Hello, world!%d\\n\", i);\n\
	++i;\n\
\n\
	return 0;\n\
}\n\
"
			}],
			currentSourceNumber: 0
		}
	}).done(function(data) {
		console.log("Done compiling", data);
		$("#output").html(JSON.stringify(data));
	});
	
}

function startProgram() {
	$.ajax({
		url: "/node/remote_c/startProgram",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#output").html(JSON.stringify(data));
	});
}

function startGdb() {
	$.ajax({
		url: "/node/remote_c/startGdb",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#output").html(JSON.stringify(data));
	});
}

function stop() {
	$.ajax({
		url: "/node/remote_c/stop",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#output").html(JSON.stringify(data));
	});
}

function setBreakpoint(line) {
	$.ajax({
		url: "/node/remote_c/setBreakpoint",
		type: 'POST',
		data: {
			line: line
		}
	}).done(function(data) {
		console.log("Done", data);
	}).error(function(data) {
		console.log("Eror", data);
	});
}

function stepIn() {
	$.ajax({
		url: "/node/remote_c/stepIn",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#memory").html(JSON.stringify(data));
	}).error(function(data) {
		console.log("Eror", data);
	});
}

function stepOut() {
	$.ajax({
		url: "/node/remote_c/stepOut",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#memory").html(JSON.stringify(data));
	}).error(function(data) {
		console.log("Eror", data);
	});
}

function stepOver() {
	$.ajax({
		url: "/node/remote_c/stepOver",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#memory").html(JSON.stringify(data));
	}).error(function(data) {
		console.log("Eror", data);
	});
}

function continueToNextBreakpoint() {
	$.ajax({
		url: "/node/remote_c/continueToNextBreakpoint",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#memory").html(JSON.stringify(data));
	}).error(function(data) {
		console.log("Eror", data);
	});
}

function updateMemoryView() {
	$.ajax({
		url: "/node/remote_c/getMemory",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#memory").html(JSON.stringify(data));
	}).error(function(data) {
		console.log("Eror", data);
	});
}

function getProgramOutput() {
	$.ajax({
		url: "/node/remote_c/getProgramOutput",
		type: 'GET',
	}).done(function(data) {
		console.log("Done", data);
		$("#programStdout").html(JSON.stringify(data));
	}).error(function(data) {
		console.log("Eror", data);
	});
}
