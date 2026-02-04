import { Briefcase, Users, Droplets, Calendar } from "lucide-react";

export function Stats() {
  const stats = [
    {
      icon: Briefcase,
      value: "300+",
      label: "Projects Completed"
    },
    {
      icon: Users,
      value: "250,000+",
      label: "People Served"
    },
    {
      icon: Droplets,
      value: "60,000L",
      label: "Daily Water Capacity"
    },
    {
      icon: Calendar,
      value: "Since 2019",
      label: "Years of Excellence"
    }
  ];

  return (
    <section className="py-20 bg-green-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="flex justify-center mb-4">
                <div className="bg-white/20 p-4 rounded-full">
                  <stat.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="text-4xl mb-2">{stat.value}</div>
              <div className="text-green-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
