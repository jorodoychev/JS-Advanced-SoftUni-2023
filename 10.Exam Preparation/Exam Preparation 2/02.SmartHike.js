class SmartHike {
    constructor(username) {
        this.username = username;
        this.goals = {};
        this.listOfHikes = [];
        this.resources = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals[peak]) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = Number(altitude);
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        if (this.resources === 0) {
            return "You don't have enough resources to start the hike";
        }

        if (this.goals[peak] !== undefined) {
            let usedResources = time * 10;
            let difference = this.resources - usedResources;

            if (difference < 0) {
                return "You don't have enough resources to complete the hike";
            } else {
                this.resources -= usedResources;
                this.listOfHikes.push({peak, time, difficultyLevel});
                return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
            }
        } else {
            throw new Error(`${peak} is not in your current goals`);
        }
    }

    rest(time) {
        const gainedResources = time * 10;
        this.resources += gainedResources;

        if (this.resources >= 100) {
            this.resources = 100;
            return "Your resources are fully recharged. Time for hiking!";
        } else {
            return `You have rested for ${time} hours and gained ${gainedResources}% resources`;
        }
    }

    showRecord(criteria) {
        if (this.listOfHikes.length === 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria === "all") {
            let output = "All hiking records:\n";
            for (const hike of this.listOfHikes) {
                output += `${this.username} hiked ${hike.peak} for ${hike.time} hours\n`;
            }
            return output.trim();
        } else if (criteria === "hard" || criteria === "easy") {
            let filteredHikes = this.listOfHikes.filter(
                (hike) => hike.difficultyLevel === criteria
            );

            if (filteredHikes.length === 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            filteredHikes.sort((a, b) => a.time - b.time);
            const bestHike = filteredHikes[0];

            return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
        }
    }
}
