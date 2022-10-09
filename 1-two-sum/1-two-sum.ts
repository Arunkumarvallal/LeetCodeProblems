function twoSum(nums: number[], target: number): number[] {
    let index:number=0;
    let secondIndex:number=0;
    let arr: number[]= new Array();
for(index=0;index<nums.length;index++){
    for(secondIndex=index+1;secondIndex<nums.length;secondIndex++){
        if(target===nums[index]+nums[secondIndex]){
          arr.push(index,secondIndex) 
        }
    }
}
    return arr
};