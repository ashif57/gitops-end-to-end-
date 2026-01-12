import './style.css'

// Access environment variables using import.meta.env
// Note: In Vite, variables must be prefixed with VITE_ to be exposed to the frontend
// We use window.env for runtime variable injection (Kubernetes) and fallback to import.meta.env (local dev/build time)
const appName = window.env?.VITE_APP_NAME || import.meta.env.VITE_APP_NAME
const apiUrl = window.env?.VITE_API_BASE_URL || import.meta.env.VITE_API_BASE_URL

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Environment Variables Demo</h1>
    <div class="card">
      <p>App Name: <span class="env-value">${appName}</span></p>
      <p>API URL: <span class="env-value">${apiUrl}</span></p>
      
      <h1>After push ui autochange proofsuccess</h1>

      <div style="margin-top: 2rem; text-align: left; background: rgba(0,0,0,0.2); padding: 1rem; border-radius: 8px;">
        <p style="font-size: 0.9rem; margin-bottom: 0.5rem; color: #fff;">Code specific:</p>
        <pre style="margin: 0; color: #a5d6ff; font-family: monospace;">const val = import.meta.env.VITE_APP_NAME;</pre>
      </div>
    </div>
  </div>
`

console.log('Environment Variables:', {
  appName,
  apiUrl
})

// Fetch data from backend
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const msgElement = document.getElementById('backend-msg');
    if (msgElement && data.message) {
      msgElement.textContent = data.message;
    }
  })
  .catch(error => {
    console.error('Error fetching from backend:', error);
    const msgElement = document.getElementById('backend-msg');
    if (msgElement) {
      msgElement.textContent = 'Failed to connect';
      msgElement.style.color = '#ff6b6b';
    }
  });
