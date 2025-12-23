import { Component } from 'react';
import styles from './ErrorBoundary.module.css';

export class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className={styles.boundary}>
					<div className={styles.content}>
						<h2>Что-то пошло не так</h2>
						<button
							onClick={() =>
								this.setState({ hasError: false, error: null })
							}
							className={styles.retryBtn}
						>
							Попробуйте снова
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

