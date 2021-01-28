// FOR OVERALL VALUES

function getValue (i){
    var b = document.getElementById("result")
    b.value += i
}

// FOR = VALUE

function getnum(){
    var b = document.getElementById("result")
    var val = b.value
    var final = eval(val)
    b.value = final
}

// FOR CLEARVALUE

function clearValue (){
    var b = document.getElementById("result")
    b.value = ""
}