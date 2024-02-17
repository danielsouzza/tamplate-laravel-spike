import {computed, onMounted} from 'vue';
import * as themeColors from '@/Theme/LightTheme';
import * as DarkThemeColors from '@/Theme/DarkTheme';
import { useCustomizerStore } from '@/Stores/customizer';

let customizer = null

onMounted(()=>{
    customizer = useCustomizerStore();
})

const getPrimary = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.primary;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors?.PURPLE_THEME.colors.primary;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors?.GREEN_THEME.colors.primary;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors?.CYAN_THEME.colors.primary;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors?.ORANGE_THEME.colors.primary;
    } else if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors?.DARK_AQUA_THEME.colors.primary;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors?.DARK_PURPLE_THEME.colors.primary;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors?.DARK_GREEN_THEME.colors.primary;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors?.DARK_CYAN_THEME.colors.primary;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors?.DARK_ORANGE_THEME.colors.primary;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors?.DARK_BLUE_THEME.colors.primary;
    } else {
        return themeColors.BLUE_THEME.colors.primary;
    }
});

const getLightPrimary = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.lightprimary;
    }
    if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.lightprimary;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.lightprimary;
    } else {
        return themeColors.BLUE_THEME.colors.lightprimary;
    }
});

const getSecondary = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.secondary;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.secondary;
    } else {
        return themeColors.BLUE_THEME.colors.secondary;
    }
});

const getLightSecondary = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.lightsecondary;
    } if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.lightsecondary;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.lightsecondary;
    } else {
        return themeColors.BLUE_THEME.colors.lightsecondary;
    }
});

const getTextGrey100 = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.grey100;
    } if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.grey100;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.grey100;
    } else {
        return themeColors.BLUE_THEME.colors.grey100;
    }
});


const getLightborder = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.borderColor;
    } if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.borderColor;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.borderColor;
    } else {
        return themeColors.BLUE_THEME.colors.borderColor;
    }
});

const getWarning = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.warning;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.warning;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.warning;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.warning;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.warning;
    } if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.warning;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.warning;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.warning;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.warning;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.warning;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.warning;
    } else {
        return themeColors.BLUE_THEME.colors.warning;
    }
});

const getError = computed(() => {
    if (customizer?.actTheme === 'AQUA_THEME') {
        return themeColors.AQUA_THEME.colors.error;
    } else if (customizer?.actTheme === 'PURPLE_THEME') {
        return themeColors.PURPLE_THEME.colors.error;
    } else if (customizer?.actTheme === 'GREEN_THEME') {
        return themeColors.GREEN_THEME.colors.error;
    } else if (customizer?.actTheme === 'CYAN_THEME') {
        return themeColors.CYAN_THEME.colors.error;
    } else if (customizer?.actTheme === 'ORANGE_THEME') {
        return themeColors.ORANGE_THEME.colors.error;
    } if (customizer?.actTheme === 'DARK_AQUA_THEME') {
        return DarkThemeColors.DARK_AQUA_THEME.colors.error;
    } else if (customizer?.actTheme === 'DARK_PURPLE_THEME') {
        return DarkThemeColors.DARK_PURPLE_THEME.colors.error;
    } else if (customizer?.actTheme === 'DARK_GREEN_THEME') {
        return DarkThemeColors.DARK_GREEN_THEME.colors.error;
    } else if (customizer?.actTheme === 'DARK_CYAN_THEME') {
        return DarkThemeColors.DARK_CYAN_THEME.colors.error;
    } else if (customizer?.actTheme === 'DARK_ORANGE_THEME') {
        return DarkThemeColors.DARK_ORANGE_THEME.colors.error;
    } else if (customizer?.actTheme === 'DARK_BLUE_THEME') {
        return DarkThemeColors.DARK_BLUE_THEME.colors.error;
    } else {
        return themeColors.BLUE_THEME.colors.error;
    }
});


const getLight100 = computed(() => {
    if (
        customizer?.actTheme === 'AQUA_THEME' ||
        customizer?.actTheme === 'PURPLE_THEME' ||
        customizer?.actTheme === 'GREEN_THEME' ||
        customizer?.actTheme === 'CYAN_THEME' ||
        customizer?.actTheme === 'ORANGE_THEME'
    ) {
        return themeColors.AQUA_THEME.colors.grey100;
    } else if (
        customizer?.actTheme === 'DARK_AQUA_THEME' ||
        customizer?.actTheme === 'DARK_PURPLE_THEME' ||
        customizer?.actTheme === 'DARK_GREEN_THEME' ||
        customizer?.actTheme === 'DARK_CYAN_THEME' ||
        customizer?.actTheme === 'DARK_ORANGE_THEME' ||
        customizer?.actTheme === 'DARK_BLUE_THEME'
    ) {
        return DarkThemeColors.DARK_AQUA_THEME.colors.grey100;
    } else {
        return themeColors.BLUE_THEME.colors.grey100;
    }
});

export { getPrimary, getSecondary, getLightPrimary, getLightSecondary, getLight100,getLightborder,getTextGrey100,getWarning,getError };
