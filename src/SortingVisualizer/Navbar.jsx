import React from 'react';

const btnn = "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 py-2 mb-2 md:mb-0";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="bg-black bg-opacity-70 py-2 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white text-lg font-bold mb-2 md:mb-0">Sorting Visualizer</div>
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <button className={btnn} onClick={() => this.props.resetArray()}>Generate New Array</button>
          <button className={btnn} onClick={() => this.props.mergeSort()}>Merge Sort</button>
          <button className={btnn} onClick={() => this.props.quickSort()}>Quick Sort</button>
          <button className={btnn} onClick={() => this.props.heapSort()}>Heap Sort</button>
          <button className={btnn} onClick={() => this.props.bubbleSort()}>Bubble Sort</button>
          
        </div>
      </nav>
    );
  }
}

export default Navbar;
