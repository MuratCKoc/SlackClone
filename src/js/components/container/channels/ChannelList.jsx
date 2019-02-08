import React, {Component} from 'react';
import Channel from './Channel.jsx';

class ChannelList extends Component {
	render () {
		return (
		<ul> {
			this.props.channel.map( chan => {
				return <Channel
					channel = {chan}
					setChannel={this.props.setChannel}
				/>
			}) 
		}</ul>
		)
	}
}


ChannelList.propTypes = {
	channel: React.propTypes.array.isRequired;
	setChannel: React.propTypes.func.isRequired;
}

export default ChannelList