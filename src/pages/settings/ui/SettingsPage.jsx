import {
	Container,
	Typography,
	Box,
	Card,
	CardContent,
	Switch,
	FormControl,
	Select,
	MenuItem,
	Button,
	Grid,
	useTheme,
	useMediaQuery,
} from '@mui/material';
import {
	Notifications as NotificationsIcon,
	Palette as PaletteIcon,
	Language as LanguageIcon,
	Lock as LockIcon,
} from '@mui/icons-material';
import styles from './SettingsPage.module.css';

const SettingsPage = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const settingCards = [
		{
			icon: <NotificationsIcon className={styles.settingIcon} />,
			label: 'Уведомления',
			value: 'Включено',
			control: <Switch defaultChecked color="primary" />,
		},
		{
			icon: <PaletteIcon className={styles.settingIcon} />,
			label: 'Тема',
			value: 'Светлая',
			control: (
				<FormControl size="small" sx={{ minWidth: 120 }}>
					<Select value="light" variant="outlined" size="small">
						<MenuItem value="light">Светлая</MenuItem>
						<MenuItem value="dark">Тёмная</MenuItem>
						<MenuItem value="auto">Авто</MenuItem>
					</Select>
				</FormControl>
			),
		},
		{
			icon: <LanguageIcon className={styles.settingIcon} />,
			label: 'Язык',
			value: 'Английский',
			control: (
				<FormControl size="small" sx={{ minWidth: 120 }}>
					<Select value="en" variant="outlined" size="small">
						<MenuItem value="en">English</MenuItem>
						<MenuItem value="ru">Русский</MenuItem>
						<MenuItem value="es">Español</MenuItem>
						<MenuItem value="fr">Français</MenuItem>
					</Select>
				</FormControl>
			),
		},
		{
			icon: <LockIcon className={styles.settingIcon} />,
			label: 'Конфиденциальность',
			value: 'Стандартный',
			control: (
				<Button variant="contained" size="small">
					Изменить
				</Button>
			),
		},
	];

	return (
		<Container maxWidth="lg" className={styles.page}>
			<Box className={styles.header}>
				<Typography variant="h2" className={styles.title}>
					Настройки аккаунта
				</Typography>
				<Typography variant="h6" className={styles.subtitle}>
					Управление параметрами вашего аккаунта
				</Typography>
			</Box>

			<Grid container spacing={3} className={styles.grid}>
				{settingCards.map((setting, index) => (
					<Grid key={index} size={{ xs: 12, md: 6 }}>
						<Card className={styles.card}>
							<CardContent className={styles.cardContent}>
								<Box
									className={
										isMobile
											? styles.contentMobile
											: styles.contentDesktop
									}
								>
									{setting.icon}

									<Box className={styles.info}>
										<Typography variant="h6" className={styles.name}>
											{setting.label}
										</Typography>
										<Typography
											variant="body2"
											className={styles.value}
										>
											{setting.value}
										</Typography>
									</Box>

									<Box>{setting.control}</Box>
								</Box>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			<Box
				className={
					isMobile
						? `${styles.actions} ${styles.actionsMobile}`
						: `${styles.actions} ${styles.actionsDesktop}`
				}
			>
				<Button variant="contained" className={styles.actionButton}>
					Сохранить изменения
				</Button>
				<Button variant="outlined" className={styles.actionButton}>
					Сбросить настройки
				</Button>
			</Box>
		</Container>
	);
};

export default SettingsPage;

