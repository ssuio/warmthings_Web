import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom'

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';

const divStyle= {
		backgroundColor: 'blue',
		height: '1500px',
		width: '100%',
	};

export default class App extends React.Component{
	
	render(){
		return(
			<HashRouter basename="/basename">
			  	<div>
					<Link to="/">Layout</Link>
					<Link to="/archives">Archives</Link>
					<Link to="/settings">Settings</Link>
					<div style={divStyle}></div>
					<p >paragraph</p>
			    </div>
		  	</HashRouter>
		);
	}
	

}
ReactDOM.render( <App /> , document.getElementById('app'));


// class App extends React.Component {
//   render() {
//     return (
//       <Router history={hashHistory}>
//         <Route path="/" component={Layout}>
//           <IndexRoute component={Featured}></IndexRoute>
//           <Route path="archives" component={Archives}></Route>
//           <Route path="settings" component={Settings}></Route>
//         </Route>
//       </Router>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('app'));