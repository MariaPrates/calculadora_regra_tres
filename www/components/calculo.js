// This is a JavaScript file
        
	function calc(){
        var b = document.getElementById('b').value;
        var d = document.getElementById('d').value;
        var a = document.getElementById('a').value;
        var c = document.getElementById('c').value;
        var e = document.getElementById('e').value;
        var result;

        var x = b*d;
        var z = a*c;
        var y = (z*e)/x;
        alert(y);
}