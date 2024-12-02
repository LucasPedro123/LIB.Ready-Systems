"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfig = exports.setConfig = void 0;
let config = {
    primary: '#333',
    secondary: '#666',
    font: 'Arial',
};
const setConfig = (userConfig) => {
    config = userConfig;
};
exports.setConfig = setConfig;
const getConfig = () => {
    if (!config) {
        throw new Error("Config has not been set!");
    }
    return config;
};
exports.getConfig = getConfig;
