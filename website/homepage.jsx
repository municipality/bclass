import React from 'react';
import ReactDOM from 'react-dom';

import styles from './homepage.scss';

const Component = () => <div className={styles.homeslice}>Here</div>;

ReactDOM.render(<Component />, document.getElementById('root'));
