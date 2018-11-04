import './style.scss';
import {
    template
} from './utils/teamplate';
import {
    SHOW_MORE_PEOPLE,
    REMOVE_ELEMENT,
    FIND_SIMILAR,
    addAction
} from './actions/main-action';
import {
    createStore
} from './store/store';
import DATA from './data';
const root = document.getElementById('root');
root.innerHTML = template;
const NEXT_STEP = 5;
const DEFAULT_ELEMETS = 5;
const DOM_ELEMENTS = {
    usersList: document.getElementById('users'),
    showMore: document.getElementById('showMore'),
    input: document.getElementById('searchField'),
    usersCount: document.querySelector('.users-count'),
    displayed: document.getElementById('displayed'),
    outOf: document.getElementById('out-of')
};

function userStorege(value) {
    let users = value;
    let watchUsers = DEFAULT_ELEMETS;
    const getUser = () => {
        return users;
    };
    const showDefaulUsers = () => {
        return users.slice(0, DEFAULT_ELEMETS);
    };
    const showMore = () => {
        return users.slice(watchUsers, watchUsers += DEFAULT_ELEMETS);
    };
    const deleteUser = (id) => {
        return users = users.filter((user) => user.id != id);
    };
    return {
        getUser,
        showDefaulUsers,
        showMore,
        deleteUser
    };
};
const MAIN_USERS = userStorege(DATA);
const rednderListOfUsers = (users) => {
    const template = users.map((user) => {
        return `
  <tr id=${ user.id }>
    <td class='user-img'><img src=${ user.picture } alt='photo....'></td>
    <td>${ user.name }</td>
    <td>${ user.location }</td>
    <td>${ user.email }</td>
    <td>${ user.phone }</td>
    <td>${ user.timezone }</td>
    <td><button class="btn btn-remove">Delete${user.id}</button></td>
  </tr>`;
    }).join('\n');
    DOM_ELEMENTS.usersList.innerHTML = template;
};
const defaultState = MAIN_USERS.showDefaulUsers();
const defaultAction = {
    type: 'default'
};
const reducer = function(state = defaultState, action = defaultAction) {
    switch (action.type) {
    case SHOW_MORE_PEOPLE:
    {
        if (action.value.length < NEXT_STEP) {
            DOM_ELEMENTS.showMore.classList.add('amimateToBottom');
            DOM_ELEMENTS.showMore.classList.add('invisible');
        } else {
            DOM_ELEMENTS.showMore.classList.remove('invisible', 'amimateToBottom');
        };
        return [...state, ...action.value];
    }
    case REMOVE_ELEMENT:
    {
        MAIN_USERS.deleteUser(action.value);
        state = state.filter((user) => user.id != action.value);
        if (state.length < DEFAULT_ELEMETS) {
            return state = MAIN_USERS.showByDefault();
        };
        return state;
    }
    case FIND_SIMILAR:
    {
        return state.filter((user) => {
            return user.name.indexOf(action.value) !== -1;
        });
    }
    }
    return state;
};
const store = createStore(reducer);

const displayedOutOf = () => {
    DOM_ELEMENTS.displayed.innerText = store.getState().length;
    DOM_ELEMENTS.outOf.innerText = MAIN_USERS.getUser().length;
};

displayedOutOf();
rednderListOfUsers(store.getState());

store.subscribe(displayedOutOf);
store.subscribe(() => {
    rednderListOfUsers(store.getState());
});

DOM_ELEMENTS.showMore.addEventListener('click', () => {
    const value = MAIN_USERS.showMore();
    const action = addAction(SHOW_MORE_PEOPLE, value);
    store.dispatch(action);
});

DOM_ELEMENTS.usersList.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-remove')) {
        const id = event.target.parentElement.parentElement.id;
        const action = addAction(REMOVE_ELEMENT, id);
        store.dispatch(action);
    }
});

DOM_ELEMENTS.input.addEventListener('keyup', (event) => {
    const action = addAction(FIND_SIMILAR, event.target.value);
    console.log(action);
    store.dispatch(action);
});