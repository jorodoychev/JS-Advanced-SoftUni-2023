function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);

    function onClick () {
        let myText = document.getElementsByTagName('textarea')[0];
        let info = myText.value;
        let restaurants = info.split('"');
        let data = [];
        for (let i = 1; i < restaurants.length; i += 2) {
            data.push(restaurants[i]);
        }

        let restObj = {};
        for (let rest of data) {
            let entity = rest.split(" - ");
            let restName = entity.shift();
            if (!restObj.hasOwnProperty(restName)) {
                restObj[restName] = {};
                let salSum = 0;
                let emps = entity[0].split(", ");
                for (let en = 0; en < emps.length; en ++) {
                    let person = emps[en].split(" ");
                    salSum += Number(person[1]);
                    restObj[restName][person[0]] = Number(person[1]);
                }
                restObj[restName]['Average'] = salSum/emps.length;
            } else {
                delete restObj[restName]['Average'];
                let emps = entity[0].split(", ");
                for (let en = 0; en < emps.length; en ++) {
                    let person = emps[en].split(" ");
                    restObj[restName][person[0]] = Number(person[1]);
                }
                let newSals = Object.values(restObj[restName]);
                let newSum = 0;
                for (let value of newSals) {
                    newSum += value;
                }
                restObj[restName]['Average'] = newSum/newSals.length;
            }
        }
        let bestRest = Object.entries(restObj);
        let results = [];
        for (let i = 0; i < bestRest.length; i ++){
            results.push(bestRest[i][0]);
            results.push(bestRest[i][1]['Average']);
            let bestSals = Object.values(bestRest[i][1]);
            results.push(Math.max(...bestSals));
        }
        let bestValue = 0;
        let bestInd = 1;
        for (let j = bestInd; j < results.length; j += 3) {
            if (results[j] > bestValue) {
                bestValue = results[j];
                bestInd = j;
            }
        }

        let target1 = document.querySelector('div#bestRestaurant p');
        target1.textContent = `Name: ${results[bestInd - 1]} Average Salary: ${results[bestInd].toFixed(2)} Best Salary: ${results[bestInd + 1].toFixed(2)}`;

        let target2 = document.querySelector('div#workers p');
        let workers = Object.entries(restObj[results[bestInd - 1]]);
        workers.pop();
        let sorted = workers.sort((a, b) => b[1] - a[1]);
        let workersList = "";
        for (let e = 0; e < sorted.length; e ++) {
            workersList += `Name: ${sorted[e][0]} With Salary: ${sorted[e][1]} `;
        }
        target2.textContent = workersList;
    }
}