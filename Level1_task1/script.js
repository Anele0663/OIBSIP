// Simple demo interaction: adds messages to the chat and fakes an AI response
document.addEventListener('DOMContentLoaded', () => {
  const demoForm = document.getElementById('demoForm');
  const demoInput = document.getElementById('demoInput');
  const chat = document.getElementById('chat');
  const themeToggle = document.getElementById('themeToggle');

  function appendMessage(text, who='bot') {
    const el = document.createElement('div');
    el.className = 'msg ' + (who === 'bot' ? 'bot' : 'user');
    el.textContent = text;
    chat.appendChild(el);
    chat.scrollTop = chat.scrollHeight;
  }

  demoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = demoInput.value.trim();
    if (!text) return;
    appendMessage(text, 'user');
    demoInput.value = '';
    // fake "thinking"
    setTimeout(() => {
      // simple heuristic to show different demo outputs
      const low = text.toLowerCase();
      if (low.includes('summarize') || low.length > 120) {
        appendMessage('Summary: ' + (text.length > 120 ? text.slice(0,120) + '…' : 'Too short to summarize. Try pasting more notes.'));
      } else if (low.includes('quiz') || low.includes('questions')) {
        appendMessage('Quiz (2 Qs): 1) What is the main idea? 2) List 2 key points.');
      } else {
        appendMessage('Explanation: This is a short explanation of "' + text + '". Try asking for "quiz" or "summarize".');
      }
    }, 700 + Math.random()*800);
  });

  // theme toggle (light/dark)
  themeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      document.body.style = '';
      themeToggle.textContent = 'Dark';
      // revert to default (light style)
      document.body.style.background = 'linear-gradient(180deg, #f6f9ff 0%, #fbfcff 100%)';
    } else {
      document.body.classList.add('dark');
      // apply dark inline variables to mimic dark theme
      document.body.style.background = 'linear-gradient(180deg,#071326,#071a26)';
      themeToggle.textContent = 'Light';
    }
  });

  // keyboard focus helper: press Enter in input to send
  document.getElementById('demoInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      demoForm.requestSubmit();
    }
  });
});
