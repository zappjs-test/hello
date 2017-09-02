import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
<div className={styles.header}>
    <h1>
        {this.props.title}
    </h1>
</div>
        );
    }
}

Header.defaultProps({
    title: 'Hello'
});

Header.propTypes = {
    title: PropTypes.string
};

export default connect()(Home);
