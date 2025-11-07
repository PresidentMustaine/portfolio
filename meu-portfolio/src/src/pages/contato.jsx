export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    alert(`Nome: ${data.get("name")}\nEmail: ${data.get("email")}\nMensagem: ${data.get("message")}`);
  };

  return (
    <section className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Contato</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input name="name" placeholder="Seu nome" className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700" required />
        <input name="email" placeholder="Seu e-mail" type="email" className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700" required />
        <textarea name="message" placeholder="Sua mensagem" rows="4" className="p-2 border rounded dark:bg-gray-800 dark:border-gray-700" required />
        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Enviar</button>
      </form>
    </section>
  );
}
