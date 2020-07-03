/* eslint-disable prettier/prettier */

export default {
    state: {
        menuList: [],
        currentMenu: null
    },
    mutations: {
        updateValue (state, payload) {
            if (payload.path !== '/') {
                // 如果路径不是首页，添加到面包屑导航中去
                state.currentMenu = payload
            } else {
                state.currentMenu = null
            }
        }
    },
    actions: {}
}
