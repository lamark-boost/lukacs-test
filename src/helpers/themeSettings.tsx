"use client";

// useThemeSettings.ts
import { ThemeSettings } from './pageStructure';

export const updateThemeSettingsProperty = <K extends keyof ThemeSettings>(themeSettings: ThemeSettings, key: K, value: ThemeSettings[K]): ThemeSettings => {
  return {
    ...themeSettings,
    [key]: value
  };
};

