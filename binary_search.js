let sample_array = [1, 4, 29, 63, 90, 99];

let binary_search = (arr, target_number) => {

    let first_index = 0;
    let last_index = arr.length - 1;

    while (first_index <= last_index) {

        let middle_index = Math.floor((first_index + last_index) / 2);

        // if the current mid element matches the target value, return that position
        if (arr[middle_index] === target_number) {
            return `Found target number: ${target_number} in index: ${middle_index}`;
        }

        // if the current mid element is greater than the target number, redefine the last index
        if (arr[middle_index] > target_number) {
            last_index = middle_index - 1;
        }

        // Otherwise, redefine the first index
        else {
            first_index = middle_index + 1;
        }
    }

    // not found
    return -1;
}

console.log(binary_search(sample_array, 99));
// Found target number: 99 in index: 5