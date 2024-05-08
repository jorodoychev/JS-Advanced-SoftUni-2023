function sortedList() {
    const collection = [];

    return {
        add,
        remove,
        get,
        size: 0,
    };

    function add(num) {
        collection.push(num);
        this.size++;
        collection.sort((a, b) => a - b);
    }

    function remove(index) {
        const valid = checkIndex(index);
        if (valid) {
            collection.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        const valid = checkIndex(index);

        if (valid) {
            return collection[index];
        }
    }

    function checkIndex(index) {
        return index >= 0 && index < collection.length;
    }
}