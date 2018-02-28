var source = "";


var tower1 = document.getElementById("tower1");
var tower2 = document.getElementById("tower2");
var tower3 = document.getElementById("tower3");
for (let i = 3; i >= 0; i--) {
    var disk = document.createElement("div");
    disk.setAttribute("id", "disk" + i);
    disk.setAttribute("class", "disk" + i);
    disk.setAttribute("name",i);
    tower1.appendChild(disk);
}

moveDisk = function (event) {
    let destination;
    let sourceTower;
    let destTower;
    let tempDisk;
    let movingDisk;
    let movingDiskVal;
    let tempDiskVal;

    if (source == "") {
        source = event.currentTarget.id;
    } else {
        destination = event.currentTarget.id;
        sourceTower = document.getElementById(source);
        destTower = document.getElementById(destination);
        if (sourceTower.childElementCount > 0) {
            movingDisk = sourceTower.lastElementChild;
            movingDiskVal=parseInt(movingDisk.getAttribute("name"));
            if (destTower.childElementCount > 0) {
                tempDisk= destTower.lastElementChild;
                tempDiskVal=parseInt(tempDisk.getAttribute("name"));
                if (tempDiskVal>movingDiskVal)
                   document.getElementById(destination).appendChild(movingDisk);
            }
            else {
               //If the tower is empty 
               document.getElementById(destination).appendChild(movingDisk);
            } 
       }
        source = "";
    }
    console.log("source:", source);
}
tower1.addEventListener('click', moveDisk);
tower2.addEventListener('click', moveDisk);
tower3.addEventListener('click', moveDisk);

