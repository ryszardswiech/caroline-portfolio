import React from 'react';
import PortfolioBoxes from '../../components/PortfolioBoxes/PortfolioBoxes';
import styles from './TitleView.module.scss';
// import variable from '../../style.module.scss';


const TitleView = () => (
    <div className={styles.titleView}>
        <PortfolioBoxes />
    </div>
);

export default TitleView;