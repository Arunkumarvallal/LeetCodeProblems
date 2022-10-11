function removeElement(nums: number[], val: number): number {
let i:number=0;
let j:number = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]!=val)
        {
            nums[j++] = nums[i];
        }
    }
    return j;
};