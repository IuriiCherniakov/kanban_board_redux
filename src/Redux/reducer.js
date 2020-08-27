const initialState = {
    list: [
        {id: Math.random(), status: 'todo', priority: 1, name: 'Text 1'},
        {id: Math.random(), status: 'progress', priority: 2, name: 'Text 2'},
        {id: Math.random(), status: 'review', priority: 3, name: 'Text 3'},
        {id: Math.random(), status: 'todo', priority: 4, name: 'Text 4'},

    ],
    columns: [
        {id: Math.random(), status: 'todo', priority: 1, title: 'To do'},
        {id: Math.random(), status: 'progress', priority: 2, title: 'In progress'},
        {id: Math.random(), status: 'review', priority: 3, title: 'Need to review '},
        {id: Math.random(), status: 'done', priority: 4, title: 'Done'},

    ],

};
const kanbanControlPanel = (state = initialState, action) => {
    switch (action.type) {

        case 'TASK_DELETE':
            const newState = {...state, list: state.list.filter(el => el.id !== action.payload)}
            return newState

        case 'ADD_NEW_COLUMN':
            return {
                ...state,
                columns: [
                    ...state.columns, {
                        id: Math.random(),
                        status: action.payload.newColumnStatus,
                        priority: 4,
                        title: action.payload.newTitleColumn
                    }
                ]

            }

        case 'COLUMN_DELETE':
            return {
                ...state, columns: state.columns.filter(el=> el.id !== action.payload)
            }
        // todos: [...state.todos, {title: action.payload, done: false, id: Math.random()}]

        // case 'TASK_ADD':
        //     return {...state, list,: [...state.list]}


        default:
            return state
    }
}
export default kanbanControlPanel;