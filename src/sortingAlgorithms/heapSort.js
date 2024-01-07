export function getHeapSortAnimations(array) {
    const animations = [];
    heapSort(array, animations);
    return animations;
  }
  
  function heapSort(array, animations) {
    const n = array.length;
  
    
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(array, n, i, animations);
    }
  
    for (let i = n - 1; i > 0; i--) {
      animations.push([0, i, true]); 
      swap(array, 0, i);
      animations.push([0, i, true]);
      heapify(array, i, 0, animations);
    }
  }
  
  function heapify(array, n, i, animations) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;
  
    if (left < n && array[left] > array[largest]) {
      largest = left;
    }
  
    if (right < n && array[right] > array[largest]) {
      largest = right;
    }
  
    if (largest !== i) {
      animations.push([i, largest, true]); 
      swap(array, i, largest);
      animations.push([i, largest, true]); 
      heapify(array, n, largest, animations);
    }
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  
