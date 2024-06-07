// global variables
const sampleArray=[1,2,7,3,4,5,,11,3,7,5,8,9,5]
const target=21
let tempSums=[]
let sum=0
// function that will handle sum logic and check
function checkSum(){
    for (let i=0;i<sampleArray.length;i++){
        sum=sum+sampleArray[i]//tracking current from each index
        if (sum===target){
            return true;//returns true if our target find a match 
        }
        for (let j=0;j<tempSums.length;j++){
            if(tempSums[j]===sum-target)
                return true ;//returns true when "checking if in our array of sums we have a sum that we can add to a current sum to get a target"

        }
        tempSums.push(sum)//store sums 
    }
    return false //return false immediately if we did not find a sub array
}
console.log(checkSum())