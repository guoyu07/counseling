var SettingsDashboard = React.createClass({
    getInitialState: function() {
        return {
            tab : 'Reasons'
        };
    },

    getDefaultProps: function() {
        return {
        };
    },

    selectTab : function(tab) {
        this.setState({tab:tab});
    },

    render: function() {
        return (
            <div>
                <h2>Counseling Check-In Settings</h2>
                <ul className="nav nav-tabs">
                    <Tab active={this.state.tab == 'Reasons'} label={'Reasons'} handleClick={this.selectTab.bind(this, 'Reasons')}/>
                    <Tab active={this.state.tab == 'Visitors'} label={'Visitors'}  handleClick={this.selectTab.bind(this, 'Visitors')}/>
                    <Tab active={this.state.tab == 'Visits'} label={'Visits'}  handleClick={this.selectTab.bind(this, 'Visits')}/>
                    <Tab active={this.state.tab == 'Dispositions'} label={'Dispositions'} handleClick={this.selectTab.bind(this, 'Dispositions')}/>
                </ul>
                <div style={{marginTop:'1em'}}>
                    <Content tab={this.state.tab} />
                </div>
            </div>
        );
    }

});

var Tab = React.createClass({
    getDefaultProps: function() {
        return {
            active : false,
            label : null
        };
    },

    render: function() {
        return (
            <li role="presentation" onClick={this.props.handleClick} className={this.props.active ? 'active' : null}>
                <a className="pointer">{this.props.label}</a>
            </li>
        );
    }

});

var Content = React.createClass({
    getInitialState: function() {
        return {
        };
    },

    getDefaultProps: function() {
        return {
            tab : null
        };
    },

    render: function() {
        var content = null;
        switch (this.props.tab) {
            case 'Reasons':
            content = <Reasons />
            break;

            case 'Visitors':
            content = <Visitors />
            break;

            case 'Visits':
            content = <Visits />
            break;

            case 'Dispositions':
            content = <Dispositions />
            break;
        }

        return (
            <div>{content}</div>
        );
    }

});

ReactDOM.render(<SettingsDashboard/>, document.getElementById('settings-dashboard'));
