// Sebastiaan Kolmschate

var grades = []
window.document.getElementsByClassName("list-group-item list-group-item-success is-decollapsed").forEach((x) => {
	var gradeData = x.getElementsByClassName("grade")[0].getAttribute("data-content");
	var moduleName = x.getElementsByClassName("btn-link")[0].innerHTML;
	var ECs = x.getElementsByClassName("exam-unit-workload-amount")[0].innerHTML;
    if(gradeData.length == 3){
        grades.push({
            module: moduleName, 
            data: {
                grade: gradeData,
                EC: ECs}
            });
    }
	
})

function getGPAAverage(data){
    var qp = 0;
    var ECs = 0;
    data.forEach((x) => {
        var grade = parseFloat(x.data.grade.replace(/,/g, '.'));
        var ec = parseInt(x.data.EC);
        qp += grade * ec;
        ECs += ec;
    })

    return qp / ECs;
}

function getAverage(data){
    var total = 0;
    var count = 0;
    data.forEach((x) => {
        var grade = parseFloat(x.data.grade.replace(/,/g, '.'));
        total += grade;
        count++;
    })
    return total / count;
}

console.log(`Unweighted average grades: ${getAverage(grades).toFixed(1)}`);
console.log(`Weighted average grades: ${getGPAAverage(grades).toFixed(1)}`);