import { useCallback } from 'react';

// Define haptic impact styles to match Capacitor's API slightly
export type HapticStyle = 'light' | 'medium' | 'heavy';
export type HapticType = 'success' | 'warning' | 'error';

/**
 * Hook to handle haptic feedback securely and consistently.
 * Uses navigator.vibrate as a web fallback.
 * Can be easily extended to use @capacitor/haptics if installed.
 */
export const useHaptics = () => {

    /**
     * Trigger a haptic impact (light, medium, heavy)
     */
    const impact = useCallback((style: HapticStyle = 'medium') => {
        try {
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                switch (style) {
                    case 'light':
                        navigator.vibrate(10);
                        break;
                    case 'medium':
                        navigator.vibrate(20);
                        break;
                    case 'heavy':
                        navigator.vibrate(40);
                        break;
                }
            }
        } catch (e) {
            // Ignore errors if vibration is not supported or blocked
            console.debug('Haptics not supported', e);
        }
    }, []);

    /**
     * Trigger a notification haptic (success, warning, error)
     */
    const notification = useCallback((type: HapticType = 'success') => {
        try {
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                switch (type) {
                    case 'success':
                        navigator.vibrate([10, 30, 10]);
                        break;
                    case 'warning':
                        navigator.vibrate([30, 50, 10]);
                        break;
                    case 'error':
                        navigator.vibrate([50, 30, 50, 30]);
                        break;
                }
            }
        } catch (e) {
            console.debug('Hapics not supported', e);
        }
    }, []);

    /**
     * Trigger a selection changed haptic
     * Useful for sliders, pickers, etc.
     */
    const selection = useCallback(() => {
        try {
            if (typeof navigator !== 'undefined' && navigator.vibrate) {
                navigator.vibrate(15);
            }
        } catch (e) {
            console.debug('Haptics not supported', e);
        }
    }, []);

    return {
        impact,
        notification,
        selection
    };
};

export default useHaptics;
