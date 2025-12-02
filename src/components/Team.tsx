import { Users, DollarSign, Handshake } from 'lucide-react';

export default function Team() {
  const team = [
    { name: 'Alex', role: 'CTO – Customer Discovery & Technical Leadership' },
    { name: 'Johnny', role: 'Design & UX' },
    { name: 'Aslesh', role: 'Project Management' },
    { name: 'Nicholas', role: 'Fundraising & Grants' },
  ];

  const partners = [
    'New Entry Sustainable Farming Project',
    'New Farms for New Americans',
    'Nuestras Raíces',
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-700">
            Student-led nonprofit with a mission to make a difference
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-full">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">Core Team</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {team.map((member, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-green-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <span className="text-2xl font-bold text-green-600">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
                    <p className="text-sm text-gray-600">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Funding</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">$5,000</div>
                <p className="text-gray-600">Secured funding</p>
              </div>
              <div className="pt-3 border-t border-gray-300">
                <p className="text-sm text-gray-700 font-medium">
                  Additional grants pending
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-gray-50 border-2 border-gray-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Handshake className="w-8 h-8 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-900">Early Partners</h3>
            </div>
            <div className="space-y-3">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg px-4 py-3 border border-gray-200"
                >
                  <p className="font-semibold text-gray-800">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-green-900 text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Unity Provisions</h3>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            A student-run nonprofit based in Boston, dedicated to leveraging technology
            and innovation to address global food insecurity
          </p>
        </div>
      </div>
    </section>
  );
}
