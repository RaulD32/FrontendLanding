export default function Privacidad() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl mt-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 border-b pb-2">
        Aviso de Privacidad
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">1. Responsable del tratamiento</h2>
        <p className="text-gray-600 leading-relaxed">
          [Nombre de tu empresa] con domicilio en [dirección completa], es responsable del uso y protección de sus datos personales, y al respecto le informa lo siguiente.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">2. Finalidad del tratamiento</h2>
        <p className="text-gray-600 leading-relaxed">
          Los datos personales que recabamos de usted serán utilizados para las siguientes finalidades:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Proveer los servicios o productos solicitados.</li>
          <li>Contactarlo para dar seguimiento a sus solicitudes.</li>
          <li>Mejorar la calidad de nuestro servicio.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">3. Datos que se recaban</h2>
        <p className="text-gray-600 leading-relaxed">
          Los datos que recabamos pueden incluir nombre, correo electrónico, número telefónico, entre otros necesarios para contactarlo o prestarle el servicio.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">4. Derechos ARCO</h2>
        <p className="text-gray-600 leading-relaxed">
          Usted tiene derecho a acceder, rectificar y cancelar sus datos personales, así como oponerse al uso de los mismos (derechos ARCO), para lo cual puede contactarnos al correo: <a href="mailto:privacidad@tudominio.com" className="text-pink-600 underline">privacidad@tudominio.com</a>.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">5. Cambios al aviso de privacidad</h2>
        <p className="text-gray-600 leading-relaxed">
          Nos reservamos el derecho de realizar modificaciones o actualizaciones al presente aviso de privacidad en cualquier momento, para la atención de novedades legislativas o políticas internas.
        </p>
      </section>

      <p className="text-sm text-gray-500 mt-8">
        Última actualización: 23 de junio de 2025
      </p>
    </div>
  );
}
