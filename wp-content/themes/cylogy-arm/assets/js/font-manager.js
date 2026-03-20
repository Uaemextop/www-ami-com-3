/**
 * Font Override System - JavaScript Utilities
 * Handles font loading, fallbacks, and management for Aeonik fonts
 */

(function(window, document) {
    'use strict';

    /**
     * Base URL constants (centralized) for font assets.
     * Aeonik core fonts remain on the ARM CDN. Aeonik Fono is assumed to be locally hosted
     * unless a global override (window.AeonikConfig.fonoBase) is provided.
     */
    const AEONIK_CDN_BASE = 'https://cdn.designsystem.arm.com/fonts/aeonik/';
    // Local path (relative to site root) where Aeonik Fono Semibold should live.
    // Example absolute fetch will be: https://your-domain.com/wp-content/themes/cylogy-arm/assets/fonts/aeonik-fono/AeonikFono-SemiBold.woff2
    const AEONIK_FONO_LOCAL_BASE = '/wp-content/themes/cylogy-arm/assets/fonts/aeonik-fono/';

    /**
     * Font Manager Class
     */
    class FontManager {
        constructor() {
            this.fontsLoaded = false;
            this.fallbackTimeout = 3000; // 3 seconds
            this.debug = false;
            
            // Initialize when DOM is ready
            if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', () => this.init());
            } else {
                this.init();
            }
        }

        /**
         * Initialize the font manager
         */
        init() {
            this.log('Font Manager initializing...');
            
            // Check if Font Loading API is supported
            if ('fonts' in document) {
                this.loadFontsWithAPI();
            } else {
                this.loadFontsWithFallback();
            }

            // Set up event listeners
            this.setupEventListeners();
            
            // Enable debug mode if URL parameter is present
            if (window.location.search.includes('debug-fonts')) {
                this.enableDebugMode();
            }
        }

        /**
         * Load fonts using the modern Font Loading API
         */
        async loadFontsWithAPI() {
            try {
                const fontPromises = [
                    this.loadFont('Aeonik', 400, 'normal'),
                    this.loadFont('Aeonik Medium', 500, 'normal'),
                    this.loadFont('Aeonik Light', 300, 'italic'),
                    this.loadFont('Aeonik Medium', 500, 'italic'),
                    // New: Aeonik Fono (Semibold 600) if present
                    this.loadFont('Aeonik Fono', 600, 'normal')
                ];

                // Set timeout for font loading
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => reject(new Error('Font loading timeout')), this.fallbackTimeout);
                });

                await Promise.race([
                    Promise.all(fontPromises),
                    timeoutPromise
                ]);

                this.onFontsLoaded();
                
            } catch (error) {
                this.log('Font loading failed:', error);
                this.onFontsError();
            }
        }

        /**
         * Load individual font using Font Loading API
         */
        loadFont(family, weight, style) {
            const fileName = this.getFontFileName(family, weight, style);
            const base = this.getBaseUrlForFamily(family);
            const fullUrl = `${base}${fileName}`;
            this.log(`Loading font: ${family} ${weight} ${style} -> ${fullUrl}`);
            const font = new FontFace(family, `url("${fullUrl}")`, {
                weight: weight.toString(),
                style: style,
                display: 'swap'
            });

            document.fonts.add(font);
            return font.load();
        }

        /**
         * Get font file name based on family, weight, and style
         */
        getFontFileName(family, weight, style) {
            const baseNames = {
                'Aeonik': {
                    '400': { 'normal': 'Aeonik-Regular.woff2' },
                },
                'Aeonik Medium': {
                    '500': { 
                        'normal': 'Aeonik-Medium.woff2',
                        'italic': 'Aeonik-MediumItalic.woff2'
                    }
                },
                'Aeonik Light': {
                    '300': { 'italic': 'Aeonik-LightItalic.woff2' }
                },
                // New mapping for Aeonik Fono (Semibold 600)
                'Aeonik Fono': {
                    '600': { 'normal': 'AeonikFono-SemiBold.woff2' }
                }
            };

            return baseNames[family]?.[weight]?.[style] || 'Aeonik-Regular.woff2';
        }

        /**
         * Resolve the base URL for a given font family.
         * Allows future expansion (e.g., moving core Aeonik local) without touching loadFont logic.
         */
        getBaseUrlForFamily(family) {
            if (family === 'Aeonik Fono') {
                // Allow a runtime override (e.g., provided via localized script) else fall back to local theme path
                return (window.AeonikConfig && window.AeonikConfig.fonoBase) ? window.AeonikConfig.fonoBase : AEONIK_FONO_LOCAL_BASE;
            }
            // All other mapped families currently share the Aeonik CDN base
            return AEONIK_CDN_BASE;
        }

        /**
         * Fallback font loading for older browsers
         */
        loadFontsWithFallback() {
            this.log('Using fallback font loading method');
            
            // Create a test element to detect font loading
            const testElement = document.createElement('div');
            testElement.style.cssText = `
                position: absolute;
                left: -9999px;
                top: -9999px;
                font-size: 100px;
                font-family: 'Aeonik', sans-serif;
                visibility: hidden;
            `;
            testElement.textContent = 'AeonikTest';
            document.body.appendChild(testElement);

            // Check if font has loaded by measuring text width
            let attempts = 0;
            const maxAttempts = 30; // 3 seconds with 100ms intervals
            
            const checkFont = () => {
                attempts++;
                const width = testElement.offsetWidth;
                
                // If width has changed or max attempts reached
                if (width > 0 || attempts >= maxAttempts) {
                    document.body.removeChild(testElement);
                    
                    if (width > 0) {
                        this.onFontsLoaded();
                    } else {
                        this.onFontsError();
                    }
                } else {
                    setTimeout(checkFont, 100);
                }
            };

            setTimeout(checkFont, 100);
        }

        /**
         * Handle successful font loading
         */
        onFontsLoaded() {
            //this.log('Fonts loaded successfully');
            this.fontsLoaded = true;
            
            // Update body class
            document.body.classList.remove('fonts-loading');
            document.body.classList.add('fonts-loaded');
            
            // Dispatch custom event
            this.dispatchEvent('aeonikFontsLoaded');
            
            // Remove FOIT (Flash of Invisible Text) prevention
            this.removeFOITPrevention();

            // Auto-apply Aeonik Fono to PrettySimpleHero top line if present.
            // This ensures the element uses the intended semibold display face once the font is ready.
            const heroTop = document.querySelector('.PrettySimpleHero .PrettySimpleHero__top_line');
            if (heroTop) {
                heroTop.style.fontFamily = 'var(--font-family-aeonik-fono, "Aeonik Fono", "Aeonik", sans-serif)';
                heroTop.style.fontWeight = '600';
                //this.log('Applied Aeonik Fono to PrettySimpleHero__top_line');
            }
        }

        /**
         * Handle font loading errors
         */
        onFontsError() {
            //this.log('Font loading failed, using fallback');
            
            // Update body class
            document.body.classList.remove('fonts-loading');
            //document.body.classList.add('fonts-error');
            
            // Dispatch custom event
            this.dispatchEvent('aeonikFontsError');
            
            // Apply fallback styles
            this.applyFallbackStyles();
        }

        /**
         * Remove FOIT prevention styles
         */
        removeFOITPrevention() {
            const foitElements = document.querySelectorAll('.font-loading-hidden');
            foitElements.forEach(element => {
                element.classList.remove('font-loading-hidden');
                element.style.visibility = 'visible';
            });
        }

        /**
         * Apply fallback font styles
         */
        applyFallbackStyles() {
            // const style = document.createElement('style');
            // style.textContent = `
            //     .fonts-error * {
            //         font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
            //     }
            // `;
            // document.head.appendChild(style);
        }

        /**
         * Set up event listeners
         */
        setupEventListeners() {
            // Handle page visibility changes
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden && !this.fontsLoaded) {
                    this.log('Page became visible, rechecking fonts');
                    this.init();
                }
            });

            // Handle dynamic content changes
            const observer = new MutationObserver((mutations) => {
                if (this.fontsLoaded) {
                    mutations.forEach((mutation) => {
                        if (mutation.addedNodes.length) {
                            this.applyFontsToNewContent(mutation.addedNodes);
                        }
                    });
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        /**
         * Apply fonts to dynamically added content
         */
        applyFontsToNewContent(nodes) {
            nodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Apply font classes to new elements
                    if (node.matches && node.matches('.needs-font-loading')) {
                        node.style.fontFamily = 'var(--ads-font-family)';
                    }
                }
            });
        }

        /**
         * Dispatch custom events
         */
        dispatchEvent(eventName) {
            const event = new CustomEvent(eventName, {
                bubbles: true,
                detail: { fontManager: this }
            });
            document.dispatchEvent(event);
        }

        /**
         * Enable debug mode
         */
        enableDebugMode() {
            this.debug = true;
            document.body.classList.add('font-debug-mode');
            
            // Add debug info overlay
            const debugOverlay = document.createElement('div');
            debugOverlay.id = 'font-debug-overlay';
            debugOverlay.style.cssText = `
                position: fixed;
                top: 0;
                right: 0;
                background: rgba(0, 0, 0, 0.8);
                color: white;
                padding: 10px;
                font-family: monospace;
                font-size: 12px;
                z-index: 10000;
                max-width: 300px;
            `;
            debugOverlay.innerHTML = `
                <h4>Font Debug Info</h4>
                <p>Fonts Loaded: <span id="debug-fonts-loaded">${this.fontsLoaded}</span></p>
                <p>Browser Support: <span id="debug-font-api">${'fonts' in document}</span></p>
                <p>User Agent: ${navigator.userAgent.slice(0, 50)}...</p>
            `;
            document.body.appendChild(debugOverlay);
        }

        /**
         * Log debug messages
         */
        log(...args) {
            if (this.debug || window.location.search.includes('debug-fonts')) {
                console.log('[FontManager]', ...args);
            }
        }

        /**
         * Public API methods
         */
        
        /**
         * Check if fonts are loaded
         */
        areFontsLoaded() {
            return this.fontsLoaded;
        }

        /**
         * Preload specific font
         */
        preloadFont(family, weight = 400, style = 'normal') {
            if ('fonts' in document) {
                return this.loadFont(family, weight, style);
            }
            return Promise.resolve();
        }

        /**
         * Get font loading status
         */
        getStatus() {
            return {
                loaded: this.fontsLoaded,
                apiSupported: 'fonts' in document,
                debug: this.debug
            };
        }
    }

    // Initialize font manager
    //window.AeonikFontManager = new FontManager();

    // Expose utility functions
    // window.FontUtils = {
    //     /**
    //      * Apply Aeonik font to specific element
    //      */
    //     applyAeonik: function(element, variant = 'regular') {
    //         const variants = {
    //             'light': 'var(--font-family-aeonik-light)',
    //             'regular': 'var(--font-family-aeonik)',
    //             'medium': 'var(--font-family-aeonik-medium)',
    //             // New helper variant: fono (Semibold)
    //             'fono': 'var(--font-family-aeonik-fono, "Aeonik Fono", "Aeonik", sans-serif)'
    //         };
            
    //         if (element && variants[variant]) {
    //             element.style.fontFamily = variants[variant];
    //         }
    //     },

    //     /**
    //      * Check if Aeonik fonts are available
    //      */
    //     isAeonikAvailable: function() {
    //         return window.AeonikFontManager.areFontsLoaded();
    //     },

    //     /**
    //      * Get current font stack for element
    //      */
    //     getCurrentFont: function(element) {
    //         return window.getComputedStyle(element).fontFamily;
    //     }
    // };

})(window, document);
