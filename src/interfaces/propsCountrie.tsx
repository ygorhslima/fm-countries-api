/* eslint-disable @typescript-eslint/no-explicit-any */
export interface propsCountrie {
    flag?: string;
    name?: string;
    population?: number;
    region?: string;
    capital?: string;
    nativeName?: string; // Observe a capitalização
    subregion?: string;   // Observe a capitalização
    topLevelDomain?: string[]; // Exemplo: ["af", "al"]
    currencies?: Array<{ name: string }>; // Array de objetos
    languages?: Array<{ name: string }>;   // Array de objetos
    onBack?: () => void;
    // ... outras props
}