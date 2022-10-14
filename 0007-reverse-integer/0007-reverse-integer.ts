function reverse(x: number): number {
    const n = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    return (n > - Math.pow(2, 31) && n < Math.pow(2, 31) - 1) ? n : 0;
};