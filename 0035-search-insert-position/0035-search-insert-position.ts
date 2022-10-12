function searchInsert(nums: number[], target: number): number {
    let low:number = 0;
    let high :number= nums.length - 1;
	let mid:number;
    while (low <= high) {
     mid = ~~(low + (high - low) / 2);
        if (nums[mid] > target) {
            high = --mid;
        } else if (nums[mid] < target) {
            low = ++mid;
        } else return mid;
    }
    return low;
}