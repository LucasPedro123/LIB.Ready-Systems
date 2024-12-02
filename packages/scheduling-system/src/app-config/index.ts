interface AppConfig {
    primary: string;
    secondary: string;
    tertiary?: string;
    font: string;
    font_size?: string;
    font_weight?: string;
    font_style?: string;
  }
  
let config: AppConfig | null = {
    primary: '#333',
    secondary: '#666',
    font: 'Arial',
  };
  
  export const setConfig = (userConfig: AppConfig) => {
    config = userConfig;
  };
  
  export const getConfig = (): AppConfig => {
    if (!config) {
      throw new Error("Config has not been set!");
    }
    return config;
  };
  