const state = {
    courses: {
        'ID1': {
            name: "1",
            completed: false,
            dueDate: "12/12/12",
            dueTime: "12:00",
        },
        'ID2': {
            name: "2",
            completed: false,
            dueDate: "12/12/12",
            dueTime: "12:00",
        },
        'ID3': {
            name: "1",
            name: "3",
            completed: false,
            dueDate: "12/12/12",
            dueTime: "12:00",
        },

    },
}

const mutations = {
    update(state, payload) {
        console.log("payload from mutation ", payload);
        //Object.assign(state.tasks[payload.id], payload.updates)
    },
}

const actions = {
    update({ dispatch }, payload) {
        //   commit('update', payload)
    },
}

const getters = {
    courses: (state) => {
        return state.courses
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}