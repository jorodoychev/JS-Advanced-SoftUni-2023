function constructionCrew(obj) {
    const neededWater = 0.1 * obj.weight * obj.experience

    if (obj.dizziness) {
        obj.levelOfHydrated += neededWater
        obj.dizziness = false
    }

    return obj
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
})