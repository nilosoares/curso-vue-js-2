const STATE = {
    MENU: 0,
    PLAYING: 1,
    ENDED: 2,
};

new Vue({
    el: '#app',
    data: {
        state: STATE.MENU,
    },
    computed: {
        showMenu() {
            return this.state === STATE.MENU;
        },
        showActions() {
            return this.state === STATE.PLAYING;
        },
        showResult() {
            return this.state === STATE.ENDED;
        }
    },
})