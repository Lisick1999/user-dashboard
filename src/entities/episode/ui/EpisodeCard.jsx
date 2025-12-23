import styles from './EpisodeCard.module.css';

export const EpisodeCard = ({ episode }) => {
    return (
        <div className={styles.card}>
            <div className={styles.info}>
                <h3 className={styles.name}>{episode.name}</h3>
                <p className={styles.details}>
                    {episode.episode} - {episode.air_date}
                </p>
            </div>
        </div>
    );
};

