import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				short_name: 'Dashboard',
				name: 'User Dashboard',
				description:
					'Панель управления для мониторинга пользователей и активности, просмотр информации по мультфильму Рик и Морти',
				icons: [
					{
						src: 'favicon.ico',
						sizes: '64x64 32x32 24x24 16x16',
						type: 'image/x-icon',
					},
					{
						src: 'logo192.png',
						type: 'image/png',
						sizes: '192x192',
					},
					{
						src: 'logo512.png',
						type: 'image/png',
						sizes: '512x512',
					},
				],
				start_url: '.',
				display: 'standalone',
				theme_color: '#1e88e5',
				background_color: '#1e88e5',
				orientation: 'any',
			},
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
			},
		}),
	],
	resolve: {
		alias: {
			'@': '/src',
			'@app': '/src/app',
			'@pages': '/src/pages',
			'@widgets': '/src/widgets',
			'@features': '/src/features',
			'@entities': '/src/entities',
			'@shared': '/src/shared',
		},
	},
});
