const lifeBar = {
    green: {
        name: 'Маг', 
        health: 50,
    },
    yellow: {
        name: 'Lan', 
        health: 15,
    },
    red: {
        name: 'Маг', 
        health: 5,
    },
};

export default function calculateLifeBar(health) {
    if(health >= lifeBar.green.health) {
        return 'healthy';
    };
    if(health >= lifeBar.yellow.health) {
        return 'wounded';
    };
    if(health < lifeBar.yellow.health) {
        return 'critical';
    };
}