const SHOW_MORE_PEOPLE = 'SHOW_MORE_PEOPLE';
const REMOVE_ELEMENT = 'REMOVE_ELEMENT';
const FIND_SIMILAR = 'FIND_SIMILAR';

function addAction(type, value) {
    return {
        type: type,
        value: value
    };
}
export {
    SHOW_MORE_PEOPLE,
    REMOVE_ELEMENT,
    FIND_SIMILAR,
    addAction
};