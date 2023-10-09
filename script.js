add = document.getElementById("add");
add.addEventListener("click", dataadding);
datashowing();
function dataadding() {
    console.log("Its working..............");

    tilte = document.getElementById("title").value;
    descri = document.getElementById("descri").value;
    date = document.getElementById("date").value;

    if ((tilte || descri || date) == "") {
        alert("please Fill This Boxes");
    } else {


        if (localStorage.getItem("dataJson") == null) {

            dataarrayjson = [];

            dataarrayjson.push([tilte, descri, date]);

            localStorage.setItem("dataJson", JSON.stringify(dataarrayjson));
        } else {

            dataarrayjsonstr = localStorage.getItem("dataJson");


            dataarrayjson = JSON.parse(dataarrayjsonstr);
            dataarrayjson.push([tilte, descri, date]);

            localStorage.setItem("dataJson", JSON.stringify(dataarrayjson));
        }


        datashowing();
    }
}

function datashowing() {
    if (localStorage.getItem("dataJson") == null) {

        dataarrayjson = [];

        localStorage.setItem("dataJson", JSON.stringify(dataarrayjson));
    } else {

        dataarrayjsonstr = localStorage.getItem("dataJson");


        dataarrayjson = JSON.parse(dataarrayjsonstr);

    }

    tablebody = document.getElementById("tableBody");

    data = "";

    dataarrayjson.forEach((element, index) => {

        data += `
            <tr>
              <th scope="row">${index + 1}</th>
              <td>${element[0]}</td>
              <td>${element[1]}</td>
              <td>${element[2]}</td>
              <td><button class="btn btn-danger" type="button" onclick="deleted(${index})" >Delete</button>
              </td>
            </tr>
            `


    });




    tablebody.innerHTML = data;



}

function deleted(datad) {

    dataarrayjsonstr = localStorage.getItem("dataJson");


    dataarrayjson = JSON.parse(dataarrayjsonstr);
    dataarrayjson.splice(datad, 1);

    localStorage.setItem("dataJson", JSON.stringify(dataarrayjson));

    datashowing();
}

function ClearAll() {

    if (confirm("Are your sure your data is permently delete")) {

        localStorage.clear()

        dataadding()
    }
}
