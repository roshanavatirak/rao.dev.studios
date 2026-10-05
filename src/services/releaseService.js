// Dynamic release fetcher - automatically pulls latest APK version and download link
const GITHUB_REPO = 'roshanavatirak/Regent-Money';
const BACKEND_URL = 'https://regent-money.onrender.com';

const DEFAULT_RELEASE = {
  version: '1.0.28',
  tagName: 'v1.0.28',
  downloadUrl: `https://github.com/${GITHUB_REPO}/releases/latest/download/regent-money.apk`,
  releaseName: 'Regent Money v1.0.28',
  publishedAt: '',
  sizeMb: null,
};

let cachedRelease = null;

export async function fetchLatestRelease() {
  if (cachedRelease) {
    return cachedRelease;
  }

  // 1. Try GitHub Releases API first (real-time from git tags)
  try {
    const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
      headers: { Accept: 'application/vnd.github.v3+json' },
    });

    if (res.ok) {
      const data = await res.json();
      const tagName = data.tag_name || 'v1.0.28';
      const version = tagName.replace(/^v/, '');
      
      // Locate the APK in release assets
      const apkAsset = data.assets?.find((a) => a.name?.endsWith('.apk'));
      const downloadUrl = apkAsset?.browser_download_url || 
        `https://github.com/${GITHUB_REPO}/releases/download/${tagName}/regent-money.apk`;
      
      const sizeMb = apkAsset?.size ? (apkAsset.size / (1024 * 1024)).toFixed(1) : null;

      cachedRelease = {
        version,
        tagName: tagName.startsWith('v') ? tagName : `v${tagName}`,
        downloadUrl,
        releaseName: data.name || `Regent Money ${tagName}`,
        publishedAt: data.published_at ? new Date(data.published_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
        sizeMb,
      };
      return cachedRelease;
    }
  } catch (err) {
    console.warn('[ReleaseService] GitHub releases check notice:', err.message);
  }

  // 2. Fallback to NestJS backend version-check API
  try {
    const res = await fetch(`${BACKEND_URL}/app/version-check?platform=android`);
    if (res.ok) {
      const data = await res.json();
      const version = data.latestVersion || '1.0.28';
      cachedRelease = {
        version,
        tagName: `v${version}`,
        downloadUrl: data.downloadUrl || DEFAULT_RELEASE.downloadUrl,
        releaseName: `Regent Money v${version}`,
        publishedAt: '',
        sizeMb: null,
      };
      return cachedRelease;
    }
  } catch (err) {
    console.warn('[ReleaseService] Backend version check notice:', err.message);
  }

  // 3. Fallback to default
  return DEFAULT_RELEASE;
}
