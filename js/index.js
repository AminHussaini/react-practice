// NOTE Youtube Video
// ReactDOM.render(<h1>Hello, everyone!</h1>,document.getElementById('root'));

// NOTE Task 1
// ReactDOM.render(<h1>Hello world</h1>,document.getElementById("root"))

// NOTE Task 2
// ReactDOM.render(<ul><li>Apple</li><li>Orange</li><li>Banana</li></ul>,document.getElementById("root"))

// NOTE Task 3

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a
//               className="nav-link disabled"
//               href="#"
//               tabindex="-1"
//               aria-disabled="true"
//             >
//               Disabled
//             </a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// }
// function MainContent() {
//   return (
//     <h1>
//       I'm Learning React!
//     </h1>
//   )
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>
//   ,
//   document.getElementById("root")
// )

// NOTE Task 4
// const h1 = document.createElement("h1");
// h1.textContent = "This is Imperative";
// h1.className = "Header";
// document.getElementById("root").append(h1); 

// NOTE Task 5 JSX 

const h1 = document.createElement("h1");
h1.textContent = "This is Imperative";
h1.className = "Header";

// console.log(h1)
// return
{/* <h1 class="Header">This is Imperative</h1> */}


const element = <h1 className="header"> This is JSX</h1> ; 
// console.log(element);
// return 
// {
//   "type": "h1",
//   "key": null,
//   "ref": null,
//   "props": {
//       "className": "header",
//       "children": " This is JSX"
//   },
//   "_owner": null,
//   "_store": {}
// }
const page = (
  <nav>
    <h1 className="header">Website</h1>
    <ul>
      <li> Pricing</li>
      <li> About  </li>
      <li> Contact </li>
    </ul>
  </nav>
);

ReactDOM.render(
  page,
  document.getElementById('root')
);