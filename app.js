function myFunc(){
    const newColor = GenColor()
    document.getElementById("mydiv").style.backgroundColor = newColor
    document.getElementById("TextColorGen").innerHTML = newColor

}


function GenColor(){
    var myArr = []
    for(var i = 0; i < 3; i++){
        var num = Math.floor(Math.random() * 256)
        myArr.push(num)
        
    }

    var myRGB = "rgb(" + myArr[0] + "," + myArr[1] + "," + myArr[2] + ")"
    return myRGB
    
}






