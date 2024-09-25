
// Helper function to lighten a hex color
export const lightenHexColor = (hex: string, percent: number): string => {
    // Remove the leading '#' if present
    hex = hex.replace(/^#/, '');
  
    // Convert shorthand hex to full hex
    if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
    }
  
    // Parse the hex color
    let num = parseInt(hex, 16);
  
    // Extract RGB components
    let r = (num >> 16) + Math.round(255 * (percent / 100));
    let g = ((num >> 8) & 0x00FF) + Math.round(255 * (percent / 100));
    let b = (num & 0x0000FF) + Math.round(255 * (percent / 100));
  
    // Ensure values are within bounds
    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));
  
    // Convert back to hex and return
    return `#${(r << 16 | g << 8 | b).toString(16).padStart(6, '0')}`;
};