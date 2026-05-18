*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #0f172a;
  --bg2: #1e293b;
  --bg3: #334155;
  --border: rgba(255,255,255,0.08);
  --border2: rgba(255,255,255,0.15);
  --text: #f1f5f9;
  --text2: #94a3b8;
  --text3: #64748b;
  --green: #4ade80;
  --green-dim: rgba(74,222,128,0.12);
  --amber: #fbbf24;
  --amber-dim: rgba(251,191,36,0.12);
  --red: #f87171;
  --red-dim: rgba(248,113,113,0.12);
  --blue: #60a5fa;
  --blue-dim: rgba(96,165,250,0.12);
  --radius: 12px;
  --radius-sm: 8px;
}

html { font-size: 16px; }

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

input, select, textarea, button {
  font-family: inherit;
  font-size: 14px;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
select {
  background: var(--bg2);
  border: 1px solid var(--border2);
  color: var(--text);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  outline: none;
  width: 100%;
  transition: border-color 0.2s;
}

input:focus, select:focus {
  border-color: var(--green);
}

select option { background: var(--bg2); }

button {
  cursor: pointer;
  border: none;
  border-radius: var(--radius-sm);
  padding: 10px 18px;
  font-weight: 500;
  transition: opacity 0.15s, transform 0.1s;
}

button:active { transform: scale(0.97); }

.btn-primary {
  background: var(--green);
  color: #0f172a;
}

.btn-primary:hover { opacity: 0.9; }

.btn-ghost {
  background: transparent;
  border: 1px solid var(--border2);
  color: var(--text2);
}

.btn-ghost:hover { background: var(--bg3); color: var(--text); }

.card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 1.25rem;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  padding: 3px 9px;
  border-radius: 99px;
}

.tag-green { background: var(--green-dim); color: var(--green); }
.tag-amber { background: var(--amber-dim); color: var(--amber); }
.tag-red   { background: var(--red-dim);   color: var(--red); }
.tag-blue  { background: var(--blue-dim);  color: var(--blue); }

@media (max-width: 600px) {
  .card { padding: 1rem; }
}
