const map=(list,convertFunction)=>
{
    var resultList=[];
    var startIndex=0;
    var lastIndex=list.length-1;
    return convertList(startIndex,lastIndex,list,resultList,convertFunction);

   /*         //USING DIRECTLY JS LIBRARY FUNCTIONS
   if(convertFunction==Cube)        var result=list.map(cube);
   else if(convertFunctio==Identity) var result=list.map(identity);
    return result;
    */

}

const convertList=(index,lastIndex,list,resultList,convertFunction)=>       //one by one perform said function on each element of list
{
    if(index>lastIndex)
        return resultList;

    resultList.push(convertFunction(list[index]));
    return convertList(index+1,lastIndex,list,resultList,convertFunction);
}

const cube=(element)=>          //to calculate cube 
{
    return(element*element*element);
}

const identity=(element)=>
{
    return element;
}

module.exports.Map=map;
module.exports.Cube=cube;
module.exports.Identity=identity;