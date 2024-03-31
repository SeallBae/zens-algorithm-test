function miniMaxSum(arr: number[]): void {
    arr.sort((a, b) => a - b);
    const minSum: number = arr.slice(0, 4).reduce((sum, num) => sum + num, 0);
    const maxSum: number = arr.slice(1).reduce((sum, num) => sum + num, 0);
    console.log(`${minSum} ${maxSum}`);
}

const input: number[] = [5, 5, 5, 5, 5];
miniMaxSum(input);