function solution(input) {
    const res = [];
    input.forEach(element => {
        const hero = {};
        const heroParts = element.split(" / ");
        hero.name = heroParts[0];
        hero.level = Number(heroParts[1]);
        const items = heroParts[2].split(", ");
        hero.items = items;
        res.push(hero);
    });
    return JSON.stringify(res);
}

solution(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)