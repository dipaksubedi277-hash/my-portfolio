import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  // One handler for all inputs (uses the input's name)
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true); // no backend, so we only show a message
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow flex flex-col gap-3">
      {sent && <p className="bg-green-100 text-green-700 p-2 rounded">Thank you! Your message was sent.</p>}
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required className="border rounded p-2" />
      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Your email" required className="border rounded p-2" />
      <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your message" rows="4" required className="border rounded p-2" />
      <button className="bg-indigo-700 text-white rounded p-2 hover:bg-indigo-800">Send message</button>
    </form>
  );
}
