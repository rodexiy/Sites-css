function newEntity(name, health) {
    var entity = {
        name: name,
        health: health,
        died: false,

        checkHealth: function() {
            if (this.health <= 0) {
                console.log(this.name + " Died!");
                this.died = true
            }
        },

        attack: function(entityToHit, damage){
            entityToHit.health -= damage
            entityToHit.checkHealth()
        }
    }

    return entity
}

function newPlayer(name, health){
    var entity = newEntity(name, health)
    entity.inventory = {}
    entity.equippedItem = null

    entity.equipItem = function(item){
        this.equippedItem = item
    }

    return entity
}

function newItem(name, damage){
    var item = {
        name: name,
        damage: damage,
    }

    return item
}

function giveItem(entity, item){
    if (entity.inventory == undefined) {
        entity.inventory = {}
    }

    entity.inventory[item] = item;
}



let zombie = newEntity("Zumbi", 100)
let jogador = newPlayer("Kleber", 100)
let sword = newItem("Sword", 10)
giveItem(jogador, sword)
jogador.equipItem(sword)



for (let i = 0; i < 10; i++) {
    jogador.attack(zombie, jogador.equippedItem.damage)
}