import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (Object.values(formData).some((v) => !v.trim())) {
      setError('Completa todos los campos.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      setError('Correo inválido.');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.correo,
          phone: formData.telefono,
          message: formData.mensaje,
        }),
      });

      if (!res.ok) throw new Error(`Error ${res.status}`);

      setStatus('success');
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
    } catch (err: any) {
      console.error(err);
      setError('Error enviando el mensaje. Intenta más tarde.');
      setStatus('error');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8" id="contact-form-section">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Contáctanos</h1>

      {status === 'success' && (
        <p className="text-green-600 font-semibold text-center mb-4">
          ¡Mensaje enviado exitosamente!
        </p>
      )}
      {(status === 'error' || error) && (
        <p className="text-red-600 font-semibold text-center mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {['nombre', 'correo', 'telefono'].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-semibold text-gray-700 capitalize">
              {field === 'nombre'
                ? 'Nombre completo'
                : field === 'correo'
                ? 'Correo electrónico'
                : 'Teléfono'}
            </label>
            <input
              name={field}
              type={field === 'correo' ? 'email' : field === 'telefono' ? 'tel' : 'text'}
              value={(formData as any)[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400"
              placeholder={
                field === 'telefono'
                  ? '(123) 456-7890'
                  : field === 'correo'
                  ? 'ejemplo@correo.com'
                  : 'Tu nombre completo'
              }
              required
            />
          </div>
        ))}

        <div>
          <label className="block mb-1 font-semibold text-gray-700">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-400"
            placeholder="Escribe tu mensaje..."
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
        >
          {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  );
}
