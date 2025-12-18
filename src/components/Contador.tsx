import { useState, useEffect } from 'react';

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Contador() {
  // CONFIGURACIÓN: Cambia esta fecha por el día real de inicio (Año, Mes-1, Día, Hora, Min, Seg)
  const fechaInicio = new Date(2023, 11, 22, 18, 0, 0); 

  const [tiempo, setTiempo] = useState<TimeElapsed | null>(null);

  useEffect(() => {
    const calcularTiempo = () => {
      const ahora = new Date();
      
      // 1. Cálculo base de años, meses y días usando el calendario
      let years = ahora.getFullYear() - fechaInicio.getFullYear();
      let months = ahora.getMonth() - fechaInicio.getMonth();
      let days = ahora.getDate() - fechaInicio.getDate();

      // 2. Ajuste si los días son negativos (aún no se cumple el día del mes)
      if (days < 0) {
        months -= 1;
        // Obtenemos los días que tenía el mes anterior para compensar
        const ultimoDiaMesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
        days += ultimoDiaMesAnterior;
      }

      // 3. Ajuste si los meses son negativos (aún no se cumple el mes en el año actual)
      if (months < 0) {
        years -= 1;
        months += 12;
      }

      const diffMs = ahora.getTime() - fechaInicio.getTime();
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
      const seconds = Math.floor((diffMs / 1000) % 60);

      setTiempo({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calcularTiempo, 1000);
    calcularTiempo();

    return () => clearInterval(interval);
  }, [fechaInicio]);

  if (!tiempo) return null;

  return (
    <div className="bg-surface p-8 rounded-3xl shadow-2xl max-w-2xl mx-auto my-12 text-center">
      <h2 className="text-text-muted text-2xl mb-6 uppercase tracking-widest font-semibold">
        Tiempo caminando juntos
      </h2>
      
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        <TimeUnit value={tiempo.years} label="Años" />
        <TimeUnit value={tiempo.months} label="Meses" />
        <TimeUnit value={tiempo.days} label="Días" />
        <TimeUnit value={tiempo.hours} label="Hrs" />
        <TimeUnit value={tiempo.minutes} label="Min" />
        <TimeUnit value={tiempo.seconds} label="Seg" />
      </div>
      
      <p className="mt-8 text-primary-light italic text-xl">
        Cada segundo a tu lado es un regalo ❤️
      </p>
    </div>
  );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-4xl font-bold text-primary">{value}</span>
      <span className="text-sm text-text-muted">{label}</span>
    </div>
  );
}