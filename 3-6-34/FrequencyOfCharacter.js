function countCharacterFrequency(str) {
    const frequency = {}; // Step 1: Initialize an empty object

    for (const char of str) { // Step 2: Loop through each character in the string
        if (frequency[char]) { 
            frequency[char]++; // Increment the count if the character already exists in the object
        } else {
            frequency[char] = 1; // Add the character to the object with a count of 1 if it doesn't exist
        }
    }

    return frequency; // Step 3: Return the frequency object
}

// Example usage:
const str = "bharath boyapati";
const charFrequency = countCharacterFrequency(str);
console.log(charFrequency); 
// Expected Output: { b: 2, h: 2, a: 3, r: 1, t: 2, ' ': 1, o: 1, y: 1, p: 1, i: 1 }


// Dry Run

// Initial State:

// str = "bharath boyapati"

// frequency = {} (empty object)

// Iteration 1:

// char = 'b'

// 'b' is not in frequency, so add 'b': 1

// frequency = { b: 1 }

// Iteration 2:

// char = 'h'

// 'h' is not in frequency, so add 'h': 1

// frequency = { b: 1, h: 1 }

// Iteration 3:

// char = 'a'

// 'a' is not in frequency, so add 'a': 1

// frequency = { b: 1, h: 1, a: 1 }

// Iteration 4:

// char = 'r'

// 'r' is not in frequency, so add 'r': 1

// frequency = { b: 1, h: 1, a: 1, r: 1 }

// Iteration 5:

// char = 'a'

// 'a' is already in frequency, so increment frequency['a']

// frequency = { b: 1, h: 1, a: 2, r: 1 }

// Iteration 6:

// char = 't'

// 't' is not in frequency, so add 't': 1

// frequency = { b: 1, h: 1, a: 2, r: 1, t: 1 }

// Iteration 7:

// char = 'h'

// 'h' is already in frequency, so increment frequency['h']

// frequency = { b: 1, h: 2, a: 2, r: 1, t: 1 }

// Iteration 8:

// char = ' '

// ' ' (space) is not in frequency, so add ' ': 1

// frequency = { b: 1, h: 2, a: 2, r: 1, t: 1, ' ': 1 }

// Iteration 9:

// char = 'b'

// 'b' is already in frequency, so increment frequency['b']

// frequency = { b: 2, h: 2, a: 2, r: 1, t: 1, ' ': 1 }

// Iteration 10:

// char = 'o'

// 'o' is not in frequency, so add 'o': 1

// frequency = { b: 2, h: 2, a: 2, r: 1, t: 1, ' ': 1, o: 1 }

// Iteration 11:

// char = 'y'

// 'y' is not in frequency, so add 'y': 1

// frequency = { b: 2, h: 2, a: 2, r: 1, t: 1, ' ': 1, o: 1, y: 1 }

// Iteration 12:

// char = 'a'

// 'a' is already in frequency, so increment frequency['a']

// frequency = { b: 2, h: 2, a: 3, r: 1, t: 1, ' ': 1, o: 1, y: 1 }

// Iteration 13:

// char = 'p'

// 'p' is not in frequency, so add 'p': 1

// frequency = { b: 2, h: 2, a: 3, r: 1, t: 1, ' ': 1, o: 1, y: 1, p: 1 }

// Iteration 14:

// char = 'a'

// 'a' is already in frequency, so increment frequency['a']

// frequency = { b: 2, h: 2, a: 4, r: 1, t: 1, ' ': 1, o: 1, y: 1, p: 1 }

// Iteration 15:

// char = 't'

// 't' is already in frequency, so increment frequency['t']

// frequency = { b: 2, h: 2, a: 4, r: 1, t: 2, ' ': 1, o: 1, y: 1, p: 1 }

// Iteration 16:

// char = 'i'

// 'i' is not in frequency, so add 'i': 1

// frequency = { b: 2, h: 2, a: 4, r: 1, t: 2, ' ': 1, o: 1, y: 1, p: 1, i: 1 }

// Final State:

// frequency = { b: 2, h: 2, a: 4, r: 1, t: 2, ' ': 1, o: 1, y: 1, p: 1, i: 1 }

