// global dependencies
import React from 'react';

// local dependencies
import styles from './ScrollIndicator.module.scss';

interface ScrollIndicatorState {
  scroll: number;
}

class ScrollIndicator extends React.Component<any, ScrollIndicatorState> {
  constructor(props: any) {
    super(props);
    this.state = {
      scroll: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollProgress);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollProgress);
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;
    this.setState({ scroll: scrolled });
  };

  render() {
    const { scroll } = this.state;
    return (
      <div className={styles.progressContainerStyle}>
        <div
          className={styles.progressBarStyle}
          style={{ width: `${scroll}%` }}
        />
      </div>
    );
  }
}

export default ScrollIndicator;
