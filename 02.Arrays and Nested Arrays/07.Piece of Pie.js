function pieceOfPie(arrPieFlavors, startFlavor, endFlavor) {
    const start = arrPieFlavors.indexOf(startFlavor)
    const end = arrPieFlavors.indexOf(endFlavor) + 1

    return arrPieFlavors.slice(start, end)

}

pieceOfPie(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie')

pieceOfPie(["Apple Crisp", "Mississippi Mud Pie", "Pot Pie", "Steak and Cheese Pie", "Butter Chicken Pie", "Smoked Fish Pie"],
    'Pot Pie',
    'Smoked Fish Pie')