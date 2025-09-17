function compare(a: number, b: number, order: "asc" | "desc"): boolean {
    return order === "asc" ? a > b : a < b;
}

export function simpleSort(arr: number[], order : "asc" | "desc" = "asc"): number[] {
    const temp = [...arr];
    let n = temp.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (
                typeof temp[j] === "number" &&
                typeof temp[j + 1] === "number" &&
                compare(temp[j] as number, temp[j + 1] as number, order)
            ) {
                [temp[j]!, temp[j + 1]!] = [temp[j + 1]!, temp[j]!];
            }
        }
    }
    return temp;

}