import React, { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render() {
        return (
<div className={styles.footer}>
    Copyright
</div>
        );
    }
}

export default connect()(Home);
