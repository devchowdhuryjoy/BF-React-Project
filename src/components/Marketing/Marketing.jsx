import Meta from '../../assets/Meta.png';
import Partner from '../../assets/Partner.png';
import Market from '../../assets/Market.png';

export default function Marketing() {
  return (
    <div>
      <div className="container mx-auto p-32 text-center">
        <h2 className="text-xl font-bold mb-6">
          An official marketing partner of the industry leaders
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <img 
            src={Meta} 
            alt="Meta Business Partner" 
            className="w-22 h-auto"
          />
          <img 
            src={Partner} 
            alt="Pinterest Partners" 
            className="w-32 h-auto"
          />
          <img 
            src={Market} 
            alt="LinkedIn Marketing Partners" 
            className="w-22 h-auto"
          />
        </div>
      </div>
    </div>
  );
}
