export class LocalStorageService {
    private list = [
        {
            id: 1,
            topic: 'First',
            date: '01/01/2001',
            lecturer: 'Freddy'
        },
        {
            id: 2,
            topic: 'Second',
            date: '02/02/2002',
            lecturer: 'Taras pankiv'
        },
    ];

    getListData() {
        return this.list;
    }

    addDataToList(data): void {
        this.list.push(data);
        this.updateId();
    }

    deleteDataInList(index: number): void {
        this.list.splice(index, 1);
        this.updateId();
    }

    updateId() {
        this.list.forEach( (elem, index) => {
            elem.id = index + 1;
        });
    }
}
