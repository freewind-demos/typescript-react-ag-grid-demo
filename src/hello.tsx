import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

const columnDefs = [{
  headerName: "Make", field: "make"
}, {
  headerName: "Model", field: "model"
}, {
  headerName: "Price", field: "price"
}]

const rowData = [{
    make: "Toyota", model: "Celica", price: 35000
  }, {
    make: "Ford", model: "Mondeo", price: 32000
  }, {
    make: "Porsche", model: "Boxter", price: 72000
  }]
;

export default function Hello() {
  return <div>
    <h1>Hello React-AgGrid</h1>
    <div
      className="ag-theme-balham"
      style={{
        height: '500px',
        width: '600px'
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}>
      </AgGridReact>
    </div>
  </div>
};
