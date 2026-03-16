const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#home" className="text-xl font-bold">
          <span className="gradient-text">CoreLift</span>
        </a>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#events" className="hover:text-foreground transition-colors">Events</a>
          <a href="#goals" className="hover:text-foreground transition-colors">Goals</a>
          <a href="#challenges" className="hover:text-foreground transition-colors">Challenges</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
        <p className="text-sm text-muted-foreground">© 2026 CoreLift. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
