// import { render } from '@testing-library/react';
// import React from 'react'

function Array() {
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
  return arr;
}

export default Array();