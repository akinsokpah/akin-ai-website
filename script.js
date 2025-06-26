async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value;
  if (!message) return;

  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
  input.value = "";

  try {
    const res = await fetch("https://akin-ai-backend.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    chatBox.innerHTML += `<p><strong>Akin AI:</strong> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.innerHTML += `<p><em>Error reaching AI.</em></p>`;
  }
}￼Enter
