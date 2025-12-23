import styles from './CharacterCard.module.css';

export const CharacterCard = ({ character }) => {
    return (
        <div className={styles.card}>
            <img
                src={character.image}
                alt={character.name}
                className={styles.image}
            />
            <div className={styles.info}>
                <h3 className={styles.name}>{character.name}</h3>
                <p className={styles.details}>
                    {character.species} - {character.status}
                </p>
            </div>
        </div>
    );
};

