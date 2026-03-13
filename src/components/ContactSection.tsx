import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding-lg">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.8, bounce: 0 }}
          className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Have questions? Want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0 }}
            className="space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <Mail className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email Us</h4>
                <p className="text-muted-foreground">manishachoudhary472@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <Phone className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Call Us</h4>
                <p className="text-muted-foreground">+91 9041909611</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                <MapPin className="text-primary-foreground" size={18} />
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Visit Us</h4>
                <p className="text-muted-foreground">#1128 Sector 67, Mohali, 160062</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8, bounce: 0, delay: 0.1 }}
            className="bg-card rounded-2xl p-8 card-shadow space-y-5"
            onSubmit={(e) => e.preventDefault()}>
            
            <Input placeholder="Your Name" className="bg-background" />
            <Input type="email" placeholder="Your Email" className="bg-background" />
            <Textarea placeholder="Your Message" rows={5} className="bg-background resize-none" />
            <Button variant="hero" size="lg" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>);

};

export default ContactSection;