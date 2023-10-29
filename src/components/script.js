// import Stocks from "./Stocks"
// import { Route, Link } from 'react-router-dom';

let arr = [];
let indices = ["NIFTY%20AUTO", "NIFTY%20BANK", "NIFTY%20CONSR%20DURBL", "NIFTY%20FINSRV25%2050", "NIFTY%20FIN%20SERVICE", "NIFTY%20FMCG", "NIFTY%20HEALTHCARE", "NIFTY%20IT", "NIFTY%20MEDIA", "NIFTY%20METAL", "NIFTY%20PHARMA", "NIFTY%20REALTY"]
let size = indices.length;
for (let i = 0; i < size; i++) {
    fetch(`http://127.0.0.1:5000/sector/${indices[i]}`).then((data) => {
        return data.json();
    }).then((objectData) => {
        // console.log(objectData)
        let count = 0;
        objectData.map((values) => {
            if (count === 0) {
                arr.push(values);
                count++;
            }
            return console.log(values);
        });
    })
}


function funCall() {
    let tableData = "";
    let counter = 1;
    setTimeout((props) => {
        for (let i = 0; i < size; i++) {
            // console.log(counter);
            if (arr[i] !== undefined) {
            tableData += `<tr key={index}>
            <td>${counter}</td>
            <td><a href="http://127.0.0.1:8887/src/components/stocks.html">${arr[i].index}</a></td>
            <td>${arr[i].open}</td>
            <td>${arr[i].last}</td>
            <td>${arr[i].high}</td>
            <td>${arr[i].low}</td>
            <td>${arr[i].previousClose}</td>
            <td>${arr[i].variation}</td>
            </tr>`;
                counter++;
            }
        }
        document.getElementById("table_body").innerHTML = tableData;
    }, 1000);
}

// funCall()