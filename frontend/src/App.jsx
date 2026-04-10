import React from 'react';
import { Bike, Wrench, Users, CheckCircle, LayoutDashboard, ClipboardList, Package, Settings, LogOut } from 'lucide-react';

function App() {
  return (
    <div className="flex min-h-screen bg-slate-100 font-sans">
      
      {/* 1. SIDEBAR (BARRA LATERAL) */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shadow-xl">
        <div className="p-6">
          <h1 className="text-white text-xl font-black flex items-center gap-2">
            <Bike className="text-blue-500" size={28} />
            MOTO-TECH
          </h1>
          <p className="text-[10px] text-slate-500 font-bold tracking-widest mt-1">SISTEMA ERP</p>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-xl font-bold">
            <LayoutDashboard size={20} /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl transition-all">
            <ClipboardList size={20} /> Órdenes
          </a>
          <a href="#" className="flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl transition-all">
            <Package size={20} /> Inventario
          </a>
          <a href="#" className="flex items-center gap-3 hover:bg-slate-800 px-4 py-3 rounded-xl transition-all">
            <Users size={20} /> Clientes
          </a>
        </nav>

        <div className="p-4 border-t border-slate-800">
          <button className="flex items-center gap-3 text-slate-500 hover:text-red-400 px-4 py-2 transition-all w-full text-sm">
            <LogOut size={18} /> Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* 2. CONTENIDO PRINCIPAL  */}
      <main className="flex-1 bg-slate-50 min-h-screen">
       <div className="p-8 w-full max-w-[1400px]">
          
          {/* Header Superior */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-black text-slate-800">Panel Principal</h2>
              <p className="text-slate-500 font-medium">Bienvenido de nuevo, Carlos Ortiz</p>
            </div>
            <div className="bg-white px-4 py-2 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">CD</div>
              <span className="text-xs font-bold text-slate-700 uppercase">Mecánico Jefe</span>
            </div>
          </div>

          {/* Tarjetas de Estado */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl shadow-sm border-b-4 border-blue-500">
              <div className="flex justify-between items-center mb-2 text-slate-400">
                <span className="text-[10px] font-black uppercase tracking-wider">En Proceso</span>
                <Wrench size={18} />
              </div>
              <h3 className="text-3xl font-black text-slate-800">14</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border-b-4 border-green-500">
              <div className="flex justify-between items-center mb-2 text-slate-400">
                <span className="text-[10px] font-black uppercase tracking-wider">Listas</span>
                <CheckCircle size={18} />
              </div>
              <h3 className="text-3xl font-black text-slate-800">08</h3>
            </div>

            <div className="bg-white p-5 rounded-2xl shadow-sm border-b-4 border-orange-500">
              <div className="flex justify-between items-center mb-2 text-slate-400">
                <span className="text-[10px] font-black uppercase tracking-wider">Clientes</span>
                <Users size={18} />
              </div>
              <h3 className="text-3xl font-black text-slate-800">22</h3>
            </div>
          </div>

          {/* Tabla */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-5 border-b border-slate-50">
              <h3 className="font-bold text-slate-800">Órdenes de Servicio Recientes</h3>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-[10px] uppercase font-black text-slate-400 tracking-widest">
                <tr>
                  <th className="px-6 py-4">Placa</th>
                  <th className="px-6 py-4">Modelo</th>
                  <th className="px-6 py-4">Cliente</th>
                  <th className="px-6 py-4">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-700">KAW-900</td>
                  <td className="px-6 py-4">Kawasaki Z900</td>
                  <td className="px-6 py-4 text-slate-600">Carlos Ortiz</td>
                  <td className="px-6 py-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-[10px] font-bold">REPARANDO</span>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-700">MT-031</td>
                  <td className="px-6 py-4">Yamaha MT-03</td>
                  <td className="px-6 py-4 text-slate-600">Jerónimo Galvis</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-[10px] font-bold">LISTO</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;