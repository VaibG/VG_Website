import React, { Component } from 'react';

let data = [
    {
        name: 'Education',
    },
    {
        name: 'Professional',
    },
    {
        name: 'Leadership',
    },
    {
        name: 'Skills & Interests',
    }
];

class Tabs extends React.Component {
    constructor() {
        super();

        this.state = {
            activeTab: 0,
            data: data,
        }
        this.changeTabOnClick = this.changeTabOnClick.bind(this);
    }

    changeTabOnClick(index) {
        this.setState({
            activeTab: index
        });
    }

    render() {
        return (
            <div className="tabs-body">
                <TabHeader data={this.state.data}
                              click={this.changeTabOnClick}
                              activeId={this.state.activeTab} />
                <TabContent data={this.state.data}
                               activeId={this.state.activeTab}
                               education={this.props.education}
                               work={this.props.work}
                               skills={this.props.skills}
                               interests={this.props.interests}
                               orgs={this.props.orgs} />
            </div>
        )
    }
}

class TabHeader extends React.Component {
    doClick(index, event) {
        this.props.click(index);
    }

    render() {
        let activeClass = this.props.activeId;

        let tabs = this.props.data.map((item, index) => {
            return <li className={(activeClass === index ? 'active' : '')}>
                        <a onClick={this.doClick.bind(this, index)} ><h4>{item.name}</h4></a>
                    </li>
        });

        return (
            <ul className="tabs-header">{tabs}</ul>
        )
    }

}

class TabContent extends React.Component {
    render() {
        let activeClass = this.props.activeId;

        let content = this.props.data.map((item, index) => {
            if (index === 0) {
                return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >{this.props.education}</div>
            }
            if (index === 1) {
                return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >{this.props.work}</div>
            }
            if (index === 2) {
                return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >{this.props.orgs}</div>
            } 
            if (index === 3) {
                return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} >
                <div className='row'>
                    <div className='three columns'>
                    <h2>
                        Skills
                    </h2>
                    </div>
                    <p className="offset-three nine columns info">
                        {this.props.skills}
                    </p>
                </div>
                <div className='row'>
                    <div className='three columns'>
                    <h2>
                        Interests
                    </h2>
                    </div>
                    <p className="offset-three nine columns info">
                        {this.props.interests}
                    </p>
                </div>
                </div>
            }  
            return <div  className={'tabs-textItem ' + (activeClass === index ? 'show' : '')} ><p>{item.text}</p></div>
        });

        return (
            <div className="tabs-content">{content}</div>
        );
    }
}

export default Tabs