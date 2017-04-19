/**
 * Created by javier on 3/15/17.
 */
new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
    },
    methods:{
        random_damage : function(min, max){
            return Math.floor(Math.random() * (max-min) ) + min;
        },
        start_new_game:function(){
            this.gameIsRunning = true;
        },
        monster_attack: function(){
            this.playerHealth = Math.max(0, this.playerHealth - this.random_damage(6, 10));
        },
        player_attack: function(){
            this.monsterHealth = Math.max(0, this.monsterHealth - this.random_damage(6, 10));
            this.monster_attack();
        },
        special_attack: function(){
            this.monsterHealth = Math.max(0, this.monsterHealth - this.random_damage(8, 10));
            this.monster_attack();
        },
        player_heal: function(){
            this.playerHealth = Math.min(100, this.playerHealth + 10);
            this.monster_attack();
        },
        give_up: function(){
            this.gameIsRunning = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        }
    }
});