function result(car) {
    const result = {};
    const engine = {};
    const carriage = {};
    const wheels = {};
    if(car.power <= 90){
        engine.power = 90;
        engine.volume = 1800;
    }
    else if(car.power <= 120){
        engine.power = 120;
        engine.volume = 2400;
    }
    else if(car.power <= 200){
        engine.power = 200;
        engine.volume = 3500;
    }
    carriage.type = car.carriage;
    carriage.color = car.color;
    if(car.wheelsize % 2 == 0){
        let wheel = car.wheelsize - 1;
        wheels.wheelsize = [wheel, wheel, wheel, wheel]
    }
    else{
        let wheel = car.wheelsize;
        wheels.wheelsize = [wheel, wheel, wheel, wheel]
    }
    result.model = car.model;
    result.engine = engine;
    result.carriage = carriage;
    result.wheels = wheels.wheelsize;
    return result;
}

result({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)