import { parseStyle, StyleNotFoundError } from './parser.mjs';
import { listStyles } from './styles.mjs';

export async function handleGetPalette({ style, mode }) {
  try {
    const parsed = await parseStyle(style);

    if (parsed.isFreeform) {
      return {
        content: [{
          type: 'text',
          text: JSON.stringify({
            style,
            note: 'Freeform is intentionally unopinionated — it has no predefined palette. Define your own colors based on the project context.',
          }, null, 2),
        }],
      };
    }

    let result;
    if (mode === 'light') {
      result = { style, mode: 'light', palette: parsed.colors };
    } else if (mode === 'dark') {
      result = {
        style,
        mode: 'dark',
        palette: Object.keys(parsed.darkColors).length > 0
          ? parsed.darkColors
          : parsed.colors,
        note: Object.keys(parsed.darkColors).length === 0
          ? 'No dedicated dark palette found. Showing default palette.'
          : undefined,
      };
    } else {
      result = {
        style,
        light: parsed.colors,
        dark: Object.keys(parsed.darkColors).length > 0
          ? parsed.darkColors
          : undefined,
      };
    }

    return {
      content: [{ type: 'text', text: JSON.stringify(result, null, 2) }],
    };
  } catch (err) {
    if (err instanceof StyleNotFoundError) {
      return {
        isError: true,
        content: [{ type: 'text', text: err.message }],
      };
    }
    throw err;
  }
}
