let options = {
	width:  400,
	height: 500,
};

let с;
if (options.с !== undefined) {
	с = options.color;
} else {
	с = 'black';
}

let {color:c = "black", width, height} = options;

console.log(c, width, height);