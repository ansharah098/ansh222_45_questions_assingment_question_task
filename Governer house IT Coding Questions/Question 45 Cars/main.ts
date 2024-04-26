//QuestionL:45,
//Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. 
//Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. 
//Print the Object that’s returned to make sure all the information was stored correctly.

function store_car(manufacture:string, modelname:string, ...extraOption:{ [key:string]:any}[]):object{
    const car_Info={
        manufacture,
        modelname,
        ...Object.assign({}, ...extraOption)
    }
    return car_Info;
    };
     let result=store_car(`Honda`,`civic`, {colour:`black`},{features:[`250 speed`,`power window`]})
     console.log(result);
    