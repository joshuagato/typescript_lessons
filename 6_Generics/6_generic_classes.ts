// class DataStorage<T extends string | number | boolean> { // this also works
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        // this line will help us to not remove accidentally remove the wrong item pertaining to 'objects'
        // since they are reference types
        if (this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Vic');
textStorage.addItem('Josh');
textStorage.addItem('Bright');
textStorage.removeItem('Bright')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();

const objectStorage = new DataStorage<object>();
const vicObject = { name: 'Vic' };
const bisObject = { name: 'Bismark' };
const joshObject = { name: 'Josh' };

// objectStorage.addItem({ name: 'Vic' });
// objectStorage.addItem({ name: 'Bismark' });
// objectStorage.addItem({ name: 'Josh' });
// objectStorage.removeItem({ name: 'Bright' }); // this will NOT REMOVE the last item; unless ...

objectStorage.addItem(vicObject);
objectStorage.addItem(bisObject);
objectStorage.addItem(joshObject);
objectStorage.removeItem(bisObject); // this will remove the last item.
