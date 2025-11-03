class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree<T> {
  private root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  public insert(value: T): void {
    this.root = this.insertNode(this.root, value);
  }

  private insertNode(node: TreeNode<T> | null, value: T): TreeNode<T> {
    if (node === null) {
      return new TreeNode(value);
    }

    if (value < node.value) {
      node.left = this.insertNode(node.left, value);
    } else {
      node.right = this.insertNode(node.right, value);
    }
    return node;
  }

  public search(value: T): T | null {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (value === currentNode.value) {
        return currentNode.value;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  public remove(value: T): void {
    this.root = this.removeNode(this.root, value);
  }

  private removeNode(node: TreeNode<T> | null, value: T): TreeNode<T> | null {
    if (node === null) {
      return null;
    }

    if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }

      if (node.left === null) {
        return node.right;
      }

      if (node.right === null) {
        return node.left;
      }

      const minRightNode = this.findMinNode(node.right);
      node.value = minRightNode.value;
      node.right = this.removeNode(node.right, minRightNode.value);
      return node;
    }
  }

  private findMinNode(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }

  public inOrderTraversal(): T[] {
    const result: T[] = [];
    this.inOrderHelper(this.root, result);
    return result;
  }

  private inOrderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) return;
    this.inOrderHelper(node.left, result);
    result.push(node.value);
    this.inOrderHelper(node.right, result);
  }

  public preOrderTraversal(): T[] {
    const result: T[] = [];
    this.preOrderHelper(this.root, result);
    return result;
  }

  private preOrderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) return;
    result.push(node.value);
    this.preOrderHelper(node.left, result);
    this.preOrderHelper(node.right, result);
  }

  public postOrderTraversal(): T[] {
    const result: T[] = [];
    this.postOrderHelper(this.root, result);
    return result;
  }

  private postOrderHelper(node: TreeNode<T> | null, result: T[]): void {
    if (node === null) return;
    this.postOrderHelper(node.left, result);
    this.postOrderHelper(node.right, result);
    result.push(node.value);
  }

  public levelOrderTraversal(): T[] {
    if (this.root === null) {
      return [];
    }

    const result: T[] = [];
    const queue: TreeNode<T>[] = [this.root];

    while (queue.length > 0) {
      const node = queue.shift()!;

      result.push(node.value);

      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }

    return result;
  }
}