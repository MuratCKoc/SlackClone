import React, {Component} from 'react';
import ChannelForm from './ChannelForm.jsx';
import ChannelList from './ChannelList.jsx';

class ChannelSection extends Component {
	render() {
		return (
			<div>
				<ChannelList 
				{...this.props} //copy props from parent
					// channels={this.props.channels}
					// setChannel={this.props.setChannel}
				/>
				<ChannelForm {...this.props} />
			</div>
		)
	}

}

ChannelSection.propTypes = {
	channels: React.PropTypes.array.isRequired;
	setChannels: React.PropTypes.func.isRequired;
	addChannels: React.PropTypes.func.isRequired;

}

export default ChannelSection