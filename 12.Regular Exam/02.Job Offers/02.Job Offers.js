class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        const addedCandidates = [];
        for (const candidate of candidates) {
            const [name, education, yearsExperience] = candidate.split("-");
            const existingCandidate = this.jobCandidates.find((c) => c.name === name);

            if (existingCandidate) {
                if (parseInt(yearsExperience) > parseInt(existingCandidate.yearsExperience)) {
                    existingCandidate.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({name, education, yearsExperience});
                addedCandidates.push(name);
            }
        }

        const addedCandidatesString = addedCandidates.join(", ");
        return `You successfully added candidates: ${addedCandidatesString}.`;
    }


    jobOffer(chosenPerson) {
        const [name, minimalExperience] = chosenPerson.split("-");
        const selectedCandidate = this.jobCandidates.find((c) => c.name === name);

        if (!selectedCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (parseInt(minimalExperience) > parseInt(selectedCandidate.yearsExperience)) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        }

        selectedCandidate.yearsExperience = "hired";
        return `Welcome aboard, our newest employee is ${name}.`;
    }


    salaryBonus(name) {
        const selectedCandidate = this.jobCandidates.find((c) => c.name === name);

        if (!selectedCandidate) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        let salary;
        if (selectedCandidate.education === "Bachelor") {
            salary = "$50,000";
        } else if (selectedCandidate.education === "Master") {
            salary = "$60,000";
        } else {
            salary = "$40,000";
        }

        return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of ${salary} per year!`;
    }


    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        }

        const sortedCandidates = this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
        const candidatesInfo = sortedCandidates.map((candidate) => `${candidate.name}-${candidate.yearsExperience}`);
        const candidatesList = ["Candidates list:", ...candidatesInfo];

        return candidatesList.join("\n");
    }

}

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());




