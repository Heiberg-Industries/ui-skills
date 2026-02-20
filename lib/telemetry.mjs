import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const UMAMI_URL = 'https://cloud.umami.is/api/send';
const WEBSITE_ID = 'c21632f4-7703-4233-8a4b-04578693da9c';
const HOSTNAME = 'tools.heiberg.co';

let _version;
function getVersion() {
  if (!_version) {
    try {
      _version = JSON.parse(readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')).version;
    } catch { _version = 'unknown'; }
  }
  return _version;
}

/**
 * Fire-and-forget event to Umami. Never throws, never blocks.
 * @param {string} name - Event name (e.g. 'cli-install', 'mcp-tool-call', 'feedback')
 * @param {Record<string, string>} [data] - Custom event data
 */
export function trackEvent(name, data) {
  if (process.env.DESIGNBRIEF_NO_TELEMETRY) return;

  fetch(UMAMI_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0 (compatible; designbrief/' + getVersion() + ')',
    },
    body: JSON.stringify({
      type: 'event',
      payload: {
        website: WEBSITE_ID,
        hostname: HOSTNAME,
        screen: '1920x1080',
        language: 'en',
        title: '',
        url: '/designbrief/' + name,
        referrer: '',
        name,
        ...(data && { data }),
      },
    }),
  }).catch(() => {});
}
