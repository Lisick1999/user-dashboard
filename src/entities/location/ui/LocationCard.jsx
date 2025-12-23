import styles from './LocationCard.module.css';

export const LocationCard = ({ location }) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h3 className={styles.name}>{location.name}</h3>
                <p className={styles.details}>
                    {location.type} - {location.dimension}
                </p>
            </div>
        </div>
    );
};

