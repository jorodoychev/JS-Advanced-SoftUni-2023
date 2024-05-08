class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        }

        this.plants.push({
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        });

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        const plant = this.findPlant(plantName);

        if (!plant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        if (plant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }

        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        plant.ripe = true;
        plant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`;
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`;
        }
    }

    harvestPlant(plantName) {
        const plantIndex = this.plants.findIndex(
            plant => plant.plantName === plantName
        );

        if (plantIndex === -1) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        const plant = this.plants[plantIndex];

        if (!plant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        this.plants.splice(plantIndex, 1);
        this.storage.push({
            plantName,
            quantity: plant.quantity
        });
        this.spaceAvailable += plant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let report = `The garden has ${this.spaceAvailable} free space left.\n`;

        const sortedPlants = this.plants
            .map(plant => plant.plantName)
            .sort();

        if (sortedPlants.length === 0) {
            report += "Plants in the garden: No plants in the garden.\n";
        } else {
            report += `Plants in the garden: ${sortedPlants.join(", ")}\n`;
        }

        if (this.storage.length === 0) {
            report += "Plants in storage: The storage is empty.";
        } else {
            const storagePlants = this.storage
                .map(plant => `${plant.plantName} (${plant.quantity})`)
                .join(", ");
            report += `Plants in storage: ${storagePlants}`;
        }

        return report;
    }

    findPlant(plantName) {
        return this.plants.find(plant => plant.plantName === plantName);
    }
}


const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());