
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				blue: {
					100: '#e6eeff',
					200: '#c4d4ff',
					300: '#95b0ff',
					400: '#6687ff',
					500: '#4766ff',
					600: '#3b57e6',
					700: '#2f47cc',
					800: '#2337b3',
					900: '#172799',
				},
				orange: {
					100: '#fff0e6',
					200: '#ffd9c4',
					300: '#ffb995',
					400: '#ff9666',
					500: '#ff7a47',
					600: '#e66e3f',
					700: '#cc6237',
					800: '#b3562f',
					900: '#994a27',
				},
				green: {
					100: '#e6ffe6',
					200: '#c4ffc4',
					300: '#95ff95',
					400: '#66ff66',
					500: '#47ff47',
					600: '#3fe63f',
					700: '#37cc37',
					800: '#2fb32f',
					900: '#279927',
				},
				purple: {
					100: '#f0e6ff',
					200: '#d9c4ff',
					300: '#b995ff',
					400: '#9966ff',
					500: '#7a47ff',
					600: '#6e3fe6',
					700: '#6237cc',
					800: '#562fb3',
					900: '#4a2799',
				},
				pink: {
					100: '#ffe6f0',
					200: '#ffc4d9',
					300: '#ff95b9',
					400: '#ff6699',
					500: '#ff477a',
					600: '#e63f6e',
					700: '#cc3762',
					800: '#b32f56',
					900: '#99274a',
				},
				cyan: {
					100: '#e6fbff',
					200: '#c4f6ff',
					300: '#95f0ff',
					400: '#66e8ff',
					500: '#47e0ff',
					600: '#3fcce6',
					700: '#37b8cc',
					800: '#2fa4b3',
					900: '#279099',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1'
					},
					'100%': {
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
