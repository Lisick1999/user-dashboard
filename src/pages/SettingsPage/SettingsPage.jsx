import React from 'react';
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
import './SettingsPage.css';

const SettingsPage = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

	const settingCards = [
		{
			icon: <NotificationsIcon className="setting-icon" />,
			label: 'Уведомления',
			value: 'Включено',
			control: <Switch defaultChecked color="primary" />,
		},
		{
			icon: <PaletteIcon className="setting-icon" />,
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
			icon: <LanguageIcon className="setting-icon" />,
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
			icon: <LockIcon className="setting-icon" />,
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
		<Container maxWidth="lg" className="settings-page">
			<Box className="settings-header">
				<Typography variant="h2" className="settings-title">
					Настройки аккаунта
				</Typography>
				<Typography variant="h6" className="settings-subtitle">
					Управление параметрами вашего аккаунта
				</Typography>
			</Box>

			<Grid container spacing={3} className="settings-grid">
				{settingCards.map((setting, index) => (
					<Grid key={index} size={{ xs: 12, md: 6 }}>
						<Card className="setting-card">
							<CardContent className="setting-content">
								<Box
									className={
										isMobile
											? 'setting-content-mobile'
											: 'setting-content-desktop'
									}
								>
									{setting.icon}

									<Box className="setting-info">
										<Typography variant="h6" className="setting-name">
											{setting.label}
										</Typography>
										<Typography
											variant="body2"
											className="setting-value"
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
						? 'actions-container actions-mobile'
						: 'actions-container actions-desktop'
				}
			>
				<Button variant="contained" className="action-button">
					Сохранить изменения
				</Button>
				<Button variant="outlined" className="action-button">
					Сбросить настройки
				</Button>
			</Box>
		</Container>
	);
};

export default SettingsPage;
