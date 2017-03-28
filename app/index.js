import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Archives from './pages/Archives';
import Settings from './pages/Settings';
import Chicken from './animals/Chicken';
import Dog from './animals/Dog';

const divStyle= {
		backgroundColor: 'blue',
		height: '1500px',
		width: '100%',
	};

export default class App extends React.Component{
	
	render(){
		return(
			<Router>
			  	<div>
					<Link to="/">Layout</Link>
					<Link to="/chicken">Chicken</Link>
					<Link to="/dog">Dog</Link>
					<Route path="/" component={Layout}/>
					<Route path="/chicken" title="chicken" component={Chicken}/>
					<Route path="/dog" component={Dog}/>

					<div style={divStyle}></div>
					<p >paragraph</p>
			    </div>
		  	</Router>
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