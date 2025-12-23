import { CharacterCard } from '@/entities/character';
import { LocationCard } from '@/entities/location';
import { EpisodeCard } from '@/entities/episode';
import { fetchCharacters } from '@/entities/character';
import { fetchLocations } from '@/entities/location';
import { fetchEpisodes } from '@/entities/episode';
import { useInfinityScroll } from '../model';
import styles from './InfinityScrollList.module.css';

const CATEGORY_CONFIG = {
    character: {
        fetchFn: fetchCharacters,
        title: 'Персонажи',
        renderCard: (item) => <CharacterCard key={item.id} character={item} />,
    },
    location: {
        fetchFn: fetchLocations,
        title: 'Локации',
        renderCard: (item) => <LocationCard key={item.id} location={item} />,
    },
    episode: {
        fetchFn: fetchEpisodes,
        title: 'Эпизоды',
        renderCard: (item) => <EpisodeCard key={item.id} episode={item} />,
    },
};

export const InfinityScrollList = ({ category }) => {
    const config = CATEGORY_CONFIG[category];
    const { items, loading, hasMore, error } = useInfinityScroll({
        fetchFn: config.fetchFn,
        category,
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{config.title}</h2>

            <div className={styles.list}>
                {items.map((item) => config.renderCard(item))}
            </div>

            {loading && (
                <div className={styles.loading}>Загрузка дополнительных элементов...</div>
            )}
            {error && <div className={styles.error}>Ошибка: {error}</div>}
            {!hasMore && items.length > 0 && (
                <div className={styles.noMore}>Больше нет элементов для загрузки.</div>
            )}
            {!hasMore && items.length === 0 && (
                <div className={styles.noItems}>Элементы не найдены</div>
            )}
        </div>
    );
};

