var React = require('react');
var ReactDOM = require('react-dom');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

var fs = eRequire('fs');
var loadData = JSON.parse(fs.readFileSync(dataLocation));


class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mydata: loadData};
  }

  
  render() {
  	var alldata = this.state.mydata;
    return (
      <div>
        <h1>Hello, world!</h1>
        <span>{alldata[1].STU_ID}</span>
      </div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));

