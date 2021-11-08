/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './style.css';
// import Table from 'react-bootstrap/Table'
// import { Table, Input } from 'antd';
// import axios from 'axios';
// import { userColumns } from './columns';
// import { useTableSearch } from './useTableSearch';
// const { Search } = Input

// Search = query => {
//     const url = `http://localhost:8080/openofficeapi/search=${query}`;
//     const token = {};
//     this.token = token;

//     fetch(url)
//       .then(results => results.json())
//       .then(data => {
//         if (this.token === token) {
//           this.setState({ building: data.results });
//         }
//       });
//   };
// class OpenOfficeComponent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={openoffices:[]};
//   };

// componentDidMount(){
//   // this.Search();
//   Search = (query) => {
//     fetch(`http://localhost:8080/openofficeapi/search`)
//       .then(res => res.json())
//       .then(results => {
//         this.setState({openoffices:results
//         });
//       })
//       .catch(error => {
//         console.log('Error fetching and parsing data', error);
//       });
//   };
// };

// Search = (query) => {
//   fetch(`http://localhost:8080/openofficeapi/search`)
//     .then(res => res.json())
//     .then(results => {
//       this.setState({openoffices:results
//       });
//     })
//     .catch(error => {
//       console.log('Error fetching and parsing data', error);
//     });
// }




const List = (props) => {
  const [showResults, setShowResults] = React.useState(false)
  const show = () => setShowResults(true)
  const [searchTerm, setSearch]= React.useState('');
  // const [Filterdata, setFilter] = useState([]);
  // const [searchTerm, setSearch] = useState([]);


  const handleSearch = (event) =>{
    setSearch(event.target.value);
  }
//   const handleSearch = (event) =>{
//       // setSearch(event.target.value);
//      const searchTerm = event.target.value;
//      setSearch(searchTerm); 
//      const newFilter = repos.filter((repo)=>{
//         return repo.building.includes(searchTerm.toLowerCase());
//       });
    
//     if (searchTerm === ""){
//       setFilter([]);
//     }else {
//       setFilter(newFilter)
//     }
//     };
// const clearInput = () => {
//   setFilter([]);
// }


  const { repos } = props;
  console.log(JSON.stringify(repos));
  if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
  // render()
  return (
  
    <ul>
      <h2 className='list-head'>Search for an Open Office...</h2>
      <div>
      <label>Location: </label>
      <input type="text" onChange={handleSearch} />
      </div>
      <div>
      <label>Building: </label>
      <input type="text" onChange={handleSearch} />
      </div>
      <div>
      <label>Floor: </label>
      <input type="text" onChange={handleSearch} />
      </div>
      <div>
      <label>Date: </label>
      <input type="datetime-local" onChange={handleSearch} />
      </div>
      <button type= "submit" formmethod = "GET" formaction="" onClick={show}> FindAll </button>
     {/* <button> { showResults ? <Results /> : null }</button> */}
     <div class="results">
<table responsive striped> 
        <thead>
          <tr>
            <th>Location</th>
            <th>Building</th>
            <th>Floor</th>
            <th>Desk</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* /* {repos.map((repo)=>{ return( */}
       {repos.filter((repo) => {
        if (searchTerm === ""){
          return repo;
        }else if (repo.location.toLowerCase().includes(searchTerm.toLowerCase())||repo.building.toLowerCase().includes(searchTerm.toLowerCase())||repo.floor.toLowerCase().includes(searchTerm.toLowerCase())){
              return repo.location || repo.building||repo.floor;}
        }).map((repo) => {
        return (
    <tr>
      <td> {repo.location}</td>
      <td>{repo.building}</td>
      <td>{repo.floor}</td>
      <td>{repo.desk}</td>
      <td><button>Reserve</button></td>
    </tr>
      );
    })}
  </tbody>
        </table>
        </div>
  
  
  </ul>
    );
  };


  //click show?
//   const Results = () => (
//   <div class="results" onClick={show}>

// <table responsive striped> 
//         <thead>
//           <tr>
//             <th>Location</th>
//             <th>Building</th>
//             <th>Floor</th>
//             <th>Desk</th>
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//       {repos.map((repo) => {
//         return (
//     <tr>
//       <td> {repo.location}</td>
//       <td>{repo.building}</td>
//       <td>{repo.floor}</td>
//       <td>{repo.desk}</td>
//       <td><button>Reserve</button></td>
//     </tr>
//       );
//     })}
//   </tbody>
//         </table>
//         </div>
// );

export default List;