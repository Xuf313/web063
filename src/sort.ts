export function simpleSort(arr: number[], order : "asc" | "desc" = "asc"): number[] {
    const temp = [...arr];
    let n = temp.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (
                temp[j + 1] !== undefined &&
                temp[j] !== undefined &&
                (order === "asc" ? temp[j]! > temp[j + 1]! : temp[j]! < temp[j + 1]!)
            ) {
                [temp[j]!, temp[j + 1]!] = [temp[j + 1]!, temp[j]!];
            }
        }
    }
    return temp;

}