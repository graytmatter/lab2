// var i = 2;
// var k;
// var list = [];
// var prime = false;
// while(true) {
// 	while(k<i/2){

// 	}
// 	console.log(i);
// 	i++;
// }

var max = function(a, b){
	return (a>b)? a : b
};
var maxOfThree = function(a, b, c){
	return max(a, max(b, c));
};
var findLongestWord = function(array){
	for (var i in array){
		var long = 0;
		if(array[i] > long){
			long = array[i];
		}
	}
	return long
};


//control-flow-lab
i = 99;
while(i > 2){console.log(i + " bottles of beer on the wall, "
	+i+ " bottles of beer. Take one down, pass it around, "
	+(i-1)+ " bottles of beer on the wall..."); i--};
	console.log("2 bottles of beer on the wall, 2 bottles of beer. Take one down, pass it around, 1 bottle of beer on the wall...")
	console.log("1 bottle of beer on the wall, 1 bottle of beer. Take one down, pass it around, 0 bottles of beer on the wall...")

var array=["Noah", "Clio", "Michael"];
for (var i in array){
	if(i==0){
		console.log("Hello, "+array[0]+"!")
	}else{
		console.log(array[i-1] +" says Hello, " + array[i]+"!");
	}
}
for (var i in array){
		console.log("Hello, "+array[i] +"!");
}
//Functions labs
var helW = function(){console.log("Hello World");};
var helP = function(name){return("Hello " + name);};
var add = function(a, b){return(a+b);};
var sub = function(a, b){return(a-b);};
var combine = function(a, b, bool){return bool? add(a, b) : sub(a, b)};
var many = 0;
var howmany = function(){many++; return many} ;


var init = function(){
	i = 0
	var howmany1 = (){
		i++;
		return i;
	}
}

var prime = function(num){
	var i = 2;
	while(i <= (num/2)){
		if(num%i === 0){return false};
		i++;
	};
	return true;
	};

var merge = function(arr1, arr2){
	var arr3 = [];
	while(arr1.length != 0 && arr2.length != 0){
		if(arr1[0] > arr2[0])
			{arr3.push(arr2.shift());}
		else{arr3.push(arr1.shift());}
	}
	if(
		arr1.length === 0){return arr3.concat(arr2);
	}else{
		return arr3.concat(arr1);
	}
};

var letterCount = function(string){
	var hash = {};
	for (var i in string){
		if(!(string[i] in hash)){
			hash[string[i]]= 1;
		}else{
			hash[string[i]]=hash[string[i]]+1;
		}
	}
	return hash
};
