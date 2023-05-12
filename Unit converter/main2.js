var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputTypeValue, resultTypeValue;

//now add listener
input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


//taking initial value
inputTypeValue = inputType.value;
resultTypeValue = inputType.value;
function myResult(){

    //result.value = input.value;
  
    inputTypeValue = inputType.value;
    resultTypeValue = resultType.value;
    //now compare the input and  resultType value and formula



    if(inputTypeValue ==="feet" && resultTypeValue==="meter"){

        // this is feet to meter formula
        result.value = Number(input.value) * 0.304;
    }else if(inputTypeValue === "feet" && resultTypeValue === "centimeter"){

        //this is feet to centemeter formula
        result.value = Number(input.value)*30.48;

    }else if(inputTypeValue === "feet" && resultTypeValue === "inch"){

        //this is feet to inch formula
        result.value = Number(input.value)*12;

    }else if (inputTypeValue === "feet" && resultTypeValue === "kilometer"){
        
        // this is feet to kilometer formula
        result.value=Number(input.value)*0.000305;
    }else if(inputTypeValue === "feet" && resultTypeValue === "feet"){

        // this is feet to feet formula
        result.value=input.value
    }




    if(inputTypeValue ==="meter" && resultTypeValue==="kilometer"){

        // this is meter to kilometer formula
        result.value = Number(input.value) * 0.001;
    }else if(inputTypeValue === "meter" && resultTypeValue === "feet"){

        //this is meter to feet formula
        result.value = Number(input.value)*3.28084;

    }else if(inputTypeValue === "meter" && resultTypeValue === "inch"){

        //this is meter to inch formula
        result.value = Number(input.value)*39.3700787402;

    }else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){

        //this is meter to centemeter formula
        result.value = Number(input.value)*100;

    }else if (inputTypeValue === "meter" && resultTypeValue === "meter"){

        // this is meter to meter formula
        result.value=input.value
    }
    


    if(inputTypeValue ==="kilometer" && resultTypeValue==="meter"){

        // this is kilometer to meter formula
        result.value = Number(input.value) * 1000;
    }else if(inputTypeValue === "kilometer" && resultTypeValue === "feet"){

        //this is kilometer to feet formula
        result.value = Number(input.value)*3280.84;

    }else if(inputTypeValue === "kilometer" && resultTypeValue === "inch"){

        //this is kilometer to inch formula
        result.value = Number(input.value)*39370.1;

    }else if(inputTypeValue === "kilometer" && resultTypeValue === "centimeter"){

        //this is kilometer to centemeter formula
        result.value = Number(input.value)*100000;

    }else if (inputTypeValue === "kilometer" && resultTypeValue === "kilometer"){
        
        // this is kilometer to kilometer formula
        result.value=input.value
    }


    if(inputTypeValue ==="inch" && resultTypeValue==="meter"){

        // this is feet to meter formula
        result.value = Number(input.value) * 0.0254;
    }else if(inputTypeValue === "inch" && resultTypeValue === "centimeter"){

        //this is feet to centemeter formula
        result.value = Number(input.value)*2.54;

    }else if(inputTypeValue === "inch" && resultTypeValue === "feet"){

        //this is feet to inch formula
        result.value = Number(input.value)*0.0833333;

    }else if (inputTypeValue === "inch" && resultTypeValue === "kilometer"){
        
        // this is feet to kilometer formula
        result.value=Number(input.value)*0.0000254;
    }else if(inputTypeValue === "inch" && resultTypeValue === "inch"){

        // this is feet to feet formula
        result.value=input.value
    }


}