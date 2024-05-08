class FootballTeam {
    constructor(clubName, country) {
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers) {
        for (const player of footballPlayers) {
            const [name, age, playerValue] = player.split('/');

            const existingPlayer = this.invitedPlayers.find(p => p.name === name);
            if (existingPlayer) {
                const currentPlayerValue = parseFloat(playerValue);
                if (currentPlayerValue > existingPlayer.playerValue) {
                    existingPlayer.playerValue = currentPlayerValue;
                }
            } else {
                this.invitedPlayers.push({
                    name: name,
                    age: parseInt(age),
                    playerValue: parseFloat(playerValue)
                });
            }
        }

        const invitedNames = this.invitedPlayers.map(player => player.name);
        const invitedString = invitedNames.join(', ');

        return `You successfully invite ${invitedString}.`;
    }

    signContract(selectedPlayer) {
        const [name, playerOffer] = selectedPlayer.split('/');

        const player = this.invitedPlayers.find(p => p.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        const currentPlayerValue = player.playerValue;
        const offer = parseFloat(playerOffer);
        if (offer < currentPlayerValue) {
            const priceDifference = currentPlayerValue - offer;
            throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`);
        }

        player.playerValue = "Bought";
        return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
    }

    ageLimit(name, age) {
        const player = this.invitedPlayers.find(p => p.name === name);
        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        }

        if (player.age < age) {
            const ageDifference = age - player.age;
            if (ageDifference < 5) {
                return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`;
            } else {
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        } else {
            return `${name} is above age limit!`;
        }
    }

    transferWindowResult() {
        let result = "Players list:\n";

        const sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        for (const player of sortedPlayers) {
            result += `Player ${player.name}-${player.playerValue}\n`;
        }

        return result.trim();
    }

}