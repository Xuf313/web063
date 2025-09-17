function compare(a: number, b: number, order: "asc" | "desc"): boolean {
    return order === "asc" ? a > b : a < b;
}

export function simpleSort(arr: number[], order : "asc" | "desc" = "asc"): number[] {
    const temp = [...arr];
    let n = temp.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (
                temp[j] !== undefined &&
                temp[j + 1] !== undefined &&
                compare(temp[j] as number, temp[j + 1] as number, order)
            ) {
                let swap = temp[j] as number;
                temp[j] = temp[j + 1] as number;
                temp[j + 1] = swap;
            }
        }
    }
    return temp;

}