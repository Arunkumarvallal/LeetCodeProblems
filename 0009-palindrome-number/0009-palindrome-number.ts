function isPalindrome(x: number): boolean {
//x=x+"";
    //return x.split("").reverse().join("");
    if(x===Number(String(x).split('').reverse().join(''))){
return true}
    else{
        return false
    }
};