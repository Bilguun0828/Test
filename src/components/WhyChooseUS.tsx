const WhyChooseUS = () => {
  const features = [
    {
      icon: "📚",
      title: "Easy Lessons",
      description: "Simple and clear lessons for students who are just starting.",
    },
    {
      icon: "👩‍🏫",
      title: "Friendly Teachers",
      description: "Supportive teachers who explain step by step.",
    },
    {
      icon: "💻",
      title: "Practice Projects",
      description: "Students build real small projects after each lesson.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Why Choose Us</h2>
        <p className="text-gray-500 mt-2">
          We help students learn with confidence
        </p>
      </div>

      {/* Container Logic:
          - Default: 1 column (Vertical stack for mobile)
          - md: grid-cols-3 (3 columns for tablets/desktops)
          - max-w-3xl on mobile, max-w-6xl on desktop
      */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl md:max-w-6xl">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="bg-[#ebf0ff] rounded-2xl p-8 text-center shadow-sm"
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="font-bold text-xl text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUS;