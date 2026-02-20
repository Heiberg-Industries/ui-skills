/**
 * WCAG 2.1 contrast ratio utilities.
 */

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  if (hex.length === 8) hex = hex.slice(0, 6);
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

function srgbToLinear(value) {
  const v = value / 255;
  return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
}

function relativeLuminance({ r, g, b }) {
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

export function contrastRatio(hex1, hex2) {
  const l1 = relativeLuminance(hexToRgb(hex1));
  const l2 = relativeLuminance(hexToRgb(hex2));
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return Math.round(((lighter + 0.05) / (darker + 0.05)) * 100) / 100;
}

export function isLargeText(fontSize, fontWeight) {
  if (fontWeight >= 700 && fontSize >= 14) return true;
  return fontSize >= 18;
}

export function checkWcag(ratio, fontSize, fontWeight) {
  const large = isLargeText(fontSize, fontWeight);
  return {
    aa: {
      normalText: ratio >= 4.5 ? 'pass' : 'fail',
      largeText: ratio >= 3 ? 'pass' : 'fail',
      uiComponents: ratio >= 3 ? 'pass' : 'fail',
    },
    aaa: {
      normalText: ratio >= 7 ? 'pass' : 'fail',
      largeText: ratio >= 4.5 ? 'pass' : 'fail',
    },
  };
}

export async function handleCheckContrast({ foreground, background, fontSize, fontWeight }) {
  const ratio = contrastRatio(foreground, background);
  const large = isLargeText(fontSize, fontWeight);
  const wcag = checkWcag(ratio, fontSize, fontWeight);

  let recommendation;
  if (ratio >= 7) recommendation = 'Excellent contrast. Passes all WCAG levels.';
  else if (ratio >= 4.5) recommendation = 'Good contrast. Passes WCAG AA for all text sizes.';
  else if (ratio >= 3) recommendation = 'Sufficient for large text and UI components only. Fails AA for normal text.';
  else recommendation = 'Insufficient contrast. Fails WCAG AA for all text sizes.';

  return {
    content: [{
      type: 'text',
      text: JSON.stringify({
        foreground,
        background,
        contrastRatio: ratio,
        isLargeText: large,
        wcag,
        recommendation,
      }, null, 2),
    }],
  };
}
