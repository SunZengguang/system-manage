/* eslint-disable prettier/prettier */

export default {
    state: {
        menuList: [],
        currentMenu: null
    },
    mutations: {
        updateValue (state, payload) {
            if (payload.path !== '/') {
                state.currentMenu = payload
            } else {
                state.currentMenu = null
            }
        }
    },
    actions: {}
}
