var count = 0;
var cnt;


function addItem() {

    var getTitle = document.getElementById("item-title").value;
    var getDesc = document.getElementById("item-desc").value;
    if (getTitle === "") {
        alert("Please Add the Task Title")
    } else if (getDesc === "") {
        alert("Please Add the Task Description")
    } else {
        count++;
        var li = document.createElement("li");
        var liText = document.createTextNode(getTitle);

        var descText = document.createTextNode(getDesc);
        var anchor2 = document.createElement("a");
        anchor2.appendChild(descText);
        anchor2.setAttribute("class", "hidden");

        var anchor = document.createElement("a");
        anchor.appendChild(liText);
        anchor.setAttribute("href", "#")
        anchor.setAttribute("onclick", "showDetails(this)");

        li.appendChild(anchor);
        li.appendChild(anchor2);



        var getUl = document.getElementById("item-list");
        getUl.appendChild(li);

        var getDiv = document.getElementById("removebtn");
        getDiv.style.visibility = "visible";

        if (count > 1) {
            var getfig = document.getElementById("caption");
            getfig.innerHTML = "REMOVE ALL";

        }

    }

    document.getElementById("item-title").value = "";
    document.getElementById("item-desc").value = "";
}


function showDetails(get) {
    cnt = 0;

    var getDiv = document.getElementById("removebtn");
    getDiv.style.visibility = "hidden";

    getShowDiv = document.getElementById("details");
    getShowDiv.style.display = "block";
    var getTitlevalue = get.innerHTML;
    var getTitledetail = document.getElementById("title-detail");
    getTitledetail.value = getTitlevalue;
    var getdescdetail = document.getElementById("desc-detail");
    getdescdetail.value = get.nextSibling.innerHTML;

    var getbtndel = document.getElementById("btndel");
    getbtndel.onclick = function() {
        getShowDiv.style.display = "none";
        get.parentNode.remove();
        count--;
        if (count === 0) {
            var getDiv = document.getElementById("removebtn");
            getDiv.style.visibility = "hidden";
        } else if (count == 1) {
            var getDiv = document.getElementById("removebtn");
            getDiv.style.visibility = "visible";
            var getfig = document.getElementById("caption");
            getfig.innerHTML = "REMOVE";
        } else {
            var getDiv = document.getElementById("removebtn");
            getDiv.style.visibility = "visible";
        }
    }

    var getbtnedit = document.getElementById("btnedit");
    getbtnedit.onclick = function() {
        cnt++;
        if (cnt === 1) {

            var getTitledetail = document.getElementById("title-detail");
            var getdescdetail = document.getElementById("desc-detail");
            getTitledetail.removeAttribute("readonly");
            getdescdetail.removeAttribute("readonly");
            getTitledetail.focus();
            getbtnedit.innerHTML = "DONE";
            getTitledetail.style.cursor = "pointer";
            getdescdetail.style.cursor = "pointer";
        } else {

            var getDiv = document.getElementById("removebtn");
            getDiv.style.visibility = "visible";

            var newTitle = document.getElementById("title-detail").value;
            var newDesc = document.getElementById("desc-detail").value;
            get.innerHTML = newTitle;
            get.nextSibling.innerHTML = newDesc;
            getShowDiv.style.display = "none";
            getbtnedit.innerHTML = "EDIT";
            document.getElementById("title-detail").readOnly = true;
            document.getElementById("desc-detail").readOnly = true;

            document.getElementById("title-detail").style.cursor = "default";
            document.getElementById("desc-detail").style.cursor = "default";

        }
    }

    var getbackbtn = document.getElementById("backbtn");
    getbackbtn.onclick = function() {
        var getDiv = document.getElementById("removebtn");
        getDiv.style.visibility = "visible";

        getShowDiv = document.getElementById("details");
        getShowDiv.style.display = "none";
    }

}




function removeAll() {
    var getUl = document.getElementById("item-list");
    getUl.innerHTML = "";
    count = 0;
    if (count == 1) {
        var getfig = document.getElementById("caption");
        getfig.innerHTML = "REMOVE";
    }
    if (count === 0) {
        var getDiv = document.getElementById("removebtn");
        getDiv.style.visibility = "hidden";
    }
}