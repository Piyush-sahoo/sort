export function getQuickSortAnimations(array) {
    const animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    return animations;
  }
  
  function quickSortHelper(array, low, high, animations) {
    if (low < high) {
      const partitionIndex = partition(array, low, high, animations);
  
      quickSortHelper(array, low, partitionIndex - 1, animations);
      quickSortHelper(array, partitionIndex + 1, high, animations);
    }
  }
  
  function partition(array, low, high, animations) {
    const pivot = array[high];
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      animations.push([j, high]); // Highlight elements being compared
  
      if (array[j] <= pivot) {
        i++;
        animations.push([i, j, true]); // Swap elements
        swap(array, i, j);
      }
  
      animations.push([j, high]); // Reset color
    }
  
    animations.push([i + 1, high, true]); // Swap pivot with the correct position
    swap(array, i + 1, high);
  
    return i + 1;
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  