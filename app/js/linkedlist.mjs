/**
 * @author Bilal Abraham
 * @classdesc An iterable sigularly linked list data structure
 * @class
 */

class LinkedList {
  /**
   * @classdesc 
   * @class
   */
  static Node = class {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  /**
   * Initializes an empty linked list
   * @constructor
   */
  constructor() {
    this.length = 0;
    this.head = null;
  }

  /**
   * Prohibits setting the size of the linked list
   */

  //worst-case time complexity --> O(1)
  set size(newSize) {
    throw "Size is a read-only attribute and shouldn't be set externally."
  }

  /**
   * Gets the size of the linked list
   */

  //worst-case time complexity --> O(1)
  get size() {
    return this.length;
  }

  /**
   * Provides an iterator for the linked list
   * @return an JS5 standard iterator
   */

  //worst-case time complexity --> O(1)
  [Symbol.iterator]() {
    let current = this.head;

    return {
      //at the end of the list or not
      next: () => {
        //once we hit the end no longer iterate to the next
        if (current == null) {
          return {
            value: undefined,
            done: true
          };
        }

        //if we aren't at the end keep iterating
        let result = {
          value: current.data,
          done: false
        }
        current = current.next;
        return result;
      }
    }
  }


  /**
   * Add to the end of the linked list 
   * @param data the data to add to the list
   */

  //worst-case time complexity --> O(n)
  add(data) {
    let node = new LinkedList.Node(data),
      current;

    //if there is no head point head to a new node
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.length++;
  }

  /**
   * Inserts data into the list after the index provided.
   * @param data the data to insert into the linked list
   * @param place the index to insert after. -1 indicates before head, > size indicates at the end of the list
   */

  //worst-case time complexity --> O(n)
  insert(data, place = -1) {
    if (place > this.size) {
      this.add(data);
    }

    //if we are out of bounds
    if (place >= 0 && place <= this.size) {
      let node = new LinkedList.Node(data),
        current = this.head,
        previous,
        index = 0;
      if (place == -1) {
        node.next = current;
        head = null;
      } else {
        while (index++ < place) {
          previous = current;
          current = current.next;
        }
        node.next = current.next;
        current.next = node;
      }
      this.length++
    }
  }

  /**
   * Removes an element from the list at the index provided.
   * @param place index to remove; <= 0 indicates removal of first element; > size indicates removal of last element
   * @return the data that was removed
   */

  //worst case time complexity --> O(n)
  remove(place = -1) {
    //back sure vals are in bounds
    let current = this.head,
      previous,
      index = 0;
    //removes first
    if (place <= 0) {
      this.head = current.next;
      this.length = this.length - 1;
      return;
    }
    //removes last
    if (place >= this.length) {
      while (current !== null) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.length--;
      return previous.data;
    } else {
      while (index++ < place) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.data
  }

  /**
   * Gets the data from a provided index (stating at index zero)
   * @param place the index to retreive data from
   * @return the data at index {place} or null if doesn't exist
   */

  //worst-case time complexity --> O(n)
  get(place = 0) {
    //checks for out of bounds
    if (place < 0 || place > this.length || this.length == 0) {
      return null;
    }
    let current = this.head;
    let index = 0;
    while (index < place) {
      index++;
      current = current.next;
    }
    return current.data;
  }
  /**
//    * Convert the Linked List into a String with format [E1, E2, E3, ...]
//    */

  toString() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += curr.data + ", ";
      curr = curr.next;
    }
    return str;
  }

  /**
   * print the linked list to the console
   */
  print() {
    let current = this.head;
    let spot = 0;
    while (current !== null) {
      console.log(`${spot}: ${current.data}`);
      spot = spot + 1;
      current = current.next;
    }
  }
}

export {
  LinkedList
}