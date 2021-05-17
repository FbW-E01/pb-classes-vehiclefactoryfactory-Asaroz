// Vehicle Factory Factory
// Create "factory factory" function that returns a constructor function.

// The factory factory takes in one parameter, "type".

// Each created factory needs to create objects with this given type.

// Each created factory needs to take in three parameters and save them to the created objects:

// make
// model
// Use your factory factory to create at least five factories, such as

// bicycle factory
// car factory
// boat factory
// blimp factory
// train factory
// Lastly, use those factories to create some vehicles.

// Store all your created vehicles inside one array, loop over that array and print out each vehicle.

// Question: Check the type of your factories and of the objects that your factories create - 
// what is the type of a factory and what is the type of a created object? Add your answer as comments into into your solution file.

function factory_factory(type) {
    return function factory(make, model, year) {
        this.type = type
        this.make = make
        this.model = model
        this.year = year
    }
};

const bicycle_factory = factory_factory("bycicle")
const car_factory = factory_factory("car")
const train_factory = factory_factory("train")
const boat_factory = factory_factory("boat")
const plane_factory = factory_factory("plane")


const vehicles=[]
vehicles.push()



vehicles.push(new bicycle_factory("fahrrad","turbo8000",2010))
vehicles.push(new car_factory("Auto","turbo7000",1469))
vehicles.push(new train_factory("Zug","turbo6000",1499))
vehicles.push(new plane_factory("Flugzeug","turbo28000",3999))
vehicles.push(new boat_factory("Boot","turbo9999",2999))
for(vehicle in vehicles){
    console.log(vehicles[vehicle])
}
let helper = new boat_factory("Boot","turbo9999",2999)
console.log(typeof bicycle_factory)
console.log(typeof helper)

//the type of factory is function
//the type of the object is object