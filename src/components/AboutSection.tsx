import { motion } from "framer-motion";
import { Target, Users, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Goal-Driven",
    description: "Set personal targets and track your progress with precision. Every step counts toward your transformation.",
  },
  {
    icon: Users,
    title: "Community First",
    description: "Connect with like-minded individuals who share your passion. Grow stronger together through shared experiences.",
  },
  {
    icon: Zap,
    title: "Challenge Ready",
    description: "Push your limits with competitive challenges. Compete, improve, and celebrate victories with your peers.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">CoreLift</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            CoreLift is your digital fitness hub — a place where personal commitment meets community energy. We believe fitness is more than exercise; it's a lifestyle amplified by connection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8, bounce: 0, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <feature.icon className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
