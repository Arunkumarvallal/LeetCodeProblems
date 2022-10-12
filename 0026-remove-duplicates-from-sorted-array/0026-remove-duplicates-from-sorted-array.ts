function removeDuplicates(nums: number[]): number {

    let sets=new Set<number>(nums);
    let arr:number[]=Array.from(sets)
    let index:number=0;
    for(index=0;index<arr.length;index++){
        nums[index]=arr[index];
    }
    return arr.length
    
};