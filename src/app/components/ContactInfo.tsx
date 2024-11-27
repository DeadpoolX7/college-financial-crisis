'use client'

const ContactInfo = () => {
  const contacts = [
    { id: 1, name: 'John Doe', role: 'Student Leader', phone: '+91 98765 43210' },
    { id: 2, name: 'Jane Smith', role: 'Faculty Representative', phone: '+91 87654 32109' },
    { id: 3, name: 'Mike Johnson', role: 'Alumni Spokesperson', phone: '+91 76543 21098' },
  ];

  return (
    <section id="contact-info" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((contact) => (
            <div key={contact.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{contact.name}</h3>
              <p className="text-gray-600 mb-1">{contact.role}</p>
              <p className="text-gray-800 font-bold">{contact.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
