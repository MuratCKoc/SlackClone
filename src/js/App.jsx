import React, {Component} from 'react';
import ChannelSection from './container/channels/ChannelSection.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			channels: []
		};
	}
	addChannel(name){
		let {channels} = this.state;
		channels.push({id: channels.length, name});
		this.setState({channels});
		// TODO: Send to Server
	}
	setChannel(activeChannel){
		this.setState({activeChannel});
		// TODO: Get Channels Messages
	}
	render(){
		return (
			<ChannelSection 
				channels={this.state.channels}
			/>
		)
	}
}

export default App