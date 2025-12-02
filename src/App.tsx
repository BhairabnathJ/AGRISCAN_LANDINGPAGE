import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import BetaProgram from './components/BetaProgram';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Impact />
      <Roadmap />
      <BetaProgram />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
