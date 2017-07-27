var React = require('react');
var ReactDOM = require('react-dom');
var $ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var fs = eRequire('fs');
var ytdl = eRequire('ytdl-core');
//var loadData = JSON.parse(fs.readFileSync(dataLocation));


class HelloMessage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  	this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {videoId:''};
  }
//  componentDidUpdate:function(){
//  	fs.writeFile(dataLocation,data,format,function(err){
//  		if(err){
//  			console.log(err);
//  		}
//  	})
//  }
  handleSubmit(i){
  	i.preventDefault();
  	//this.setState({videoId:e.target.value});
  	console.log("Submitted "+this.state.videoId);

  	ytdl(this.state.videoId).pipe(fs.createWriteStream('video.flv'));
  }
  handleChange(i){
  	this.setState({videoId:i.target.value});
  	console.log("Typing....");
  }
  render() {
  	var alldata = this.state.mydata;
    return (<div><form>
		      <div className="form-group">
		        
		        <input className="form-control" placeholder="Video URL" onChange={this.handleChange} value={this.state.videoId}/>
		        <button className="btn btn-primary" onClick={this.handleSubmit}>Download</button>
		      </div>
      </form></div>
    );
  }
}

ReactDOM.render(<HelloMessage />, document.getElementById('root'));

