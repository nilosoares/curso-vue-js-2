const STATE = {
    MENU: 0,
    PLAYING: 1,
    ENDED: 2,
};

const MATCH_RESULT = {
    UNKNOWN: 0,
    WIN: 1,
    LOST: 2,
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

new Vue({
    el: '#app',
    data: {
        state: STATE.MENU,
        matchResult: MATCH_RESULT.UNKNOWN,
        playerLife: 100,
        monsterLife: 100,
    },
    computed: {
        showMenu() {
            return this.state === STATE.MENU || this.state === STATE.ENDED;
        },
        showActions() {
            return this.state === STATE.PLAYING;
        },
        showResult() {
            return this.state === STATE.ENDED;
        },
        youWin() {
            return this.playerLife > 0;
        },
        youLost() {
            return this.playerLife <= 0;
        },
    },
    methods: {
        start() {
            this.state = STATE.PLAYING;
            this.playerLife = 100;
            this.monsterLife = 100;
        },
        attack() {
            const attack = getRandomInt(5, 12);
            this.monsterLife -= attack;
            this.monsterAttack();
        },
        specialAttack() {
            const attack = getRandomInt(13, 20);
            this.monsterLife -= attack;
            this.monsterAttack();
        },
        heal() {
            const heal = getRandomInt(11, 18);
            this.playerLife += Math.max(100, heal);
            this.monsterAttack();
        },
        monsterAttack() {
            const attack = getRandomInt(10, 15);
            this.playerLife -= attack;
        },
        giveUp() {
            this.state = STATE.MENU;
        },
    },
    watch: {
        playerLife(value) {
            if (value < 0) {
                this.state = STATE.ENDED;
            } else if (value > 100) {
                this.playerLife = 100;
            } else {
                this.playerLife = value;
            }
        },
        monsterLife(value) {
            if (value < 0) {
                this.state = STATE.ENDED;
            } else if (value > 100) {
                this.monsterLife = 100;
            } else {
                this.monsterLife = value;
            }
        }
    },
})